import React from 'react';
import PartnerWizardFlux from 'components/homeComponents/fluxes/partnerWizardFlux';
import OrderReview from 'components/homeComponents/steps/orderReview';
import Message from 'components/homeComponents/steps/message';
import Buttonpad from 'components/homeComponents/resources/buttonpad';
import {CLOSE, SUBMIT_ORDER_STATUS} from 'constants/stepButtonLabels';

class OrderWizardStep extends React.Component {

  render() {
    switch(this.props.step-this.props.order.partners.length) {
      case 1:
        return (
          <div>
            <OrderReview order={this.props.order} />
            <Buttonpad buttons={[
              {callback: this.props.callbacks.submitOrderStatus, text: SUBMIT_ORDER_STATUS}
            ]} />
          </div>
          )
      case 2:
        if (this.props.result) {
          return (
            <div>
              <Message text='Order Status changed successfully' />
              <Buttonpad buttons={[
                {callback: this.props.callbacks.closeWizard, text: CLOSE}
              ]} />
            </div>
            )
        } else {
          return (
            <div>
              <Message text='Failed to update Order Status!' />
              <Buttonpad buttons={[
                        {callback: this.props.callbacks.tryAgainToSubmitOrderStatus, text: 'Try Again'},
                        {callback: this.props.callbacks.closeWizard, text: CLOSE}
              ]} />
            </div>
            )
        }
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