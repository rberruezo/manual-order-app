import React from 'react';
import StepProgress from 'components/orderWizardSteps/stepProgress';
import CartItems from 'components/orderWizardSteps/cartItems';
import ShippingAndBilling from 'components/orderWizardSteps/shippingAndBilling';
import OrderReview from 'components/orderWizardSteps/orderReview';
import Payment from 'components/orderWizardSteps/payment';
import Consumer from 'components/orderWizardSteps/consumer';
import Success from 'components/orderWizardSteps/success';
import {CART_ITEMS, SHIPPING_AND_BILLING, PAYMENT, CONSUMER, ORDER_REVIEW, SUCCESS} from 'constants/wizardSteps';

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
    this.setState({
      step : SUCCESS
    })
  }

  showStep() {
    switch(this.state.step) {
      case CART_ITEMS:
        return <CartItems order={this.props.order}
                          nextStep={this.nextStep}
                          previousStep={this.props.cancelChanges}
                          submitChanges={this.submitChanges} />
      case SHIPPING_AND_BILLING:
        return <ShippingAndBilling order={this.props.order}
                                   nextStep={this.nextStep}
                                   previousStep={this.previousStep}
                                   submitChanges={this.submitChanges} />
      case PAYMENT:
        return <Payment order={this.props.order}
                        nextStep={this.nextStep}
                        previousStep={this.previousStep}
                        submitChanges={this.submitChanges} />
      case CONSUMER:
        return <Consumer order={this.props.order}
                         nextStep={this.nextStep}
                         previousStep={this.previousStep}
                         submitChanges={this.submitChanges} />

      case ORDER_REVIEW:
        return <OrderReview order={this.props.order}
		                        previousStep={this.previousStep}
		                        submitChanges={this.submitChanges} />
      case SUCCESS:
        return <Success close={this.props.acceptChanges} />
    }
  }

  goToStep = evt => {
    this.setState({
      step : Number(evt.target.name)
    })
  }

  render() {
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