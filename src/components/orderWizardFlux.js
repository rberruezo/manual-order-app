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

  showStep() {
    switch(this.state.step) {
      case CART_ITEMS:
        return <CartItems order={this.props.order}
                          nextStep={this.nextStep}
                          previousStep={this.props.cancelChanges}
                          submitChanges={this.submitChanges} />
      case SHIPPING_AND_BILLING:
        return <ShippingAndBilling order={this.props.order}
                                   nextStep={this.nextStep}
                                   previousStep={this.previousStep}
                                   submitChanges={this.submitChanges} />
      case PAYMENT:
        return <Payment order={this.props.order}
                        nextStep={this.nextStep}
                        previousStep={this.previousStep}
                        submitChanges={this.submitChanges} />
      case CONSUMER:
        return <Consumer order={this.props.order}
                         nextStep={this.nextStep}
                         previousStep={this.previousStep}
                         submitChanges={this.submitChanges} />

      case ORDER_REVIEW:
        return <OrderReview order={this.props.order}
                            previousStep={this.previousStep}
                            submitChanges={this.submitChanges} />
      case SUCCESS:
        return <Success close={this.props.acceptChanges} />
    }
  }

  showFluxButtons() {
    switch(this.state.step) {
      case CART_ITEMS:
        return <WizardFluxButtons buttons={[
                                    {callback: this.props.cancelChanges, text: BACK},
                                    {callback: this.nextStep, text: CONTINUE},
                                    {callback: this.submitChanges, text: SUBMIT_CHANGES}
                                  ]} />
      case SHIPPING_AND_BILLING:
      case PAYMENT:
      case CONSUMER:
        return <WizardFluxButtons buttons={[
                                    {callback: this.previousStep, text: BACK},
                                    {callback: this.nextStep, text: CONTINUE},
                                    {callback: this.submitChanges, text: SUBMIT_CHANGES}
                                  ]} />
      case ORDER_REVIEW:
        return <WizardFluxButtons buttons={[
                                    {callback: this.previousStep, text: BACK},
                                    {callback: this.submitChanges, text: SUBMIT_CHANGES}
                                  ]} />
      case SUCCESS:
        return <WizardFluxButtons buttons={[
                                    {callback: this.props.acceptChanges, text: CLOSE}
                                  ]} />
    }
  }

  goToStep = evt => {
    this.setState({
      step : Number(evt.target.name)
    })
  }

  render() {
    return (
      <main>
        <StepProgress goToStep={this.goToStep} />
        <div>
          {this.showStep()}
          {this.showFluxButtons()}
        </div>
      </main>
    )
  }

}

export default OrderWizardFlux;