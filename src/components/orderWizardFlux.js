import React from 'react';
import StepProgress from 'components/orderWizardSteps/stepProgress';
import CartItems from 'components/orderWizardSteps/cartItems';
import ShippingAndBilling from 'components/orderWizardSteps/shippingAndBilling';
import OrderReview from 'components/orderWizardSteps/orderReview';
import Payment from 'components/orderWizardSteps/payment';
import Consumer from 'components/orderWizardSteps/consumer';
import Success from 'components/orderWizardSteps/success';

require('../styles/simpleForm.styl');

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

  submitChanges = evt => {
    this.nextStep();
  }

  showStep() {
    switch(this.state.step) {
      case 1:
        return <CartItems order={this.props.order}
                          nextStep={this.nextStep}
                          previousStep={this.props.cancelChanges} />
      case 2:
        return <ShippingAndBilling order={this.props.order}
                                   nextStep={this.nextStep}
                                   previousStep={this.previousStep} />
      case 3:
        return <Payment order={this.props.order}
                        nextStep={this.nextStep}
                        previousStep={this.previousStep} />
      case 4:
        return <Consumer order={this.props.order}
                         nextStep={this.nextStep}
                         previousStep={this.previousStep} />

      case 5:
        return <OrderReview order={this.props.order}
		                        previousStep={this.previousStep}
		                        submitChanges={this.submitChanges} />
      case 6:
        return <Success close={this.props.acceptChanges} />
    }
  }

  goToStep = evt => {
    this.setState({
      step : Number(evt.target.name)
    })
  }

  render() {
    var style = {
      width : (this.state.step / 6 * 100) + '%'
    }

    return (
      <main>
        <StepProgress goToStep={this.goToStep} />
        <div>
          {this.showStep()}
        </div>
      </main>
    )
  }

}

export default OrderWizardFlux;