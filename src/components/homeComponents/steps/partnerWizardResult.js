import React from 'react';
import Message from 'components/homeComponents/steps/message';
import Buttonpad from 'components/homeComponents/resources/buttonpad';
import {SUCCESS, FAIL} from 'constants/apiCallStatus';
import {CANCEL, CLOSE, CONTINUE_ANYWAY, OK, TRY_AGAIN} from 'constants/stepButtonLabels';
import {ITEM_STATUS_SUBMISSION_SUCCESS, ITEM_STATUS_SUBMISSION_FAILURE, SUBMITING} from 'constants/messages';

class PartnerWizardResult extends React.Component {
  render() {
		switch(this.props.result) {
      case SUCCESS:
        return (
          <div>
            <Message text={ITEM_STATUS_SUBMISSION_SUCCESS} />
            <Buttonpad buttons ={[
              {callback: this.props.callbacks.closeWizard, text: OK}
            ]} />
          </div>
          )
      case FAIL:
        return (
          <div>
            <Message text={ITEM_STATUS_SUBMISSION_FAILURE} />
            <Buttonpad buttons={[
              {callback: this.props.callbacks.cancelChanges, text: CANCEL},
              {callback: this.props.callbacks.submitItemsStatus, text: TRY_AGAIN},
              {callback: this.props.callbacks.closeWizard, text: CONTINUE_ANYWAY}
            ]} />
          </div>
          )
      default:
        return (
          <div>
            <Message text={SUBMITING} />
          </div>
          )
    }
  }
}

export default PartnerWizardResult;