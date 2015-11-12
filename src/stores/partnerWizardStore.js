import flux from 'control';
import {createStore, bind} from 'alt/utils/decorators';
import PartnerWizardActions from 'actions/partnerWizardActions';
import {NONE, SUCCESS, FAIL} from 'constants/apiCallStatus';

@createStore(flux)
class PartnerWizardStore {

  constructor() {
    this.step = 1;
    this.result = NONE;
  }

  @bind(PartnerWizardActions.submitItemsStatus)
  submitItemsStatus(response) {
    this.result = ("errorMessage" in response) ? FAIL : SUCCESS;
  }

  @bind(PartnerWizardActions.updateStep)
  updateStep(step) {
    this.step = step;
  }

}

export default PartnerWizardStore;
