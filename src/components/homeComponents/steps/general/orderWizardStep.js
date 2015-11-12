import React from 'react';
import PartnerWizardFlux from 'components/homeComponents/fluxes/partnerWizardFlux';
import OrderReview from 'components/homeComponents/steps/orderReview';
import OrderWizardResult from 'components/homeComponents/steps/orderWizardResult';
import Buttonpad from 'components/homeComponents/resources/buttonpad';
import {SUBMIT_ORDER_STATUS} from 'constants/stepButtonLabels';
import {NONE, SUCCESS, FAIL} from 'constants/apiCallStatus';

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
        return <OrderWizardResult result={this.props.result}
                                  callbacks={this.props.callbacks} />
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