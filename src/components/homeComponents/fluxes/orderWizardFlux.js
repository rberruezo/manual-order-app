import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import WizardFlux from 'components/homeComponents/fluxes/wizardFlux';
import OrderWizardStep from 'components/homeComponents/steps/general/orderWizardStep';
import {Grid, Row, Col} from 'react-flexbox-grid';

@connectToStores
class OrderWizardFlux extends WizardFlux {

  render() {
    return (
      <section className="wizard-box">
        <header className="wizard-header">
          <h1>Order Wizard</h1>
        </header>
        <OrderWizardStep />
      </section>
    )
  }

}

export default OrderWizardFlux;