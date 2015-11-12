import flux from 'control';
import {createStore, bind} from 'alt/utils/decorators';
import OrderWizardActions from 'actions/orderWizardActions';

@createStore(flux)
class OrderWizardStore {

  constructor() {
    this.step = 1;
    this.result = null;
  }

  @bind(OrderWizardActions.submitOrderStatus)
  submitOrderStatus(response) {
    this.result = !("errorMessage" in response);
    this.updateStep(this.step+1);
  }

  @bind(OrderWizardActions.updateStep)
  updateStep(step) {
    this.step = step;
  }

}

export default OrderWizardStore;
