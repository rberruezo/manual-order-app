import React from 'react';
import Address from 'components/orderWizardSteps/address';

class ShippingAndBilling extends React.Component {
  render() {
    return (
      <div className="simple-form">
        <h2>Shipping address</h2>
        <Address address={this.props.order.shippingAddress} />
        <h2>Billing address</h2>
        <Address address={this.props.order.billingAddress} />
        <div className="button">
          <button onClick={this.props.previousStep}>Back</button>
          <button onClick={this.props.nextStep}>Continue</button>
          <button onClick={this.props.submitChanges}>Submit Changes</button>
        </div>
      </div>
    )
  }
}

export default ShippingAndBilling;