import React from 'react';
import CartItems from 'components/orderWizardSteps/cartItems';
import ShippingAndBilling from 'components/orderWizardSteps/shippingAndBilling';
import OrderReview from 'components/orderWizardSteps/orderReview';
import Payment from 'components/orderWizardSteps/payment';
import Success from 'components/orderWizardSteps/success';

require('../styles/orderWizard.styl');

class OrderWizardFlux extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      step : 1
    };
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
    this.nextStep();
  }

  showStep() {
    switch(this.state.step) {
      case 1:
        return <CartItems order={this.props.order}
                          nextStep={this.nextStep}
                          previousStep={this.props.cancelChanges}
                          saveValues={this.saveValues} />
      case 2:
        return <ShippingAndBilling order={this.props.order}
                                   nextStep={this.nextStep}
                                   previousStep={this.previousStep}
                                   saveValues={this.saveValues} />
      case 3:
        return <Payment order={this.props.order}
                        nextStep={this.nextStep}
                        previousStep={this.previousStep}
                        saveValues={this.saveValues} />
      case 4:
        return <OrderReview order={this.props.order}
		                        previousStep={this.previousStep}
		                        submitRegistration={this.submitRegistration} />
      case 5:
        return <Success close={this.props.acceptChanges} />
    }
  }

  render() {
    var style = {
      width : (this.state.step / 5 * 100) + '%'
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