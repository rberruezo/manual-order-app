import React from 'react';
import PartnerWizardStep from 'components/homeComponents/steps/general/partnerWizardStep';
import PartnerWizardFluxButtonpad from 'components/homeComponents/buttonpads/partnerWizardFluxButtonpad';

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
    this.nextStep();
  }

  closeWizard = evt => {
    this.setState({
      step : 1
    })
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
				<PartnerWizardFluxButtonpad step={this.state.step}
                                  	items={this.props.items}
                                    callbacks={this.getButtonpadCallbacks()} />
      </div>
    )
  }

}

export default PartnerWizardFlux;