import flux from 'control';
import {createStore, bind} from 'alt/utils/decorators';
import WizardStore from 'stores/wizardStore';
import PartnerWizardActions from 'actions/partnerWizardActions';
import {SUBMITING} from 'constants/apiCallStatus';

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

  @bind(PartnerWizardActions.previousStep)
  previousStep() {
    this.updateStep(this.step-1);
  }

  @bind(PartnerWizardActions.nextStep)
  nextStep() {
    this.updateStep(this.step+1);
  }

  @bind(PartnerWizardActions.cancelChanges)
  cancelChanges() {
    this.closeWizard();
  }

  @bind(PartnerWizardActions.closeWizard)
  closeWizard() {
    this.updateStep(1);
  }

  @bind(PartnerWizardActions.resetResult)
  resetResult() {
    this.result = SUBMITING;
  }

}

export default PartnerWizardStore;
