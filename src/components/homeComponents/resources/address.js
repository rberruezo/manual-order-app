import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';

class Address extends React.Component {
  render() {
    var address = this.props.address;
    return (
      <div className='wizard-table'>
        <Grid className='wizard-tbody'>
          <Row>
            <Col md={7} className='col-md-offset-1'>
              <Row className='wizard-tr'>
                <Col md={2} className='col-md-offset-1'>
                  <strong className='label-title'>Address 1:</strong>
                </Col>
                <Col md={8}>
                  {address.address1}
                </Col>
              </Row>
              <Row className='wizard-tr'>
                <Col md={2} className='col-md-offset-1'>
                  <strong className='label-title'>Address 2:</strong>
                </Col>
                <Col md={8}>
                  {address.address2}
                </Col>
              </Row>
              <Row className='wizard-tr'>
                <Col md={2} className='col-md-offset-1'>
                  <strong className='label-title'>City:</strong>
                </Col>
                <Col md={8}>
                  {address.city}
                </Col>
              </Row>
              <Row className='wizard-tr'>
                <Col md={2} className='col-md-offset-1'>
                  <strong className='label-title'>State:</strong>
                </Col>
                <Col md={8}>
                  {address.state}
                </Col>
              </Row>
              <Row className='wizard-tr'>
                <Col md={2} className='col-md-offset-1'>
                  <strong className='label-title'>Zip:</strong>
                </Col>
                <Col md={8}>
                  {address.zip}
                </Col>
              </Row>
              <Row className='wizard-tr'>
                <Col md={2} className='col-md-offset-1'>
                  <strong className='label-title'>Status:</strong>
                </Col>
                <Col md={8}>
                  {address.status}
                </Col>
              </Row>
              <Row className='wizard-tr'>
                <Col md={2} className='col-md-offset-1'>
                  <strong className='label-title'>Address Type:</strong>
                </Col>
                <Col md={8}>
                  {address.addressType}
                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Address;