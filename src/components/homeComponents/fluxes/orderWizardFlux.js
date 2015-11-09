import React from 'react';
import OrdersActions from 'actions/ordersActions';
import OrderWizardStep from 'components/homeComponents/steps/general/orderWizardStep';

class OrderWizardFlux extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      step : 1
    };
  }

  nextStep = evt => {
    this.setState({
      step : this.state.step + 1
    })
  }

  previousStep = evt => {
    this.setState({
      step : this.state.step - 1
    })
  }

  submitChanges = evt => {
    OrdersActions.submitOrder(this.props.order);
  }

  getButtonpadCallbacks() {
    return {
      previousStep: this.previousStep,
      nextStep: this.nextStep,
      closeWizard: this.props.closeWizard,
      cancelChanges: this.props.cancelChanges,
      submitChanges: this.submitChanges
    };
  }

  render() {
    return (
      <div>
        <h1>Order Wizard</h1>
        <OrderWizardStep step={this.state.step}
                         order={this.props.order}
                         callbacks={this.getButtonpadCallbacks()} />
      </div>
    )
  }

}

export default OrderWizardFlux;