import React from 'react';
import WizardResult from 'components/homeComponents/steps/general/wizardResult';
import {CANCEL, CLOSE, CONTINUE_ANYWAY, OK, TRY_AGAIN} from 'constants/stepButtonLabels';
import {ITEM_STATUS_SUBMISSION_SUCCESS, ITEM_STATUS_SUBMISSION_FAILURE} from 'constants/messages';

class PartnerWizardResult extends React.Component {
  getSuccessButtons() {
    return [
        {callback: this.props.callbacks.closeWizard, text: OK}
      ];
  }

  getFailureButtons() {
    return [
        {callback: this.props.callbacks.cancelChanges, text: CANCEL},
        {callback: this.props.callbacks.submitItemsStatus, text: TRY_AGAIN},
        {callback: this.props.callbacks.closeWizard, text: CONTINUE_ANYWAY}
      ];
  }

  render() {
    return <WizardResult result={this.props.result}
                         success={{
                           message: ITEM_STATUS_SUBMISSION_SUCCESS,
                           buttons: this.getSuccessButtons()
                         }}
                         failure={{
                           message: ITEM_STATUS_SUBMISSION_FAILURE,
                           buttons: this.getFailureButtons()
                         }} />
  }

}

export default PartnerWizardResult;
