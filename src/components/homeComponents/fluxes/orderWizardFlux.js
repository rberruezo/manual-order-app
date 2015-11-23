import React from 'react';
import WizardFlux from 'components/homeComponents/fluxes/wizardFlux';
import OrderWizardActions from 'actions/orderWizardActions';
import OrdersActions from 'actions/ordersActions';
import OrderWizardStep from 'components/homeComponents/steps/general/orderWizardStep';
import connectToStores from 'alt/utils/connectToStores';
import OrderWizardStore from 'stores/orderWizardStore';
import Utilities from 'utilities/utilities';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {SUBMITING} from 'constants/apiCallStatus';

@connectToStores
class OrderWizardFlux extends WizardFlux {
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
    return {
      previousStep: OrderWizardActions.previousStep,
      nextStep: OrderWizardActions.nextStep,
      closeWizard: OrderWizardActions.closeWizard,
      cancelChanges: OrderWizardActions.cancelChanges,
      submitOrderStatus: this.submitOrderStatus
    }
  }

  submitOrderStatus = evt => {
    OrderWizardActions.submitStatus(this.props.order);
  }

  render() {
    return (
      <Grid>
        <Row className='center-sm center-md'>
          <h1>Order Wizard</h1>
        </Row>
        <OrderWizardStep callbacks={this.getButtonpadCallbacks()} />
      </Grid>
    )
  }
}

export default OrderWizardFlux;