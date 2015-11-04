import React from 'react';
import StepProgress from 'components/orderWizardSteps/stepProgress';
import CartItems from 'components/orderWizardSteps/cartItems';
import ShippingAndBilling from 'components/orderWizardSteps/shippingAndBilling';
import OrderReview from 'components/orderWizardSteps/orderReview';
import Payment from 'components/orderWizardSteps/payment';
import Consumer from 'components/orderWizardSteps/consumer';
import Success from 'components/orderWizardSteps/success';
import OrderWizardFluxButtonpad from 'components/orderWizardSteps/orderWizardFluxButtonpad';
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

  goToStep = evt => {
    this.setState({
      step : Number(evt.target.name)
    })
  }

  getStepView() {
    var stepView;
    switch(this.state.step) {
      case CART_ITEMS:
        stepView = <CartItems order={this.props.order} />
        break;
      case SHIPPING_AND_BILLING:
        stepView = <ShippingAndBilling order={this.props.order} />
        break;
      case PAYMENT:
        stepView = <Payment order={this.props.order} />
        break;
      case CONSUMER:
        stepView = <Consumer order={this.props.order} />
        break;
      case ORDER_REVIEW:
        stepView = <OrderReview order={this.props.order} />
        break;
      case SUCCESS:
        stepView = <Success />
        break;
      default:
        stepView = <div></div>
    }
    return stepView;
  }

  getButtonpadCallbacks() {
    return {
      previousStep: this.previousStep,
      nextStep: this.nextStep,
      submitChanges: this.submitChanges,
      acceptChanges: this.props.acceptChanges,
      cancelChanges: this.props.cancelChanges
    };
  }

  render() {
    return (
      <main>
        <StepProgress goToStep={this.goToStep} />
        <div>
          {this.getStepView()}
          <OrderWizardFluxButtonpad step={this.state.step}
                                    callbacks={this.getButtonpadCallbacks()} />
        </div>
      </main>
    )
  }

}

export default OrderWizardFlux;