import React from 'react';
import Address from 'components/homeComponents/resources/address';
import {SHIPPING_AND_BILLING} from 'constants/stepTitles';

class ShippingAndBilling extends React.Component {
  render() {
    return (
      <div>
        <h3>Shipping address</h3>
        <Address address={this.props.shippingAddress} />
        <h3>Billing address</h3>
        <Address address={this.props.billingAddress} />
      </div>
    )
  }
}

export default ShippingAndBilling;