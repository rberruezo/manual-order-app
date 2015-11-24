import React from 'react';
import WizardFlux from 'components/homeComponents/fluxes/wizardFlux';
import PartnerWizardStep from 'components/homeComponents/steps/general/partnerWizardStep';
import connectToStores from 'alt/utils/connectToStores';
import OrderWizardStore from 'stores/orderWizardStore';
import {Grid, Row, Col} from 'react-flexbox-grid';

@connectToStores
class PartnerWizardFlux extends WizardFlux {
  constructor(props) {
    super(props);
  }

  static getStores(props) {
    return [OrderWizardStore];
  }

  static getPropsFromStores(props) {
    return OrderWizardStore.getState();
  }

  getPartner() {
    return this.props.order.partners[this.props.step-1];
  }

	render() {
    return (
      <Grid>
        <Row>
          <Col>
            <h2>Partner: {this.getPartner().name}</h2>
          </Col>
          <Col md-offset={1} md={10}>
            <PartnerWizardStep />
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default PartnerWizardFlux;
