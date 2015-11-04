import React from 'react';
import {CART_ITEMS_TITLE, SHIPPING_AND_BILLING_TITLE, PAYMENT_TITLE, CONSUMER_TITLE, ORDER_REVIEW_TITLE} from 'constants/orderWizardSteps';
import {CART_ITEMS, SHIPPING_AND_BILLING, PAYMENT, CONSUMER, ORDER_REVIEW} from 'constants/orderWizardSteps';
import StepbarOption from 'components/orderWizardComponents/resources/stepbarOption';

require('../../../styles/stepbar.styl');

class OrderWizardStepbar extends React.Component {
  
  getStepsTitles() {
    return [
      {index: CART_ITEMS, title: CART_ITEMS_TITLE},
      {index: SHIPPING_AND_BILLING, title: SHIPPING_AND_BILLING_TITLE},
      {index: PAYMENT, title: PAYMENT_TITLE},
      {index: CONSUMER, title: CONSUMER_TITLE},
      {index: ORDER_REVIEW, title: ORDER_REVIEW_TITLE}
    ];
  }

  render() {
    var stepTitle = this.getStepsTitles();
    return (
      <ul>
        {this.getStepbarOptions()}
      </ul>
    )
  }

  getStepbarOptions() {
    var currentStep = this.props.step;
    var goToStep = this.props.goToStep;
    return this.getStepsTitles().map(function(step) {
      return ( <StepbarOption index={step.index}
                              title={step.title}
                              currentStep={currentStep}
                              goToStep={goToStep} />
              );
    });
  }
}

export default OrderWizardStepbar;