import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import OrdersStore from 'stores/ordersStore';
import OrdersActions from 'actions/ordersActions';
import Utilities from 'utilities/utilities';

var originalOrder = {};

@connectToStores
class OrderForm extends React.Component {

	constructor(props) {
    super(props);
    Utilities.copyObjectAttributes(originalOrder, props.selectedOrder);
    this.state = {
      selectedOrder: props.selectedOrder
    };
  }

  static getStores(props) {
    return [OrdersStore];
  }

  static getPropsFromStores(props) {
    return OrdersStore.getState();
  }

  render() {
  	var order = this.state.selectedOrder;
    return (
    	<section className="login-box">
        <header className="login-header">
          <h1>Hi, Im an order form! {order.consumerName}</h1>
        </header>
        <div className="login-content" onSubmit={this.handleLogin}>
        	<input type="text" value={order.consumerName} onChange={this.handleConsumerNameChange} placeholder="Consumer" className="login-mail"/>
          <button className="cancel-button" onClick={this.cancelChanges}>CANCEL</button>
        	<button className="accept-button" onClick={this.acceptChanges}>ACCEPT</button>
        </div>
      </section>
    );
  }

  cancelChanges = evt => {
  	Utilities.copyObjectAttributes(this.props.selectedOrder, originalOrder);
    OrdersActions.deselectOrder();
  }

  acceptChanges = evt => {
    OrdersActions.deselectOrder();
  }

  handleConsumerNameChange = evt => {
    this.props.selectedOrder.consumerName = evt.target.value;
    this.setState(this.props.selectedOrder);
  }

}

export default OrderForm;
