import React from 'react';
import {CART_ITEMS, SHIPPING_AND_BILLING, PAYMENT, CONSUMER, ORDER_REVIEW, SUCCESS} from 'constants/orderWizardSteps';
import CartItems from 'components/homeComponents/orderWizardComponents/steps/cartItems';
import ShippingAndBilling from 'components/homeComponents/orderWizardComponents/steps/shippingAndBilling';
import OrderReview from 'components/homeComponents/orderWizardComponents/steps/orderReview';
import Payment from 'components/homeComponents/orderWizardComponents/steps/payment';
import Consumer from 'components/homeComponents/orderWizardComponents/steps/consumer';
import Success from 'components/homeComponents/orderWizardComponents/steps/success';

class OrderWizardStep extends React.Component {
  
  getStepView() {
    var stepView;
    switch(this.props.step) {
      case CART_ITEMS:
        stepView = <CartItems order={this.props.order} />
        break;
      case SHIPPING_AND_BILLING:
        stepView = <ShippingAndBilling order={this.props.order} />
        break;
      case PAYMENT:
        stepView = <Payment order={this.props.order} />
        break;
      case CONSUMER:
        stepView = <Consumer order={this.props.order} />
        break;
      case ORDER_REVIEW:
        stepView = <OrderReview order={this.props.order} />
        break;
      case SUCCESS:
        stepView = <Success />
        break;
      default:
        stepView = <div></div>
    }
    return stepView;
  }

  render() {
    return (
    	<div>
      	{this.getStepView()}
      </div>
    )
  }
}

export default OrderWizardStep;