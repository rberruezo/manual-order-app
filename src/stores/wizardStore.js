/******************************************************************************
Abstract class.
All the childs should have the following methods defined:
  * getActions: returns an Action object which implements:
    * closeWizard
    * nextStep
    * previousStep
    * resetResult
    * updateStep
******************************************************************************/

import {NONE, SUCCESS, FAIL} from 'constants/apiCallStatus';
import {SUBMITING} from 'constants/apiCallStatus';

class WizardStore {

  constructor() {
    this.step = 1;
    this.result = NONE;
    this.bindAction(this.getActions().closeWizard, this.closeWizard);
    this.bindAction(this.getActions().nextStep, this.nextStep);
    this.bindAction(this.getActions().previousStep, this.previousStep);
    this.bindAction(this.getActions().resetResult, this.resetResult);
    this.bindAction(this.getActions().updateStep, this.updateStep);
  }

  submitStatus(response) {
    this.result = ("errorMessage" in response) ? FAIL : SUCCESS;
  }

  closeWizard() {
    this.updateStep(1);
  }

  nextStep() {
    this.updateStep(this.step+1);
  }

  previousStep() {
    this.updateStep(this.step-1);
  }

  resetResult() {
    this.result = SUBMITING;
  }

  updateStep(step) {
    this.step = step;
  }

}

export default WizardStore;
