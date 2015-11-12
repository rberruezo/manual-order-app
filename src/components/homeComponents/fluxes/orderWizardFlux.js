import React from 'react';
import OrderWizardActions from 'actions/orderWizardActions';
import OrderWizardStep from 'components/homeComponents/steps/general/orderWizardStep';
import connectToStores from 'alt/utils/connectToStores';
import OrderWizardStore from 'stores/orderWizardStore';
import {SUBMITING} from 'constants/apiCallStatus';

@connectToStores
class OrderWizardFlux extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      step : props.step,
      result: props.result
    };
  }

  static getStores(props) {
    return [OrderWizardStore];
  }

  static getPropsFromStores(props) {
    return OrderWizardStore.getState();
  }

  nextStep = evt => {
    this.handleStepChange(this.props.step+1);
  }

  previousStep = evt => {
    this.handleStepChange(this.props.step-1);
  }

  getButtonpadCallbacks() {
    return {
      previousStep: this.previousStep,
      nextStep: this.nextStep,
      closeWizard: this.closeWizard,
      cancelChanges: this.props.cancelChanges,
      submitOrderStatus: this.submitOrderStatus
    };
  }

  submitOrderStatus = evt => {
    this.props.result = SUBMITING;
    this.handleStepChange(this.props.order.partners.length+2); //Go directly to Last Step = Q(partners) + Order Review + Result Message
    OrderWizardActions.submitOrderStatus(this.props.order);
  }

  closeWizard = evt => {
    this.handleStepChange(1);
    this.props.closeWizard();
  }

  handleStepChange(newStep) {
    this.props.step = newStep;
    this.setState(this.props);
    OrderWizardActions.updateStep(this.props.step);
  }

  render() {
    return (
      <div>
        <h1>Order Wizard</h1>
        <OrderWizardStep step={OrderWizardStore.getState().step}
                         result={OrderWizardStore.getState().result}
                         order={this.props.order}
                         callbacks={this.getButtonpadCallbacks()} />
      </div>
    )
  }

}

export default OrderWizardFlux;