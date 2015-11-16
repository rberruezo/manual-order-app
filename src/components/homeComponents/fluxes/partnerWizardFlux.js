import React from 'react';
import WizardFlux from 'components/homeComponents/fluxes/wizardFlux';
import PartnerWizardActions from 'actions/partnerWizardActions';
import PartnerWizardStep from 'components/homeComponents/steps/general/partnerWizardStep';
import connectToStores from 'alt/utils/connectToStores';
import PartnerWizardStore from 'stores/partnerWizardStore';
import Utilities from 'utilities/utilities';

var originalItems = {};

@connectToStores
class PartnerWizardFlux extends WizardFlux {
  constructor(props) {
    super(props);
    Utilities.copyObjectAttributes(originalItems, props.items);
  }

  static getStores(props) {
    return [PartnerWizardStore];
  }

  static getPropsFromStores(props) {
    return PartnerWizardStore.getState();
  }

  getButtonpadCallbacks() {
    var buttonpadCallbacks = this.getBasicButtonpadCallbacks();
    buttonpadCallbacks.cancelChanges = this.cancelChanges;
    buttonpadCallbacks.submitItemsStatus = this.submitItemsStatus;
    return buttonpadCallbacks;
  }

  submitItemsStatus = evt => {
    //Go directly to Last Step = Q(items) + S&B + Payment + Result Message
    this.submitStatus(this.props.items.length+3);
    PartnerWizardActions.submitItemsStatus(this.props.items);
  }

  cancelChanges = evt => {
    Utilities.copyObjectAttributes(this.props.items, originalItems);
    originalItems = {};
    this.closeWizard();
  }

  closeWizard = evt => {
    this.handleStepChange(1);
    this.props.callbacks.nextStep();
  }

  handleStepChange(newStep) {
    this.setStepChange(newStep);
    PartnerWizardActions.updateStep(this.props.step);
  }

  componentWillReceiveProps(nextProps) {
    if (Object.keys(originalItems).length === 0) { //if originalItems is empty
      Utilities.copyObjectAttributes(originalItems, nextProps.items);
    }
  }

	render() {
    return (
      <div>
        <h2>Partner: {this.props.name}</h2>
        <PartnerWizardStep step={PartnerWizardStore.getState().step}
                           result={PartnerWizardStore.getState().result}
        									 items={this.props.items}
                        	 shippingAddress={this.props.shippingAddress}
                        	 billingAddress={this.props.billingAddress}
                        	 payment={this.props.payment} 
                           callbacks={this.getButtonpadCallbacks()} />
      </div>
    )
  }
}

export default PartnerWizardFlux;