import React from 'react';
import {CART_ITEMS, SHIPPING_AND_BILLING, PAYMENT, CONSUMER, ORDER_REVIEW, SUCCESS} from 'constants/wizardSteps';
import CartItems from 'components/orderWizardSteps/cartItems';
import ShippingAndBilling from 'components/orderWizardSteps/shippingAndBilling';
import OrderReview from 'components/orderWizardSteps/orderReview';
import Payment from 'components/orderWizardSteps/payment';
import Consumer from 'components/orderWizardSteps/consumer';
import Success from 'components/orderWizardSteps/success';

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