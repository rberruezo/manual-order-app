/******************************************************************************
Abstract class to manage the flux of the wizard steps
******************************************************************************/

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

  previousStep = evt => {
    this.getWizardActions().updateStep(this.props.step-1);
  }

  nextStep = evt => {
    this.getWizardActions().updateStep(this.props.step+1);
  }

  getBasicButtonpadCallbacks() {
  	return {
  		previousStep: this.previousStep,
      nextStep: this.nextStep,
      closeWizard: this.closeWizard,
      cancelChanges: this.cancelChanges
  	}
  }

  submitStatus(lastStep) {
    this.props.result = SUBMITING;
    this.getWizardActions().updateStep(lastStep);
  }

  setStepChange(newStep) {
    this.props.step = newStep;
    this.setState(this.props);
  }
}

export default WizardFlux;