import flux from 'control';
import {createStore, bind} from 'alt/utils/decorators';
import OrdersActions from 'actions/ordersActions';

@createStore(flux)
class OrdersStore {

  constructor() {
    this.orders = UserStorage.getUser();
  }

  @bind(OrdersActions.getAllowedOrders)
  getAllowedOrders(orders) {
    this.orders = orders;
  }

}

export default OrdersStore;
