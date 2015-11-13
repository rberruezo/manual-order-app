import React from 'react';
import WizardFlux from 'components/homeComponents/fluxes/wizardFlux';
import OrderWizardActions from 'actions/orderWizardActions';
import OrderWizardStep from 'components/homeComponents/steps/general/orderWizardStep';
import connectToStores from 'alt/utils/connectToStores';
import OrderWizardStore from 'stores/orderWizardStore';

@connectToStores
class OrderWizardFlux extends WizardFlux {
  static getStores(props) {
    return [OrderWizardStore];
  }

  static getPropsFromStores(props) {
    return OrderWizardStore.getState();
  }

  getButtonpadCallbacks() {
    var buttonpadCallbacks = this.getBasicButtonpadCallbacks();
    buttonpadCallbacks.cancelChanges = this.props.cancelChanges;
    buttonpadCallbacks.submitOrderStatus = this.submitOrderStatus;
    return buttonpadCallbacks;
  }

  submitOrderStatus = evt => {
     //Go directly to Last Step = Q(partners) + Order Review + Result Message
    this.submitStatus(this.props.order.partners.length+2);
    OrderWizardActions.submitOrderStatus(this.props.order);
  }

  closeWizard = evt => {
    this.handleStepChange(1);
    this.props.closeWizard();
  }

  handleStepChange(newStep) {
    this.setStepChange(newStep);
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