import React from 'react';
import StepProgress from 'components/orderWizardComponents/stepProgress';
import OrderWizardFluxButtonpad from 'components/orderWizardComponents/orderWizardFluxButtonpad';
import OrderWizardStep from 'components/orderWizardComponents/orderWizardStep';
import {SUCCESS} from 'constants/wizardSteps';

require('../../styles/simpleForm.styl');

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

  getButtonpadCallbacks() {
    return {
      previousStep: this.previousStep,
      nextStep: this.nextStep,
      submitChanges: this.submitChanges,
      acceptChanges: this.props.acceptChanges,
      cancelChanges: this.props.cancelChanges
    };
  }

  render() {
    return (
      <main>
        <StepProgress goToStep={this.goToStep} />
        <div>
          <OrderWizardStep step={this.state.step}
                           order={this.props.order} />
          <OrderWizardFluxButtonpad step={this.state.step}
                                    callbacks={this.getButtonpadCallbacks()} />
        </div>
      </main>
    )
  }

}

export default OrderWizardFlux;