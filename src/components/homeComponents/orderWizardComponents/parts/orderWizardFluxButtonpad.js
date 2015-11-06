import React from 'react';
import Buttonpad from 'components/homeComponents/orderWizardComponents/resources/buttonpad';
import {CART_ITEMS, SHIPPING_AND_BILLING, PAYMENT, CONSUMER, ORDER_REVIEW, SUCCESS} from 'constants/orderWizardSteps';
import {CANCEL, BACK, CONTINUE, SUBMIT_CHANGES, CLOSE} from 'constants/orderWizardStepsButtons';

class OrderWizardFluxButtonpad extends React.Component {

  getStepView() {
    var stepView;
    if (this.props.step <= this.props.items.length) {
      stepView = <Item item={this.props.items[this.props.step]} />
    } else {
      switch(this.props.step-this.props.items.length) {
        case 1:
          stepView = <ShippingAndBilling shippingAddress={this.props.shippingAddress}
                                         billingAddress={this.props.billingAddress} />
          break;
        case 2:
          stepView = <Payment payment={this.props.payment} />
          break;
        case 3:
          stepView = <Success />
          break;
        default:
          stepView = <div></div>
      }
    }
    return stepView;
  }

  getStepButtons() {
  	var callbacks = this.props.callbacks;
    var buttons = [];
    switch(this.props.step) {
      case 1:
        buttons = [
                    {callback: callbacks.cancelChanges, text: CANCEL},
                    {callback: callbacks.nextStep, text: CONTINUE},
                    {callback: callbacks.submitChanges, text: SUBMIT_CHANGES}
                  ];
        break;
      case (this.props.items.length+2):
        buttons = [
                    {callback: callbacks.previousStep, text: BACK},
                    {callback: callbacks.submitChanges, text: SUBMIT_CHANGES}
                  ];
        break;
      case (this.props.items.length+3):
        buttons = [
                    {callback: callbacks.closeWizard, text: CLOSE}
                  ];
        break;                  
      default:
        buttons = [
                    {callback: callbacks.previousStep, text: BACK},
                    {callback: callbacks.nextStep, text: CONTINUE}
                  ];
    }
    return buttons;
  }

  render() {
    return (
      <Buttonpad buttons={this.getStepButtons()} />
    )
  }
}

export default OrderWizardFluxButtonpad;