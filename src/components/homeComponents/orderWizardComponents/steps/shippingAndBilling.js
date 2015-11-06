import React from 'react';
import Address from 'components/homeComponents/orderWizardComponents/resources/address';
import {SHIPPING_AND_BILLING_TITLE} from 'constants/orderWizardSteps';

class ShippingAndBilling extends React.Component {
  render() {
    return (
      <div className="simple-form">
        <h2>{SHIPPING_AND_BILLING_TITLE}</h2>
        <h3>Shipping address</h3>
        <Address address={this.props.shippingAddress} />
        <h3>Billing address</h3>
        <Address address={this.props.billingAddress} />
      </div>
    )
  }
}

export default ShippingAndBilling;