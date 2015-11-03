import React from 'react';
import StepProgress from 'components/orderWizardSteps/stepProgress';
import CartItems from 'components/orderWizardSteps/cartItems';
import ShippingAndBilling from 'components/orderWizardSteps/shippingAndBilling';
import OrderReview from 'components/orderWizardSteps/orderReview';
import Payment from 'components/orderWizardSteps/payment';
import Consumer from 'components/orderWizardSteps/consumer';
import Success from 'components/orderWizardSteps/success';
import WizardFluxButtons from 'components/orderWizardSteps/wizardFluxButtons';
import {CART_ITEMS, SHIPPING_AND_BILLING, PAYMENT, CONSUMER, ORDER_REVIEW, SUCCESS} from 'constants/wizardSteps';
import {BACK, CONTINUE, SUBMIT_CHANGES, CLOSE} from 'constants/wizardStepsButtons';

require('../styles/simpleForm.styl');

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
    this.setState({
      step : SUCCESS
    })
  }

  goToStep = evt => {
    this.setState({
      step : Number(evt.target.name)
    })
  }

  getStepView() {
    var stepView;
    switch(this.state.step) {
      case CART_ITEMS:
        stepView = <CartItems order={this.props.order} />
        break;
      case SHIPPING_AND_BILLING:
        stepView = <ShippingAndBilling order={this.props.order} />
        break;
      case PAYMENT:
        stepView = <Payment order={this.props.order} />
        break;
      case CONSUMER:
        stepView = <Consumer order={this.props.order} />
        break;
      case ORDER_REVIEW:
        stepView = <OrderReview order={this.props.order} />
        break;
      case SUCCESS:
        stepView = <Success close={this.props.acceptChanges} />
        break;
      default:
        stepView = <div></div>
    }
    return stepView;
  }

  getStepButtons() {
    var buttons = [];
    switch(this.state.step) {
      case CART_ITEMS:
        buttons = [
                    {callback: this.props.cancelChanges, text: BACK},
                    {callback: this.nextStep, text: CONTINUE},
                    {callback: this.submitChanges, text: SUBMIT_CHANGES}
                  ];
        break;
      case SHIPPING_AND_BILLING:
      case PAYMENT:
      case CONSUMER:
        buttons = [
                    {callback: this.previousStep, text: BACK},
                    {callback: this.nextStep, text: CONTINUE},
                    {callback: this.submitChanges, text: SUBMIT_CHANGES}
                  ];
        break;
      case ORDER_REVIEW:
        buttons = [
                    {callback: this.previousStep, text: BACK},
                    {callback: this.submitChanges, text: SUBMIT_CHANGES}
                  ];
        break;
      case SUCCESS:
        buttons = [
                    {callback: this.props.acceptChanges, text: CLOSE}
                  ];
        break;                  
      default:
        buttons = [];
        break;
    }
    return buttons;
  }

  render() {
    return (
      <main>
        <StepProgress goToStep={this.goToStep} />
        <div>
          {this.getStepView()}
          <WizardFluxButtons buttons={this.getStepButtons()} />
        </div>
      </main>
    )
  }

}

export default OrderWizardFlux;