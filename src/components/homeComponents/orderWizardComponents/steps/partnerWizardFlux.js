import React from 'react';
import PartnerWizardStep from 'components/homeComponents/orderWizardComponents/parts/partnerWizardStep';
import PartnerWizardFluxButtonpad from 'components/homeComponents/orderWizardComponents/parts/partnerWizardFluxButtonpad';

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

  submitChanges = evt => {
    //TODO: call to submitchanges
  	console.log('submitChanges');
  	this.nextStep();
  }

  closeWizard = evt => {
  	console.log('closeWizard');
    this.setState({
      step : 1
    })
  	this.props.callbacks.nextStep();
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

	render() {
		console.log('PartnerWizardFlux');
		console.log(this.state.step);
		console.log(this.props);
    return (
      <div>
        <h2>Partner Wizard</h2>
        <PartnerWizardStep step={this.state.step}
        									 items={this.props.items}
                        	 shippingAddress={this.props.shippingAddress}
                        	 billingAddress={this.props.billingAddress}
                        	 payment={this.props.payment} />
				<PartnerWizardFluxButtonpad step={this.state.step}
                                  	callbacks={this.getButtonpadCallbacks()}
                                  	items={this.props.items} />
      </div>
    )
  }

}

export default PartnerWizardFlux;