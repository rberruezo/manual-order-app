import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import OrdersStore from 'stores/ordersStore';
import Orders from 'components/orders';
import OrderForm from 'components/orderForm';
import NavigationBar from 'components/navigationBar';

@connectToStores
class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  static getStores(props) {
    return [OrdersStore];
  }

  static getPropsFromStores(props) {
    return OrdersStore.getState();
  }

  isOrderSelected() {
  	console.log(OrdersStore.getState());
  	return OrdersStore.getState().selectedOrderId != undefined;
  }

  getOrderView() {
		if (this.isOrderSelected()) {
			return (<OrderForm />)
		} else {
			return (<Orders />)
		}
  }

  render() {
    return (
    	<div>
				<NavigationBar/>
				{this.getOrderView()}
			</div>
    );
  }

}

export default Home;
