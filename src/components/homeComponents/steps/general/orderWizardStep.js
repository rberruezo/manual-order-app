import React from 'react';
import PartnerWizardFlux from 'components/homeComponents/fluxes/partnerWizardFlux';
import OrderReview from 'components/homeComponents/steps/orderReview';

class OrderWizardStep extends React.Component {

  render() {
    if (this.props.step > this.props.order.partners.length) {
      return <OrderReview callback={this.props.callbacks.closeWizard} />
    }
    return <PartnerWizardFlux items={this.props.order.partners[this.props.step-1].items}
                              name={this.props.order.partners[this.props.step-1].name}
                              shippingAddress={this.props.order.shippingAddress}
                              billingAddress={this.props.order.billingAddress}
                              payment={this.props.order.paymentData}
                              callbacks={this.props.callbacks} />
  }

}

export default OrderWizardStep;