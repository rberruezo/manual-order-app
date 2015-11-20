import React from 'react';
import PartnerWizardFlux from 'components/homeComponents/fluxes/partnerWizardFlux';
import OrderReview from 'components/homeComponents/steps/orderReview';
import OrderWizardResult from 'components/homeComponents/steps/orderWizardResult';
import Buttonpad from 'components/homeComponents/resources/buttonpad';
import connectToStores from 'alt/utils/connectToStores';
import OrderWizardStore from 'stores/orderWizardStore';
import {SUBMIT_ORDER_STATUS} from 'constants/stepButtonLabels';
import {NONE, SUCCESS, FAIL} from 'constants/apiCallStatus';
import {Grid, Row, Col} from 'react-flexbox-grid';

@connectToStores
class OrderWizardStep extends React.Component {
  constructor(props) {
    super(props);
  }

  static getStores(props) {
    return [OrderWizardStore];
  }

  static getPropsFromStores(props) {
    return OrderWizardStore.getState();
  }

  render() {
    switch(OrderWizardStore.getState().step-this.props.order.partners.length) {
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
        return (
          <Row className='center-md'>
            <Col>
              <OrderWizardResult callbacks={this.props.callbacks} />
            </Col>
          </Row>
          )
      default:
        return <PartnerWizardFlux items={this.props.order.partners[OrderWizardStore.getState().step-1].items}
                                  name={this.props.order.partners[OrderWizardStore.getState().step-1].name}
                                  shippingAddress={this.props.order.shippingAddress}
                                  billingAddress={this.props.order.billingAddress}
                                  payment={this.props.order.paymentData}
                                  callbacks={this.props.callbacks} />
    }
  }

}

export default OrderWizardStep;