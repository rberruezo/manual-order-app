import React from 'react';
import WizardFlux from 'components/homeComponents/fluxes/wizardFlux';
import PartnerWizardActions from 'actions/partnerWizardActions';
import PartnerWizardStep from 'components/homeComponents/steps/general/partnerWizardStep';
import connectToStores from 'alt/utils/connectToStores';
import PartnerWizardStore from 'stores/partnerWizardStore';
import Utilities from 'utilities/utilities';
import {Grid, Row, Col} from 'react-flexbox-grid';

var originalItems = {};

@connectToStores
class PartnerWizardFlux extends WizardFlux {
  constructor(props) {
    super(props);
    Utilities.copyObjectAttributes(originalItems, props.partner.items);
  }

  static getStores(props) {
    return [PartnerWizardStore];
  }

  static getPropsFromStores(props) {
    return PartnerWizardStore.getState();
  }

  getWizardActions() {
    return PartnerWizardActions;
  }

  getButtonpadCallbacks() {
    var buttonpadCallbacks = this.getBasicButtonpadCallbacks();
    buttonpadCallbacks.submitItemsStatus = this.submitItemsStatus;
    return buttonpadCallbacks;
  }

  submitItemsStatus = evt => {
    //Go directly to Last Step = Q(items) + S&B + Payment + Result Message
    this.submitStatus(this.props.partner.items.length+3);
    PartnerWizardActions.submitItemsStatus(this.props.partner.items);
  }

  cancelChanges = evt => {
    Utilities.copyObjectAttributes(this.props.partner.items, originalItems);
    originalItems = {};
    this.closeWizard();
  }

  closeWizard = evt => {
    PartnerWizardActions.updateStep(1);
    this.props.callbacks.nextStep();
  }

  componentWillReceiveProps(nextProps) {
    if (Object.keys(originalItems).length === 0) { //if originalItems is empty
      Utilities.copyObjectAttributes(originalItems, nextProps.items);
    }
  }

	render() {
    return (
      <Grid>
        <Row>
          <Col>
            <h2>Partner: {this.props.partner.name}</h2>
          </Col>
          <Col md-offset={1} md={10}>
            <PartnerWizardStep items={this.props.partner.items}
                            	 order={this.props.order} 
                               callbacks={this.getButtonpadCallbacks()} />
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default PartnerWizardFlux;
