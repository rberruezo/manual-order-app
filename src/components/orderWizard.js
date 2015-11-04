import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import OrdersStore from 'stores/ordersStore';
import OrdersActions from 'actions/ordersActions';
import Utilities from 'utilities/utilities';
import OrderWizardFlux from 'components/orderWizardComponents/orderWizardFlux';

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
    return (
    	<section>
        <header>
          <h1>Hi, Im an order form! {order.consumerName}</h1>
        </header>
        <OrderWizardFlux order={order}
        								 cancelChanges={this.cancelChanges}
                         closeWizard={this.closeWizard}
        								 submitChanges={this.submitChanges} />
      </section>
    );
  }

  cancelChanges = evt => {
  	Utilities.copyObjectAttributes(this.props.dequeuedOrder, originalOrder);
    OrdersActions.deselectOrder();
  }

  closeWizard = evt => {
    OrdersActions.deselectOrder();
  }

  submitChanges = evt => {
    console.log('Submit Changes');
    //TODO
  }

  handleChange = evt => {
  	this.props.dequeuedOrder[evt.target.name] = evt.target.value;
    this.setState(this.props.dequeuedOrder);
  }

}

export default OrderWizard;
