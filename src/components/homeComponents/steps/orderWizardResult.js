import React from 'react';
import Message from 'components/homeComponents/steps/message';
import Buttonpad from 'components/homeComponents/resources/buttonpad';
import {SUCCESS, FAIL} from 'constants/apiCallStatus';
import {CLOSE, TRY_AGAIN} from 'constants/stepButtonLabels';
import {ORDER_STATUS_SUBMISSION_SUCCESS, ORDER_STATUS_SUBMISSION_FAILURE, SUBMITING} from 'constants/messages';

class OrderWizardResult extends React.Component {
  render() {
		switch(this.props.result) {
      case SUCCESS:
        return (
          <div>
            <Message text={ORDER_STATUS_SUBMISSION_SUCCESS} />
            <Buttonpad buttons={[
              {callback: this.props.callbacks.closeWizard, text: CLOSE}
            ]} />
          </div>
          )
      case FAIL:
        return (
          <div>
            <Message text={ORDER_STATUS_SUBMISSION_FAILURE} />
            <Buttonpad buttons={[
              {callback: this.props.callbacks.submitOrderStatus, text: TRY_AGAIN},
              {callback: this.props.callbacks.closeWizard, text: CLOSE}
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

export default OrderWizardResult;