import flux from 'control';
import {createActions} from 'alt/utils/decorators';
import OrdersService from 'services/ordersService';

@createActions(flux)
class OrdersActions {
  constructor() {
    this.generateActions('deselectOrder');
  }

  getAllowedOrders() {
	  OrdersService.getAllowedOrders()
	    .then((response) => {
  			this.dispatch(response.orders);
	    })
	    .catch((errorMessage) => {
	      alert(errorMessage);
	    });
  }

  dequeueOrder(order_id) {
    var request = {
      orderId: order_id
    };
    OrdersService.dequeueOrder(request)
      .then((response) => {
        this.dispatch(response.order);
      })
      .catch((errorMessage) => {
        alert(errorMessage);
      });
  }
}

export default OrdersActions;
