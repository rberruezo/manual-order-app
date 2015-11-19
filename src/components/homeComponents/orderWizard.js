import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import OrderWizardStore from 'stores/orderWizardStore';
import OrdersActions from 'actions/ordersActions';
import OrderWizardFlux from 'components/homeComponents/fluxes/orderWizardFlux';
import 'flexboxgrid'
import {Grid, Row, Col} from 'react-flexbox-grid';
import 'styles/wizard.styl';

@connectToStores
class OrderWizard extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      order: props.order
    };
  }

  static getStores(props) {
    return [OrderWizardStore];
  }

  static getPropsFromStores(props) {
    return OrderWizardStore.getState();
  }

  render() {
    return (
      <div className='wizard'>
        <OrderWizardFlux closeWizard={this.closeWizard} />
      </div>
    );
  }

  closeWizard = evt => {
    OrdersActions.deselectOrder();
  }

  handleChange = evt => {
  	this.props.order[evt.target.name] = evt.target.value;
    this.setState(this.props.order);
  }

}

export default OrderWizard;
