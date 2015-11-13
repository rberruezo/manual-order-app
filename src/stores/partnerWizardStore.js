import flux from 'control';
import {createStore, bind} from 'alt/utils/decorators';
import WizardStore from 'stores/wizardStore';
import PartnerWizardActions from 'actions/partnerWizardActions';

@createStore(flux)
class PartnerWizardStore extends WizardStore {

  constructor() {
    super();
  }

  @bind(PartnerWizardActions.submitItemsStatus)
  submitItemsStatus(response) {
    this.submitStatus(response);
  }

  @bind(PartnerWizardActions.updateStep)
  updateStep(step) {
    this.setStep(step);
  }

}

export default PartnerWizardStore;
