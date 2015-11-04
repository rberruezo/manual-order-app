import React from 'react';
import {CART_ITEMS_TITLE, SHIPPING_AND_BILLING_TITLE, PAYMENT_TITLE, CONSUMER_TITLE, ORDER_REVIEW_TITLE} from 'constants/orderWizardSteps';

require('../../../styles/stepbar.styl');

class OrderWizardStepbar extends React.Component {
  render() {
    return (
      <ul>
        <li><a href="#" onClick={this.props.goToStep} name="1" id="1">{CART_ITEMS_TITLE}</a></li>
        <li><a href="#" onClick={this.props.goToStep} name="2" id="2">{SHIPPING_AND_BILLING_TITLE}</a></li>
        <li><a href="#" onClick={this.props.goToStep} name="3" id="3">{PAYMENT_TITLE}</a></li>
        <li><a href="#" onClick={this.props.goToStep} name="4" id="4">{CONSUMER_TITLE}</a></li>
        <li><a href="#" onClick={this.props.goToStep} name="5" id="5">{ORDER_REVIEW_TITLE}</a></li>
      </ul>
    )
  }
}

export default OrderWizardStepbar;