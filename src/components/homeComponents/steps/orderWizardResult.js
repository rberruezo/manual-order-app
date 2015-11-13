import React from 'react';
import WizardResult from 'components/homeComponents/steps/general/wizardResult';
import {CANCEL, CLOSE, TRY_AGAIN} from 'constants/stepButtonLabels';
import {ORDER_STATUS_SUBMISSION_SUCCESS, ORDER_STATUS_SUBMISSION_FAILURE, SUBMITING} from 'constants/messages';

class OrderWizardResult extends WizardResult {
  getSuccessButtons() {
    return [
        {callback: this.props.callbacks.closeWizard, text: CLOSE}
      ];
  }

  getSuccessMessage() {
    return ORDER_STATUS_SUBMISSION_SUCCESS;
  }

  getFailureButtons() {
    return [
        {callback: this.props.callbacks.cancelChanges, text: CANCEL},
        {callback: this.props.callbacks.submitOrderStatus, text: TRY_AGAIN}
      ];
  }

  getFailureMessage() {
    return ORDER_STATUS_SUBMISSION_FAILURE;
  }
}

export default OrderWizardResult;
