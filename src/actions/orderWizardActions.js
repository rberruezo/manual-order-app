import flux from 'control';
import {createActions} from 'alt/utils/decorators';
import OrdersService from 'services/ordersService';
import Utilities from 'utilities/utilities';

@createActions(flux)
class OrderWizardActions {
  constructor() {
    this.generateActions('updateStep');
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
}

export default OrderWizardActions;
