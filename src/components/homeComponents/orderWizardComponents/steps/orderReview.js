import React from 'react';
import {ORDER_REVIEW_TITLE} from 'constants/orderWizardSteps';

class OrderReview extends React.Component {
  render() {
    return (
      <div className="simple-form">
        <h2>{ORDER_REVIEW_TITLE}</h2>
      </div>
    )
  }
}

export default OrderReview;