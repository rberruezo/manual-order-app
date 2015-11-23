import React from 'react';
import WizardFlux from 'components/homeComponents/fluxes/wizardFlux';
import PartnerWizardActions from 'actions/partnerWizardActions';
import PartnerWizardStep from 'components/homeComponents/steps/general/partnerWizardStep';
import connectToStores from 'alt/utils/connectToStores';
import PartnerWizardStore from 'stores/partnerWizardStore';
import OrderWizardStore from 'stores/orderWizardStore';
import Utilities from 'utilities/utilities';
import {Grid, Row, Col} from 'react-flexbox-grid';

var originalItems = {};

@connectToStores
class PartnerWizardFlux extends WizardFlux {
  constructor(props) {
    super(props);
    Utilities.copyObjectAttributes(originalItems, this.getPartner().items);
  }

  static getStores(props) {
    return [PartnerWizardStore, OrderWizardStore];
  }

  static getPropsFromStores(props) {
    var state = PartnerWizardStore.getState();
    state.orderWizard = OrderWizardStore.getState();
    return state;
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
    this.submitStatus(this.getPartner().items.length+3);
    PartnerWizardActions.submitItemsStatus(this.getPartner().items);
  }

  cancelChanges = evt => {
    Utilities.copyObjectAttributes(this.getPartner().items, originalItems);
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

  getPartner() {
    return this.props.orderWizard.order.partners[this.props.orderWizard.step-1];
  }

	render() {
    return (
      <Grid>
        <Row>
          <Col>
            <h2>Partner: {this.getPartner().name}</h2>
          </Col>
          <Col md-offset={1} md={10}>
            <PartnerWizardStep callbacks={this.getButtonpadCallbacks()} />
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default PartnerWizardFlux;
