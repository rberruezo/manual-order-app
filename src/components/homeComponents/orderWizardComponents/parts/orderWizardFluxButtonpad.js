import React from 'react';
import Buttonpad from 'components/homeComponents/orderWizardComponents/resources/buttonpad';
import {CART_ITEMS, SHIPPING_AND_BILLING, PAYMENT, CONSUMER, ORDER_REVIEW, SUCCESS} from 'constants/orderWizardSteps';
import {CANCEL, BACK, CONTINUE, SUBMIT_CHANGES, CLOSE} from 'constants/orderWizardStepsButtons';

class OrderWizardFluxButtonpad extends React.Component {

  getStepButtons() {
  	var callbacks = this.props.callbacks;
    var buttons = [];
    switch(this.props.step) {
      case CART_ITEMS:
        buttons = [
                    {callback: callbacks.cancelChanges, text: CANCEL},
                    {callback: callbacks.nextStep, text: CONTINUE},
                    {callback: callbacks.submitChanges, text: SUBMIT_CHANGES}
                  ];
        break;
      case SHIPPING_AND_BILLING:
      case PAYMENT:
      case CONSUMER:
        buttons = [
                    {callback: callbacks.previousStep, text: BACK},
                    {callback: callbacks.nextStep, text: CONTINUE},
                    {callback: callbacks.submitChanges, text: SUBMIT_CHANGES}
                  ];
        break;
      case ORDER_REVIEW:
        buttons = [
                    {callback: callbacks.previousStep, text: BACK},
                    {callback: callbacks.submitChanges, text: SUBMIT_CHANGES}
                  ];
        break;
      case SUCCESS:
        buttons = [
                    {callback: callbacks.closeWizard, text: CLOSE}
                  ];
        break;                  
      default:
        buttons = [];
        break;
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