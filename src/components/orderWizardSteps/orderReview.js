import React from 'react';

class OrderReview extends React.Component {
  render() {
    return (
      <div>
        <h2>Order Review</h2>
        <ul className="form-fields">
          <li className="form-footer">
            <button className="btn -default pull-left" onClick={this.props.previousStep}>Back</button>
            <button className="btn -primary pull-right" onClick={this.props.submitRegistration}>Submit Registration</button>
          </li>
        </ul>
      </div>
    )
  }
}

export default OrderReview;