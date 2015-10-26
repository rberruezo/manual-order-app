import flux from 'control';
import {createStore, bind} from 'alt/utils/decorators';
import OrdersActions from 'actions/ordersActions';
import Mocks from 'mocks/mocks';

@createStore(flux)
class OrdersStore {

  constructor() {
    this.orders = Mocks.getAllowedOrders({user_token: '123'}).data;
  }

  @bind(OrdersActions.getAllowedOrders)
  getAllowedOrders(orders) {
    this.orders = orders;
  }

  @bind(OrdersActions.removeOrder)
  removeOrder(order_id) {
		for (var i = 0; i < this.orders.length; i++) {
			if (this.orders[i].order_id == order_id) {
				this.orders.splice(i,1);
			}
		}
  }

}

export default OrdersStore;
