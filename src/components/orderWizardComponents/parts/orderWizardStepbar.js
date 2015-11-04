import React from 'react';

require('../../../styles/stepbar.styl');

class OrderWizardStepbar extends React.Component {
  render() {
    return (
      <ul>
        <li><a href="#" onClick={this.props.goToStep} name="1" id="1">Cart Items</a></li>
        <li><a href="#" onClick={this.props.goToStep} name="2" id="2">Shipping &amp; Billing</a></li>
        <li><a href="#" onClick={this.props.goToStep} name="3" id="3">Payment</a></li>
        <li><a href="#" onClick={this.props.goToStep} name="4" id="4">Consumer</a></li>
        <li><a href="#" onClick={this.props.goToStep} name="5" id="5">Order Review</a></li>
      </ul>
    )
  }
}

export default OrderWizardStepbar;