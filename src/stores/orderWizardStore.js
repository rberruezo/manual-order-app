import flux from 'control';
import {createStore, bind} from 'alt/utils/decorators';
import WizardStore from 'stores/wizardStore';
import OrdersActions from 'actions/ordersActions';
import OrderWizardActions from 'actions/orderWizardActions';
import Utilities from 'utilities/utilities';
import {SUBMITING} from 'constants/apiCallStatus';

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

  @bind(OrderWizardActions.previousStep)
  previousStep() {
    this.updateStep(this.step-1);
  }

  @bind(OrderWizardActions.nextStep)
  nextStep() {
    this.updateStep(this.step+1);
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

  @bind(OrderWizardActions.cancelChanges)
  cancelChanges() {
    Utilities.copyObjectAttributes(this.order, this.originalOrder);
    this.originalOrder = {};
    this.closeWizard();
  }

  @bind(OrderWizardActions.closeWizard)
  closeWizard() {
    this.updateStep(1);
  }

  @bind(OrderWizardActions.resetResult)
  resetResult() {
    this.result = SUBMITING;
  }

  @bind(OrderWizardActions.lastStep)
  lastStep() {
    this.updateStep(this.order.partners.length+2);
  }

}

export default OrderWizardStore;
