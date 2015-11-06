import React from 'react';
import PartnerWizardFlux from 'components/homeComponents/orderWizardComponents/steps/partnerWizardFlux';
import OrderReview from 'components/homeComponents/orderWizardComponents/steps/orderReview';
import Buttonpad from 'components/homeComponents/orderWizardComponents/resources/buttonpad';
import 'styles/simpleForm.styl';

class OrderWizardFlux extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      step : 1
    };
  }

  nextStep = evt => {
    console.log(this.state.step);
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
    this.props.submitChanges();
    console.log(this.state.step);
    // this.setState({
    //   step : SUCCESS
    // })
  }

  goToStep = evt => {
    this.setState({
      step : Number(evt.target.name)
    })
  }

  getButtonpadCallbacks() {
    return {
      previousStep: this.previousStep,
      nextStep: this.nextStep,
      submitChanges: this.submitChanges,
      closeWizard: this.props.closeWizard,
      cancelChanges: this.props.cancelChanges
    };
  }

  getView() {
    var view;
    if (this.state.step <= this.props.order.partners.length) {
      view = (
        <PartnerWizardFlux items={this.props.order.partners[this.state.step-1].items}
                           shippingAddress={this.props.order.shippingAddress}
                           billingAddress={this.props.order.billingAddress}
                           payment={this.props.order.paymentData}
                           callbacks={this.getButtonpadCallbacks()} />
        )
    } else {
      view = (
        <div>
          <OrderReview />
          <Buttonpad buttons={[{callback: this.props.closeWizard, text: 'Close'} ]} />
        </div>  
        )
    }
    return view;
  }

  render() {
    console.log(this.state.step,this.props.order.partners[this.state.step-1]);
    return (
      <main>
        {this.getView()}
      </main>
    )
  }

}

export default OrderWizardFlux;