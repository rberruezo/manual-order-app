import {NONE, SUCCESS, FAIL} from 'constants/apiCallStatus';

class WizardStore {

  constructor() {
    this.step = 1;
    this.result = NONE;
  }

  submitStatus(response) {
    this.result = ("errorMessage" in response) ? FAIL : SUCCESS;
  }

  setStep(step) {
    this.step = step;
  }

}

export default WizardStore;
