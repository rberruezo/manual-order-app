import flux from 'control';
import {createStore, bind} from 'alt/utils/decorators';
import WizardStore from 'stores/wizardStore';
import OrdersActions from 'actions/ordersActions';
import OrderWizardActions from 'actions/orderWizardActions';
import PartnerWizardActions from 'actions/partnerWizardActions';
import Utilities from 'utilities/utilities';

@createStore(flux)
class OrderWizardStore extends WizardStore {

  constructor() {
    super();
    this.originalOrder = {};
  }

  getActions() {
    return OrderWizardActions;
  }

  @bind(OrderWizardActions.cancelChanges)
  cancelChanges() {
    Utilities.copyObjectAttributes(this.order, this.originalOrder);
    this.originalOrder = {};
    this.closeWizard();
  }

  @bind(OrderWizardActions.submitOrderStatus)
  submitOrderStatus(response) {
    this.submitStatus(response);
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

  @bind(OrderWizardActions.lastStep)
  lastStep() {
    this.updateStep(this.order.partners.length+2);
  }

  @bind(PartnerWizardActions.cancelChanges)
  cancelPartnerChanges(partner_index) {
    Utilities.copyObjectAttributes(this.order.partners[partner_index], this.originalOrder.partners[partner_index]);
    this.closeWizard();
  }

  @bind(PartnerWizardActions.closeWizard)
  closePartnerWizard() {
    this.nextStep();
  }

}

export default OrderWizardStore;
