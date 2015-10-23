import flux from 'control';
import {createActions} from 'alt/utils/decorators';

@createActions(flux)
class OrdersActions {
  constructor() {
    this.generateActions();
  }

  getAllowedOrders(user_token) {
  	var request {
  		user_token: user_token
  	};
	  OrdersService.getAllowedOrders(request)
	    .then((status) => {
  			this.dispatch(status.data);
	    })
	    .catch((errorMessage) => {
	      alert(errorMessage);
	      // this.actions.loginFailed(errorMessage);
	    });
  }
}

export default OrdersActions;
