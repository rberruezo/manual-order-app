import flux from 'control';
import {createStore, bind} from 'alt/utils/decorators';
import WizardStore from 'stores/wizardStore';
import PartnerWizardActions from 'actions/partnerWizardActions';

@createStore(flux)
class PartnerWizardStore extends WizardStore {

  constructor() {
    super();
  }

  getActions() {
    return PartnerWizardActions;
  }

  @bind(PartnerWizardActions.cancelChanges)
  cancelChanges() {
    this.closeWizard();
  }

  @bind(PartnerWizardActions.submitItemsStatus)
  submitItemsStatus(response) {
    this.submitStatus(response);
  }

}

export default PartnerWizardStore;
