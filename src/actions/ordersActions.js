import flux from 'control';
import {createActions} from 'alt/utils/decorators';
import OrdersService from 'services/ordersService';

@createActions(flux)
class OrdersActions {
  constructor() {
    this.generateActions('selectOrder', 'deselectOrder');
  }

  getAllowedOrders() {
	  OrdersService.getAllowedOrders()
	    .then((status) => {
  			this.dispatch(status.data);
	    })
	    .catch((errorMessage) => {
	      alert(errorMessage);
	    });
  }

  removeOrder(order_id) {
  	var request = {
  		order_id: order_id
  	};
	  OrdersService.removeOrder(request)
	    .then((status) => {
  			this.dispatch(order_id);
	    })
	    .catch((errorMessage) => {
	      alert(errorMessage);
	    });
  }

}

export default OrdersActions;
