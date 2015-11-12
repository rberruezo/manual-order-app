import React from 'react';
import Message from 'components/homeComponents/steps/message';
import Buttonpad from 'components/homeComponents/resources/buttonpad';
import {SUCCESS, FAIL} from 'constants/apiCallStatus';
import {CLOSE} from 'constants/stepButtonLabels';

class OrderWizardResult extends React.Component {
  render() {
		switch(this.props.result) {
      case SUCCESS:
        return (
          <div>
            <Message text='Order Status changed successfully' />
            <Buttonpad buttons={[
              {callback: this.props.callbacks.closeWizard, text: CLOSE}
            ]} />
          </div>
          )
      case FAIL:
        return (
          <div>
            <Message text='Failed to update Order Status!' />
            <Buttonpad buttons={[
                      {callback: this.props.callbacks.submitOrderStatus, text: 'Try Again'},
                      {callback: this.props.callbacks.closeWizard, text: CLOSE}
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

export default OrderWizardResult;