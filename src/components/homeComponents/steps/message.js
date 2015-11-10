import React from 'react';
import Buttonpad from 'components/homeComponents/resources/buttonpad';
import {CLOSE} from 'constants/stepButtonLabels';

class Message extends React.Component {
  render() {
    return (
      <div className="simple-form">
        <h2>{this.props.text}</h2>
        <Buttonpad buttons={[{callback: this.props.callback, text: CLOSE}]} />
      </div>
    )
  }
}

export default Message;