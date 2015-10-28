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
    Utilities.copyObjectAttributes(originalOrder, props.dequeuedOrder);
    this.state = {
      dequeuedOrder: props.dequeuedOrder
    };
  }

  static getStores(props) {
    return [OrdersStore];
  }

  static getPropsFromStores(props) {
    return OrdersStore.getState();
  }

  render() {
  	var order = this.state.dequeuedOrder;
    return (
    	<section className="login-box">
        <header className="login-header">
          <h1>Hi, Im an order form! {order.consumerName}</h1>
        </header>
        <div className="login-content" onSubmit={this.handleLogin}>
        	<input name="consumerName" type="text" value={order.consumerName} onChange={this.handleChange} placeholder="Consumer" className="login-mail"/>
        	<input name="itemCount" type="number" value={order.itemCount} onChange={this.handleChange} placeholder="Item Count" className="login-mail"/>
        	<input name="status" type="number" value={order.status} onChange={this.handleChange} placeholder="Status" className="login-mail"/>
          <button className="cancel-button" onClick={this.cancelChanges}>CANCEL</button>
        	<button className="accept-button" onClick={this.acceptChanges}>ACCEPT</button>
        </div>
      </section>
    );
  }

  cancelChanges = evt => {
  	Utilities.copyObjectAttributes(this.props.dequeuedOrder, originalOrder);
    OrdersActions.deselectOrder();
  }

  acceptChanges = evt => {
    OrdersActions.deselectOrder();
  }

  handleChange = evt => {
  	this.props.dequeuedOrder[evt.target.name] = evt.target.value;
    this.setState(this.props.dequeuedOrder);
  }

}

export default OrderForm;
