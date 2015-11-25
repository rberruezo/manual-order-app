import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import WizardFlux from 'components/homeComponents/fluxes/wizardFlux';
import PartnerWizardStep from 'components/homeComponents/steps/general/partnerWizardStep';

@connectToStores
class PartnerWizardFlux extends WizardFlux {

  getPartner() {
    return this.props.order.partners[this.props.step-1];
  }

	render() {
    return (
      <section className="wizard-subbox">
        <header className="wizard-subheader">
          <h2>Partner: {this.getPartner().name}</h2>
        </header>
        <PartnerWizardStep />
      </section>
    )
  }

}

export default PartnerWizardFlux;
