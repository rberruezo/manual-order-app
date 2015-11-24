import flux from 'control';
import {createActions} from 'alt/utils/decorators';
import OrdersService from 'services/ordersService';
import Utilities from 'utilities/utilities';
import OrdersActions from 'actions/ordersActions';

@createActions(flux)
class OrderWizardActions {
  constructor() {
    this.generateActions('updateStep', 'previousStep', 'nextStep', 'resetResult', 'lastStep');
  }

  submitOrderStatus(order) {
    var request = {
      id: order.id,
      status: Utilities.calculateOrderStatus(order)
    };
    OrdersService.submitOrderStatus(request)
      .then((response) => {
        response.order = request;
        this.dispatch(response);
      })
      .catch((errorMessage) => {
        alert(errorMessage);
      });
  }

  cancelChanges() {
    OrdersActions.deselectOrder();
    this.dispatch();
  }

  closeWizard() {
    OrdersActions.deselectOrder();
    this.dispatch();
  }

  submitStatus(order) {
    OrderWizardActions.resetResult();
    OrderWizardActions.lastStep();
    OrderWizardActions.submitOrderStatus(order);
  }
}

export default OrderWizardActions;
