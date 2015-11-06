import React from 'react';
import Item from 'components/homeComponents/resources/item';
import ShippingAndBilling from 'components/homeComponents/resources/shippingAndBilling';
import Payment from 'components/homeComponents/resources/payment';
import Success from 'components/homeComponents/resources/success';

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