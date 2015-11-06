import React from 'react';
import Item from 'components/homeComponents/steps/item';
import ShippingAndBilling from 'components/homeComponents/steps/shippingAndBilling';
import Payment from 'components/homeComponents/steps/payment';
import Success from 'components/homeComponents/steps/success';

class PartnerWizardStep extends React.Component {
  
  render() {
    if (this.props.step <= this.props.items.length) {
      return <Item item={this.props.items[this.props.step-1]} />
    }
    switch(this.props.step-this.props.items.length) {
      case 1:
        return <ShippingAndBilling shippingAddress={this.props.shippingAddress}
                                   billingAddress={this.props.billingAddress} />
      case 2:
        return <Payment payment={this.props.payment} />
      case 3:
        return <Success />
      default:
        return <div />
    }
  }

}

export default PartnerWizardStep;