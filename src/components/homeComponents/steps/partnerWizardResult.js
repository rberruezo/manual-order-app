import React from 'react';
import Message from 'components/homeComponents/steps/message';
import Buttonpad from 'components/homeComponents/resources/buttonpad';
import {SUCCESS, FAIL} from 'constants/apiCallStatus';
import {CLOSE} from 'constants/stepButtonLabels';

class PartnerWizardResult extends React.Component {
  render() {
		switch(this.props.result) {
      case SUCCESS:
        return (
          <div>
            <Message text='Items Status changed successfully' />
            <Buttonpad buttons ={[
              {callback: this.props.callbacks.closeWizard, text: 'Ok'}
            ]} />
          </div>
          )
      case FAIL:
        return (
          <div>
            <Message text='Failed to update Items Status!' />
            <Buttonpad buttons={[
              {callback: this.props.callbacks.cancelChanges, text: 'Cancel'},
              {callback: this.props.callbacks.submitItemsStatus, text: 'Try Again'},
              {callback: this.props.callbacks.closeWizard, text: 'Continue Anyway'}
            ]} />
          </div>
          )
      default:
        return (
          <div>
            <Message text='Submiting' />
          </div>
          )
    }
  }
}

export default PartnerWizardResult;