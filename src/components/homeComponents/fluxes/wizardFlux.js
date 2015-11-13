import React from 'react';
import {SUBMITING} from 'constants/apiCallStatus';

class WizardFlux extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      step : props.step,
      result: props.result
    };
  }

  nextStep = evt => {
    this.handleStepChange(this.props.step+1);
  }

  previousStep = evt => {
    this.handleStepChange(this.props.step-1);
  }

  getBasicButtonpadCallbacks() {
  	return {
  		previousStep: this.previousStep,
      nextStep: this.nextStep,
      closeWizard: this.closeWizard
  	}
  }

  submitStatus(lastStep) {
    this.props.result = SUBMITING;
    this.handleStepChange(lastStep);
  }

  setStepChange(newStep) {
    this.props.step = newStep;
    this.setState(this.props);
  }
}

export default WizardFlux;