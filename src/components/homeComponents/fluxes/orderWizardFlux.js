import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import WizardFlux from 'components/homeComponents/fluxes/wizardFlux';
import OrderWizardStep from 'components/homeComponents/steps/general/orderWizardStep';
import {Grid, Row, Col} from 'react-flexbox-grid';

@connectToStores
class OrderWizardFlux extends WizardFlux {

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