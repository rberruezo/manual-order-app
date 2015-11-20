import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import OrderWizardStore from 'stores/orderWizardStore';
import Address from 'components/homeComponents/resources/address';
import {SHIPPING_AND_BILLING} from 'constants/stepTitles';

@connectToStores
class ShippingAndBilling extends React.Component {
  constructor(props) {
    super(props);
  }

  static getStores(props) {
    return [OrderWizardStore];
  }

  static getPropsFromStores(props) {
    return OrderWizardStore.getState();
  }

  render() {
    return (
      <div>
        <h3>Shipping address</h3>
        <Address address={this.props.order.shippingAddress} />
        <h3>Billing address</h3>
        <Address address={this.props.order.billingAddress} />
      </div>
    )
  }
}

export default ShippingAndBilling;