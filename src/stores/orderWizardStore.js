import flux from 'control';
import {createStore, bind} from 'alt/utils/decorators';
import WizardStore from 'stores/wizardStore';
import OrderWizardActions from 'actions/orderWizardActions';

@createStore(flux)
class OrderWizardStore extends WizardStore {

  constructor() {
    super();
  }

  @bind(OrderWizardActions.submitOrderStatus)
  submitOrderStatus(response) {
    this.submitStatus(response);
  }

  @bind(OrderWizardActions.updateStep)
  updateStep(step) {
    this.setStep(step);
  }

}

export default OrderWizardStore;
