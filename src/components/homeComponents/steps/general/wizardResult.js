import React from 'react';
import Message from 'components/homeComponents/resources/message';
import Buttonpad from 'components/homeComponents/resources/buttonpad';
import {SUCCESS, FAIL} from 'constants/apiCallStatus';
import {SUBMITING} from 'constants/messages';

class WizardResult extends React.Component {
  render() {
		switch(this.props.result) {
      case SUCCESS:
        return (
          <div>
            <Message text={this.props.success.message} />
            <Buttonpad buttons={this.props.success.buttons} />
          </div>
          )
      case FAIL:
        return (
          <div>
            <Message text={this.props.failure.message} />
            <Buttonpad buttons={this.props.failure.buttons} />
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

export default WizardResult;