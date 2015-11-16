import React from 'react';
import Address from 'components/homeComponents/resources/address';
import {SHIPPING_AND_BILLING} from 'constants/stepTitles';

class ShippingAndBilling extends React.Component {
  render() {
    return (
      <div>
        <h2>Shipping address</h2>
        <Address address={this.props.shippingAddress} />
        <h2>Billing address</h2>
        <Address address={this.props.billingAddress} />
      </div>
    )
  }
}

export default ShippingAndBilling;