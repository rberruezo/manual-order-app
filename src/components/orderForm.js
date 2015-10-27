import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import OrdersStore from 'stores/ordersStore';
import OrdersActions from 'actions/ordersActions';

@connectToStores
class OrderForm extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      order: props.selectedOrder
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
    	<section className="login-box">
        <header className="login-header">
          <h1>Hi, Im an order form! {this.state.order.consumer_name}</h1>
        </header>
        <div className="login-content" onSubmit={this.handleLogin}>
        	<input type="text" value={this.state.order.consumer_name} placeholder="Consumer" className="login-mail"/>
          <button className="cancel-button" onClick={this.cancelChanges}>CANCEL</button>
        	<button className="accept-button" onClick={this.acceptChanges}>ACCEPT</button>
        </div>
      </section>
    );
  }

}

export default OrderForm;
