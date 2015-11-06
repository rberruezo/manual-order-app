import React from 'react';
import Buttonpad from 'components/homeComponents/resources/buttonpad';
import {ORDER_REVIEW} from 'constants/stepTitles';
import {CLOSE} from 'constants/stepButtonLabels';

class OrderReview extends React.Component {
  render() {
    return (
      <div className="simple-form">
        <h2>{ORDER_REVIEW}</h2>
        <Buttonpad buttons={[{callback: this.props.callback, text: CLOSE}]} />
      </div>
    )
  }
}

export default OrderReview;