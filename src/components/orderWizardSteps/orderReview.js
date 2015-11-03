import React from 'react';

class OrderReview extends React.Component {
  render() {
    return (
      <div className="simple-form">
        <h2>Order Review</h2>
        <div className="button">
          <button onClick={this.props.previousStep}>Back</button>
          <button onClick={this.props.submitChanges}>Submit Changes</button>
        </div>
      </div>
    )
  }
}

export default OrderReview;