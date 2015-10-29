import React from 'react';
import ProductsInformation from 'components/orderWizardSteps/productsInformation';
import ShippingAndBilling from 'components/orderWizardSteps/shippingAndBilling';
import OrderReview from 'components/orderWizardSteps/orderReview';
import Success from 'components/orderWizardSteps/success';

require('../styles/orderWizard.styl');

var fieldValues = {
  name     : null,
  email    : null,
  password : null,
  age      : null,
  colors   : []
}

class OrderWizardFlux extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      step : 1
    };
  }

  saveValues(field_value) {
    return function() {
      fieldValues = assign({}, fieldValues, field_value)
    }.bind(this)()
  }

  nextStep = evt => {
    this.setState({
      step : this.state.step + 1
    })
  }

  previousStep = evt => {
    this.setState({
      step : this.state.step - 1
    })
  }

  submitRegistration = evt => {
  	console.log('submitRegistration');
    this.nextStep();
  }

  showStep() {
    switch(this.state.step) {
      case 1:
        return <ProductsInformation fieldValues={fieldValues}
					                          nextStep={this.nextStep}
					                          previousStep={this.previousStep}
					                          saveValues={this.saveValues} />
      case 2:
        return <ShippingAndBilling 	fieldValues={fieldValues}
					                          nextStep={this.nextStep}
					                          previousStep={this.previousStep}
					                          saveValues={this.saveValues} />
      case 3:
        return <OrderReview 	fieldValues={fieldValues}
		                          previousStep={this.previousStep}
		                          submitRegistration={this.submitRegistration} />
      case 4:
        return <Success fieldValues={fieldValues} />
    }
  }

  render() {
    var style = {
      width : (this.state.step / 4 * 100) + '%'
    }

    return (
      <main>
        <span className="progress-step">Step {this.state.step}</span>
        <progress className="progress" style={style}></progress>
        {this.showStep()}
      </main>
    )
  }

}

export default OrderWizardFlux;