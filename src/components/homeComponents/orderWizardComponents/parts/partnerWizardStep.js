import React from 'react';
import {CART_ITEMS, SHIPPING_AND_BILLING, PAYMENT, CONSUMER, ORDER_REVIEW, SUCCESS} from 'constants/orderWizardSteps';
import Item from 'components/homeComponents/orderWizardComponents/resources/item';
import ShippingAndBilling from 'components/homeComponents/orderWizardComponents/steps/shippingAndBilling';
import Payment from 'components/homeComponents/orderWizardComponents/steps/payment';
import Success from 'components/homeComponents/orderWizardComponents/steps/success';

class PartnerWizardStep extends React.Component {
  
  getStepView() {
    var stepView;
    if (this.props.step <= this.props.items.length) {
      stepView = <Item item={this.props.items[this.props.step-1]} />
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

  render() {
    return (
    	<div>
      	{this.getStepView()}
      </div>
    )
  }
}

export default PartnerWizardStep;