import React from 'react';
import Item from 'components/homeComponents/steps/item';
import ShippingAndBilling from 'components/homeComponents/steps/shippingAndBilling';
import Payment from 'components/homeComponents/steps/payment';
import Message from 'components/homeComponents/steps/message';
import PartnerWizardResult from 'components/homeComponents/steps/partnerWizardResult';
import Buttonpad from 'components/homeComponents/resources/buttonpad';
import {CANCEL, BACK, CONTINUE, SUBMIT_ITEM_STATUS, OK} from 'constants/stepButtonLabels';

class PartnerWizardStep extends React.Component {
  
  getStepButtons() {
    var callbacks = this.props.callbacks;
    var buttons = [];
    switch(this.props.step) {
      case 1:
        buttons = [
                    {callback: callbacks.cancelChanges, text: CANCEL},
                    {callback: callbacks.nextStep, text: CONTINUE}
                  ];
        break;
      case (this.props.items.length+2):
        buttons = [
                    {callback: callbacks.previousStep, text: BACK},
                    {callback: callbacks.submitItemsStatus, text: SUBMIT_ITEM_STATUS}
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
    switch(this.props.step-this.props.items.length) {
      case 1:
        return (
          <div>
            <ShippingAndBilling shippingAddress={this.props.shippingAddress}
                                billingAddress={this.props.billingAddress} />
            <Buttonpad buttons={this.getStepButtons()} />
          </div>
        )
      case 2:
        return (
          <div>
            <Payment payment={this.props.payment} />
            <Buttonpad buttons={this.getStepButtons()} />
          </div>
        )
      case 3:
        return <PartnerWizardResult result={this.props.result}
                                    callbacks={this.props.callbacks} />
      default:
        return (
          <div>
            <Item item={this.props.items[this.props.step-1]} />
            <Buttonpad buttons={this.getStepButtons()} />
          </div>
        )
    }
  }
}

export default PartnerWizardStep;