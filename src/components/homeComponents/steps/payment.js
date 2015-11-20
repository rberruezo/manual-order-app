import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import OrderWizardStore from 'stores/orderWizardStore';
import {PAYMENT} from 'constants/stepTitles';
import {Grid, Row, Col} from 'react-flexbox-grid';

@connectToStores
class Payment extends React.Component {
  constructor(props) {
    super(props);
  }

  static getStores(props) {
    return [OrderWizardStore];
  }

  static getPropsFromStores(props) {
    return OrderWizardStore.getState();
  }

  render() {
    var payment = this.props.order.paymentData;
    return (
      <div className='wizard-table'>
        <h3>{PAYMENT}</h3>
        <Grid className='wizard-tbody'>
          <Row>
            <Col md={8} className='col-md-offset-1'>
              <Row className='wizard-tr'>
                <Col md={2} className='col-md-offset-1'>
                  <strong className='label-title'>Type</strong>
                </Col>
                <Col md={8}>
                  {payment.type}
                </Col>
              </Row>
              <Row className='wizard-tr'>
                <Col md={2} className='col-md-offset-1'>
                  <strong className='label-title'>Number</strong>
                </Col>
                <Col md={8}>
                  {payment.number}
                </Col>
              </Row>
              <Row className='wizard-tr'>
                <Col md={2} className='col-md-offset-1'>
                  <strong className='label-title'>Expiration Month</strong>
                </Col>
                <Col md={8}>
                  {payment.expirationMonth}
                </Col>
              </Row>
              <Row className='wizard-tr'>
                <Col md={2} className='col-md-offset-1'>
                  <strong className='label-title'>Expiration Year</strong>
                </Col>
                <Col md={8}>
                  {payment.expirationYear}
                </Col>
              </Row>
              <Row className='wizard-tr'>
                <Col md={2} className='col-md-offset-1'>
                  <strong className='label-title'>Name</strong>
                </Col>
                <Col md={8}>
                  {payment.name}
                </Col>
              </Row>
              <Row className='wizard-tr'>
                <Col md={2} className='col-md-offset-1'>
                  <strong className='label-title'>CVV</strong>
                </Col>
                <Col md={8}>
                  {payment.cvv}
                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Payment;