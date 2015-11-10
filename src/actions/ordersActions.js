import flux from 'control';
import {createActions} from 'alt/utils/decorators';
import OrdersService from 'services/ordersService';
import Utilities from 'utilities/utilities';

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

  removeOrder(order_id) {
  	var request = {
  		orderId: order_id
  	};
	  OrdersService.removeOrder(request)
	    .then((response) => {
  			this.dispatch(order_id);
	    })
	    .catch((errorMessage) => {
	      alert(errorMessage);
	    });
  }

  selectOrder(order_id) {
    var request = {
      orderId: order_id
    };
    OrdersService.getOrder(request)
      .then((response) => {
        this.dispatch(response.order);
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

  submitOrder(order) {
    var request = {
      order: order
    };
    OrdersService.submitOrder(request)
      .then((response) => {
        this.dispatch(response.order);
      })
      .catch((errorMessage) => {
        alert(errorMessage);
      });
  }

  submitItemsStatus(items) {
    var request = {
      itemsStatus: items.map(function(item) {
        return {id: item.id, status: item.status};
      })
    };
    OrdersService.submitItemsStatus(request)
      .then((response) => {
        this.dispatch(response.order);
      })
      .catch((errorMessage) => {
        alert(errorMessage);
      });
  }

  submitOrderStatus(order) {
    var request = {
      id: order.id,
      status: Utilities.calculateOrderStatus(order)
    };
    OrdersService.submitOrderStatus(request)
      .then((response) => {
        this.dispatch(request);
      })
      .catch((errorMessage) => {
        alert(errorMessage);
      });
  }

}

export default OrdersActions;
