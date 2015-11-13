import React from 'react';
import WizardResult from 'components/homeComponents/steps/general/wizardResult';
import {CLOSE, TRY_AGAIN} from 'constants/stepButtonLabels';
import {ORDER_STATUS_SUBMISSION_SUCCESS, ORDER_STATUS_SUBMISSION_FAILURE, SUBMITING} from 'constants/messages';

class OrderWizardResult extends React.Component {
  getSuccessButtons() {
    return [
        {callback: this.props.callbacks.closeWizard, text: CLOSE}
      ];
  }

  getFailureButtons() {
    return [
        {callback: this.props.callbacks.submitOrderStatus, text: TRY_AGAIN},
        {callback: this.props.callbacks.closeWizard, text: CLOSE}
      ];
  }

  render() {
    return <WizardResult result={this.props.result}
                         success={{
                           message: ORDER_STATUS_SUBMISSION_SUCCESS,
                           buttons: this.getSuccessButtons()
                         }}
                         failure={{
                           message: ORDER_STATUS_SUBMISSION_FAILURE,
                           buttons: this.getFailureButtons()
                         }} />
  }
}

export default OrderWizardResult;
