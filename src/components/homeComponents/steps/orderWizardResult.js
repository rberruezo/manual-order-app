import React from 'react';
import WizardResult from 'components/homeComponents/steps/general/wizardResult';
import connectToStores from 'alt/utils/connectToStores';
import OrderWizardStore from 'stores/orderWizardStore';
import OrderWizardActions from 'actions/orderWizardActions';
import {CANCEL, CLOSE, TRY_AGAIN} from 'constants/stepButtonLabels';
import {ORDER_STATUS_SUBMISSION_SUCCESS, ORDER_STATUS_SUBMISSION_FAILURE, SUBMITING} from 'constants/messages';

@connectToStores
class OrderWizardResult extends WizardResult {
  constructor(props) {
    super(props);
  }

  static getStores(props) {
    return [OrderWizardStore];
  }

  static getPropsFromStores(props) {
    return OrderWizardStore.getState();
  }

  getSuccessButtons() {
    return [
        {callback: OrderWizardActions.closeWizard, text: CLOSE, type: 'success'}
      ];
  }

  getSuccessMessage() {
    return ORDER_STATUS_SUBMISSION_SUCCESS;
  }

  getFailureButtons() {
    return [
        {callback: OrderWizardActions.submitStatus.bind(OrderWizardActions, this.props.order), text: TRY_AGAIN},
        {callback: OrderWizardActions.cancelChanges, text: CANCEL, type: 'error'}
      ];
  }

  getFailureMessage() {
    return ORDER_STATUS_SUBMISSION_FAILURE;
  }
}

export default OrderWizardResult;
