import React from 'react';
import Address from 'components/orderWizardComponents/resources/address';

class ShippingAndBilling extends React.Component {
  render() {
    return (
      <div className="simple-form">
        <h2>Shipping address</h2>
        <Address address={this.props.order.shippingAddress} />
        <h2>Billing address</h2>
        <Address address={this.props.order.billingAddress} />
      </div>
    )
  }
}

export default ShippingAndBilling;