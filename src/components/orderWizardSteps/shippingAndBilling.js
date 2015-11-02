import React from 'react';
import Address from 'components/orderWizardSteps/address';

class ShippingAndBilling extends React.Component {
  render() {
    return (
      <div className="login-content">
        <h2>Shipping address</h2>
        <Address address={this.props.order.shippingAddress} />
        <h2>Billing address</h2>
        <Address address={this.props.order.billingAddress} />
        <ul className="form-fields">
          <li className="form-footer">
            <button className="btn -default pull-left" onClick={this.props.previousStep}>Back</button>
            <button className="btn -primary pull-right" onClick={this.props.nextStep}>Save &amp; Continue</button>
          </li>
        </ul>
      </div>
    )
  }
}

export default ShippingAndBilling;