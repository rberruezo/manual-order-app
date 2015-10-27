import flux from 'control';
import {createStore, bind} from 'alt/utils/decorators';
import OrdersActions from 'actions/ordersActions';
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

  @bind(OrdersActions.removeOrder)
  removeOrder(order_id) {
		delete this.orders[order_id];
  }

  @bind(OrdersActions.selectOrder)
  selectOrder(order) {
    this.selectedOrder = order;
  }

  @bind(OrdersActions.deselectOrder)
  deselectOrder() {
    delete this.selectedOrder;
  }

}

export default OrdersStore;
