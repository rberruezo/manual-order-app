/******************************************************************************
Abstract class.
All the childs should have the following methods defined:
  * getSuccessButtons: returns an array of objects {callback: ..., text: ...}
      as a Buttonpad to show on a Successful Result Message.
  * getSuccessMessage: returns the text to show on a Successful Result Message.
  * getFailureButtons: returns an array of objects {callback: ..., text: ...}
      as a Buttonpad to show on a Failed Result Message.
  * getFailureMessage: returns the text to show on a Failed Result Message.
******************************************************************************/

import React from 'react';
import Buttonpad from 'components/homeComponents/resources/buttonpad';
import Message from 'components/homeComponents/resources/message';
import {SUCCESS, FAIL} from 'constants/apiCallStatus';
import {SUBMITING} from 'constants/messages';
import {Row, Col} from 'react-flexbox-grid';

class WizardResult extends React.Component {

  getResult() {
		switch(this.props.result) {
      case SUCCESS:
        return (
          <div>
            <Message type='success' text={this.getSuccessMessage()} />
            <Buttonpad buttons={this.getSuccessButtons()} />
          </div>
          )
      case FAIL:
        return (
          <div>
            <Message type='error' text={this.getFailureMessage()} />
            <Buttonpad buttons={this.getFailureButtons()} />
          </div>
          )
      default:
        return (
          <div>
            <Message type='notice' text={SUBMITING} />
          </div>
          )
    }
  }

  render() {
    return (
      <Row className='center-md wizard-subbox'>
        <Col>
          {this.getResult()}
        </Col>
      </Row>
      )
  }

}

export default WizardResult;