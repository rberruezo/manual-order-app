import React from 'react';
import 'styles/alertBox.styl';

class Message extends React.Component {
  render() {
  	if (this.props.type === undefined) {
      this.props.type = 'notice';
    }
    return (
    	<div className={'alert-box-'+this.props.type}>
    		<span>{this.props.type}: </span>
    		{this.props.text}
    	</div>
    )
  }
}

export default Message;