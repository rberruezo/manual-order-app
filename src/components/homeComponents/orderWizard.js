import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import OrdersStore from 'stores/ordersStore';
import OrdersActions from 'actions/ordersActions';
import OrderWizardFlux from 'components/homeComponents/fluxes/orderWizardFlux';
import 'styles/simpleForm.styl';

@connectToStores
class OrderWizard extends React.Component {

	constructor(props) {
    super(props);
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
      <div className='wizard'>
        <OrderWizardFlux order={order}
                         closeWizard={this.closeWizard} />
      </div>
    );
  }

  closeWizard = evt => {
    OrdersActions.deselectOrder();
  }

  handleChange = evt => {
  	this.props.dequeuedOrder[evt.target.name] = evt.target.value;
    this.setState(this.props.dequeuedOrder);
  }

}

export default OrderWizard;
