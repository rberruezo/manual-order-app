import React from 'react';
import WizardFlux from 'components/homeComponents/fluxes/wizardFlux';
import OrderWizardStep from 'components/homeComponents/steps/general/orderWizardStep';
import connectToStores from 'alt/utils/connectToStores';
import OrderWizardStore from 'stores/orderWizardStore';
import {Grid, Row, Col} from 'react-flexbox-grid';

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

  render() {
    return (
      <Grid>
        <Row className='center-sm center-md'>
          <h1>Order Wizard</h1>
        </Row>
        <OrderWizardStep />
      </Grid>
    )
  }
}

export default OrderWizardFlux;