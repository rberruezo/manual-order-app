import flux from 'control';
import {createStore, bind} from 'alt/utils/decorators';
import OrdersActions from 'actions/ordersActions';
import OrderWizardActions from 'actions/orderWizardActions';
import Mocks from 'mocks/mocks';

@createStore(flux)
class OrdersStore {

  constructor() {
    this.orders = Mocks.getAllowedOrders().orders;
  }

  @bind(OrdersActions.getAllowedOrders)
  getAllowedOrders(orders) {
    this.orders = orders;
  }

  @bind(OrderWizardActions.submitOrderStatus)
  submitOrderStatus(response) {
    this.orders[response.order.id].status = response.order.status;
  }

}

export default OrdersStore;
