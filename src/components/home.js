import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import OrdersStore from 'stores/ordersStore';
import Orders from 'components/homeComponents/orders';
import OrderWizard from 'components/homeComponents/orderWizard';
import NavigationBar from 'components/homeComponents/navigationBar';

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
  	return OrdersStore.getState().dequeuedOrder != undefined;
  }

  getOrderView() {
		if (this.isOrderSelected()) {
			return (<OrderWizard />)
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
