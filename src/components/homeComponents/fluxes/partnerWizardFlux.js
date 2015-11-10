import React from 'react';
import PartnerWizardStep from 'components/homeComponents/steps/general/partnerWizardStep';
import PartnerWizardButtonpad from 'components/homeComponents/buttonpads/partnerWizardButtonpad';

class PartnerWizardFlux extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      step : 1
    };
  }

  nextStep = evt => {
    this.setState({
      step : this.state.step + 1
    })
  }

  previousStep = evt => {
    this.setState({
      step : this.state.step - 1
    })
  }

  getButtonpadCallbacks() {
    return {
      previousStep: this.previousStep,
      nextStep: this.nextStep,
      submitChanges: this.submitChanges,
      closeWizard: this.closeWizard,
      cancelChanges: this.props.callbacks.cancelChanges
    };
  }

  submitChanges = evt => {
    //TODO: call to submitchanges
    console.log('submitChanges');
    this.props.callbacks.submitChanges();
    this.nextStep();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      step : 1
    });
  }

  closeWizard = evt => {
    this.props.callbacks.nextStep();
  }

	render() {
    return (
      <div>
        <h2>Partner Wizard</h2>
        {this.props.name}
        <PartnerWizardStep step={this.state.step}
        									 items={this.props.items}
                        	 shippingAddress={this.props.shippingAddress}
                        	 billingAddress={this.props.billingAddress}
                        	 payment={this.props.payment} />
				<PartnerWizardButtonpad step={this.state.step}
                                  	items={this.props.items}
                                    callbacks={this.getButtonpadCallbacks()} />
      </div>
    )
  }

}

export default PartnerWizardFlux;