import React from 'react';
import PartnerWizardFlux from 'components/homeComponents/fluxes/partnerWizardFlux';
import OrderReview from 'components/homeComponents/resources/orderReview';

class OrderWizardStep extends React.Component {

  getStepView() {
    var view;
    if (this.props.step <= this.props.order.partners.length) {
      view = <PartnerWizardFlux items={this.props.order.partners[this.props.step-1].items}
                                shippingAddress={this.props.order.shippingAddress}
                                billingAddress={this.props.order.billingAddress}
                                payment={this.props.order.paymentData}
                                callbacks={this.props.callbacks} />
    } else {
      view = <OrderReview callback={this.props.callbacks.closeWizard} />
    }
    return view;
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