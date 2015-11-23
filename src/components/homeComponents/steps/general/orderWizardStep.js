import React from 'react';
import PartnerWizardFlux from 'components/homeComponents/fluxes/partnerWizardFlux';
import OrderReview from 'components/homeComponents/steps/orderReview';
import OrderWizardResult from 'components/homeComponents/steps/orderWizardResult';
import Buttonpad from 'components/homeComponents/resources/buttonpad';
import connectToStores from 'alt/utils/connectToStores';
import OrderWizardStore from 'stores/orderWizardStore';
import OrderWizardActions from 'actions/orderWizardActions';
import {SUBMIT_ORDER_STATUS} from 'constants/stepButtonLabels';
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

  getButtonpadCallbacks() {
    var _that = this;
    return {
      previousStep: OrderWizardActions.previousStep,
      nextStep: OrderWizardActions.nextStep,
      closeWizard: OrderWizardActions.closeWizard,
      cancelChanges: OrderWizardActions.cancelChanges,
      submitOrderStatus: OrderWizardActions.submitStatus.bind(OrderWizardActions, _that.props.order)
    }
  }

  render() {
    switch(this.props.step-this.props.order.partners.length) {
      case 1:
        return (
          <div>
            <OrderReview />
            <Buttonpad buttons={[
              {callback: this.getButtonpadCallbacks().submitOrderStatus, text: SUBMIT_ORDER_STATUS}
            ]} />
          </div>
          )
      case 2:
        return (
          <Row className='center-md'>
            <Col>
              <OrderWizardResult />
            </Col>
          </Row>
          )
      default:
        return <PartnerWizardFlux callbacks={this.getButtonpadCallbacks()} />
    }
  }

}

export default OrderWizardStep;