import React from 'react';
import PartnerWizardActions from 'actions/partnerWizardActions';
import PartnerWizardStep from 'components/homeComponents/steps/general/partnerWizardStep';
import connectToStores from 'alt/utils/connectToStores';
import PartnerWizardStore from 'stores/partnerWizardStore';

@connectToStores
class PartnerWizardFlux extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      step : props.step,
      result: props.result
    };
  }

  static getStores(props) {
    return [PartnerWizardStore];
  }

  static getPropsFromStores(props) {
    return PartnerWizardStore.getState();
  }

  nextStep = evt => {
    this.handleStepChange(this.props.step+1);
  }

  previousStep = evt => {
    this.handleStepChange(this.props.step-1);
  }

  getButtonpadCallbacks() {
    return {
      previousStep: this.previousStep,
      nextStep: this.nextStep,
      submitItemsStatus: this.submitItemsStatus,
      tryAgainToSubmitItemsStatus: this.tryAgainToSubmitItemsStatus,
      closeWizard: this.closeWizard,
      cancelChanges: this.props.callbacks.cancelChanges
    };
  }

  submitItemsStatus = evt => {
    PartnerWizardActions.submitItemsStatus(this.props.items);
  }

  tryAgainToSubmitItemsStatus = evt => {
    this.previousStep();
    this.submitItemsStatus();
  }

  closeWizard = evt => {
    this.handleStepChange(1);
    this.props.callbacks.nextStep();
  }

  handleStepChange(newStep) {
    this.props.step = newStep;
    this.setState(this.props);
    PartnerWizardActions.updateStep(this.props.step);
  }

	render() {
    return (
      <div>
        <h2>Partner Wizard</h2>
        {this.props.name}
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