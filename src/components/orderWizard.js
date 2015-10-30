import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import OrdersStore from 'stores/ordersStore';
import OrdersActions from 'actions/ordersActions';
import Utilities from 'utilities/utilities';
import OrderWizardFlux from 'components/orderWizardFlux';

var originalOrder = {};

@connectToStores
class OrderWizard extends React.Component {

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
  	order.items =
  		[
				{
					"id": 1,
					"quantity": 2,
					"listPriceCents": 30001,
					"salePriceCents": 20001,
					"orderId": 1,
					"variantId": 100,
					"apiKey": "1ca052ae-f0b5-7c9c-a931-5a417ae374d9",
					"widgetUuid": "1aa032ae-f0b5-4c9c-a931-5a417ae474c2",
					"sourceUrl": "www.google.com",
					"createdAt": "2013-07-07T02:09:58.000Z",
					"updatedAt": "2013-07-07T02:09:58.000Z"
				},
				{
					"id": 2,
					"quantity": 3,
					"listPriceCents": 129000,
					"salePriceCents": 119999,
					"orderId": 1,
					"variantId": 101,
					"apiKey": "1ca052ae-f0b5-7c9c-a931-5a417ae374d9",
					"widgetUuid": "5aa032ff-s7b5-4c9c-a831-5j227ae474k3",
					"sourceUrl": "www.google.com",
					"createdAt": "2013-07-07T02:09:58.000Z",
					"updatedAt": "2013-07-07T02:09:58.000Z"
				}
			];
    return (
    	<section>
        <header>
          <h1>Hi, Im an order form! {order.consumerName}</h1>
        </header>
        <OrderWizardFlux order={order} />
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

export default OrderWizard;
