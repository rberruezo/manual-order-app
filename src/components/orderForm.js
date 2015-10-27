import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import OrdersStore from 'stores/ordersStore';
import OrdersActions from 'actions/ordersActions';

@connectToStores
class OrderForm extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      orderId: props.selectedOrderId
    };
  }

  static getStores(props) {
    return [OrdersStore];
  }

  static getPropsFromStores(props) {
    return OrdersStore.getState();
  }

	cancelChanges() {
    OrdersActions.deselectOrder();
  }

  render() {
    return (
    	<div>
				Hi, Im an order form! {this.state.orderId}
				<div className="order-form-buttons">
        	<button className="cancel-button" onClick={this.cancelChanges}>CANCEL</button>
        	<button className="accept-button" onClick={this.acceptChanges}>ACCEPT</button>
        </div>
			</div>
    );
  }

}

export default OrderForm;
