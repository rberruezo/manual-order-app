import React from 'react';
import CartItems from 'components/orderWizardSteps/cartItems';
import ShippingAndBilling from 'components/orderWizardSteps/shippingAndBilling';
import OrderReview from 'components/orderWizardSteps/orderReview';
import Payment from 'components/orderWizardSteps/payment';
import Consumer from 'components/orderWizardSteps/consumer';
import Success from 'components/orderWizardSteps/success';

require('../styles/simpleForm.styl');
require('../styles/wizardSteps.styl');

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
    this.nextStep();
  }

  showStep() {
    switch(this.state.step) {
      case 1:
        return <CartItems order={this.props.order}
                          nextStep={this.nextStep}
                          previousStep={this.props.cancelChanges} />
      case 2:
        return <ShippingAndBilling order={this.props.order}
                                   nextStep={this.nextStep}
                                   previousStep={this.previousStep} />
      case 3:
        return <Payment order={this.props.order}
                        nextStep={this.nextStep}
                        previousStep={this.previousStep} />
      case 4:
        return <Consumer order={this.props.order}
                         nextStep={this.nextStep}
                         previousStep={this.previousStep} />

      case 5:
        return <OrderReview order={this.props.order}
		                        previousStep={this.previousStep}
		                        submitChanges={this.submitChanges} />
      case 6:
        return <Success close={this.props.acceptChanges} />
    }
  }

  goToStep = evt => {
    this.setState({
      step : Number(evt.target.name)
    })
  }

  render() {
    var style = {
      width : (this.state.step / 6 * 100) + '%'
    }

    return (
      <main>
        <span className="progress-step">Step {this.state.step}</span>
        <progress className="progress" style={style}></progress>
        <ul>
          <li><a href="#" onClick={this.goToStep} name="1" id="1">Cart Items</a></li>
          <li><a href="#" onClick={this.goToStep} name="2" id="2">Shipping &amp; Billing</a></li>
          <li><a href="#" onClick={this.goToStep} name="3" id="3">Payment</a></li>
          <li><a href="#" onClick={this.goToStep} name="4" id="4">Consumer</a></li>
          <li><a href="#" onClick={this.goToStep} name="5" id="5">Order Review</a></li>
        </ul>
        {this.showStep()}
      </main>
    )
  }

}

export default OrderWizardFlux;