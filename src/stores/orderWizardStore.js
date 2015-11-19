import flux from 'control';
import {createStore, bind} from 'alt/utils/decorators';
import WizardStore from 'stores/wizardStore';
import OrdersActions from 'actions/ordersActions';
import OrderWizardActions from 'actions/orderWizardActions';
import Utilities from 'utilities/utilities';

@createStore(flux)
class OrderWizardStore extends WizardStore {

  constructor() {
    super();
    this.originalOrder = {};
  }

  @bind(OrderWizardActions.submitOrderStatus)
  submitOrderStatus(response) {
    this.submitStatus(response);
  }

  @bind(OrderWizardActions.updateStep)
  updateStep(step) {
    this.setStep(step);
  }

  @bind(OrdersActions.dequeueOrder)
  selectOrder(response) {
    if (!("errorMessage" in response)) {
      this.order = response.order;
      Utilities.copyObjectAttributes(this.originalOrder, this.order);
    }
  }

  @bind(OrdersActions.deselectOrder)
  deselectOrder() {
    delete this.order;
    this.originalOrder = {};
  }

}

export default OrderWizardStore;
