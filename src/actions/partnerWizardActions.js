import flux from 'control';
import {createActions} from 'alt/utils/decorators';
import OrdersService from 'services/ordersService';
import Utilities from 'utilities/utilities';
// import OrderWizardActions from 'actions/orderWizardActions';

@createActions(flux)
class PartnerWizardActions {
  constructor() {
    this.generateActions('updateStep', 'previousStep', 'nextStep', 'resetResult', 'lastStep');
  }

  submitItemsStatus(items) {
    var request = {
      itemsStatus: items.map(function(item) {
        return {id: item.id, status: item.status};
      })
    };
    OrdersService.submitItemsStatus(request)
      .then((response) => {
        this.dispatch(response);
      })
      .catch((errorMessage) => {
        alert(errorMessage);
      });
  }

  cancelChanges(partner_index) {
    // OrderWizardActions.nextStep();
    this.dispatch(partner_index);
  }

  closeWizard() {
    this.dispatch();
  }

  // submitStatus(order) {
  //   OrderWizardActions.resetResult();
  //   OrderWizardActions.lastStep();
  //   OrderWizardActions.submitOrderStatus(order);
  // }
}

export default PartnerWizardActions;
