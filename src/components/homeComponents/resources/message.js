import React from 'react';

class Message extends React.Component {
  render() {
    return (
      <div className="simple-form">
        <h2>{this.props.text}</h2>
      </div>
    )
  }
}

export default Message;