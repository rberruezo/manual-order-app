import React from 'react';
import PartnerWizardFlux from 'components/homeComponents/fluxes/partnerWizardFlux';
import OrderReview from 'components/homeComponents/steps/orderReview';
import Message from 'components/homeComponents/steps/message';

class OrderWizardStep extends React.Component {

  render() {
    console.log('OrderWizardStep');
    console.log(this.props.step);
    console.log(this.props.order.partners.length);
    switch(this.props.step-this.props.order.partners.length) {
      case 1:
        return <OrderReview order={this.props.order}
                            callback={this.props.callbacks.submitOrderStatus} />
      case 2:
        return <Message text='Order Status changes successfully'
                        callback={this.props.callbacks.closeWizard} />
      default:
        return <PartnerWizardFlux items={this.props.order.partners[this.props.step-1].items}
                                  name={this.props.order.partners[this.props.step-1].name}
                                  shippingAddress={this.props.order.shippingAddress}
                                  billingAddress={this.props.order.billingAddress}
                                  payment={this.props.order.paymentData}
                                  callbacks={this.props.callbacks} />
    }
  }

}

export default OrderWizardStep;