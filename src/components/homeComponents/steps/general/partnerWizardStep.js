import React from 'react';
import Item from 'components/homeComponents/steps/item';
import ShippingAndBilling from 'components/homeComponents/steps/shippingAndBilling';
import Payment from 'components/homeComponents/steps/payment';
import Message from 'components/homeComponents/steps/message';
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
      case (this.props.items.length+3):
        buttons = [
                    {callback: callbacks.closeWizard, text: OK}
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

  getStepView() {
    switch(this.props.step-this.props.items.length) {
      case 1:
        return <ShippingAndBilling shippingAddress={this.props.shippingAddress}
                                   billingAddress={this.props.billingAddress} />
      case 2:
        return <Payment payment={this.props.payment} />
      case 3:
        return <Message text='Items Status changed successfully' />
      default:
        return <Item item={this.props.items[this.props.step-1]} />
    }
  }

  render() {
    return (
      <div>
        {this.getStepView()}
        <Buttonpad buttons={this.getStepButtons()} />
      </div>
    )
  }

}

export default PartnerWizardStep;