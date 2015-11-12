import flux from 'control';
import {createStore, bind} from 'alt/utils/decorators';
import PartnerWizardActions from 'actions/partnerWizardActions';

@createStore(flux)
class PartnerWizardStore {

  constructor() {
    this.step = 1;
    this.result = null;
  }

  @bind(PartnerWizardActions.submitItemsStatus)
  submitItemsStatus(response) {
    this.result = !("errorMessage" in response);
    this.updateStep(this.step+1);
  }

  @bind(PartnerWizardActions.updateStep)
  updateStep(step) {
    this.step = step;
  }

}

export default PartnerWizardStore;
