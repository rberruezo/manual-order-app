import React from 'react';
import WizardResult from 'components/homeComponents/steps/general/wizardResult';
import connectToStores from 'alt/utils/connectToStores';
import PartnerWizardStore from 'stores/partnerWizardStore';
import {CLOSE, CONTINUE_ANYWAY, OK, TRY_AGAIN} from 'constants/stepButtonLabels';
import {ITEM_STATUS_SUBMISSION_SUCCESS, ITEM_STATUS_SUBMISSION_FAILURE} from 'constants/messages';

@connectToStores
class PartnerWizardResult extends WizardResult {
  constructor(props) {
    super(props);
  }

  static getStores(props) {
    return [PartnerWizardStore];
  }

  static getPropsFromStores(props) {
    return PartnerWizardStore.getState();
  }

  getSuccessButtons() {
    return [
        {callback: this.props.callbacks.closeWizard, text: OK, type: 'success'}
      ];
  }

  getSuccessMessage() {
    return ITEM_STATUS_SUBMISSION_SUCCESS;
  }

  getFailureButtons() {
    return [
        {callback: this.props.callbacks.submitItemsStatus, text: TRY_AGAIN},
        {callback: this.props.callbacks.cancelChanges, text: CONTINUE_ANYWAY, type: 'error'}
      ];
  }

  getFailureMessage() {
    return ITEM_STATUS_SUBMISSION_FAILURE;
  }
}

export default PartnerWizardResult;
