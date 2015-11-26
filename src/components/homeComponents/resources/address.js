import React from 'react';
import {Row, Col} from 'react-flexbox-grid';

class Address extends React.Component {
  render() {
    var address = this.props.address;
    return (
      <section className="wizard-subbox">
        <Row className='wizard-content'>
          <Col sm={7} md={7} className='col-sm-offset-1 col-md-offset-1'>
            <Row className='wizard-table-row'>
              <Col sm={2} md={2} className='col-sm-offset-1 col-md-offset-1'>
                <strong className='wizard-label-title'>Address 1:</strong>
              </Col>
              <Col sm={8} md={8}>
                {address.address1}
              </Col>
            </Row>
            <Row className='wizard-table-row'>
              <Col sm={2} md={2} className='col-sm-offset-1 col-md-offset-1'>
                <strong className='wizard-label-title'>Address 2:</strong>
              </Col>
              <Col sm={8} md={8}>
                {address.address2}
              </Col>
            </Row>
            <Row className='wizard-table-row'>
              <Col sm={2} md={2} className='col-sm-offset-1 col-md-offset-1'>
                <strong className='wizard-label-title'>City:</strong>
              </Col>
              <Col sm={8} md={8}>
                {address.city}
              </Col>
            </Row>
            <Row className='wizard-table-row'>
              <Col sm={2} md={2} className='col-sm-offset-1 col-md-offset-1'>
                <strong className='wizard-label-title'>State:</strong>
              </Col>
              <Col sm={8} md={8}>
                {address.state}
              </Col>
            </Row>
            <Row className='wizard-table-row'>
              <Col sm={2} md={2} className='col-sm-offset-1 col-md-offset-1'>
                <strong className='wizard-label-title'>Zip:</strong>
              </Col>
              <Col sm={8} md={8}>
                {address.zip}
              </Col>
            </Row>
            <Row className='wizard-table-row'>
              <Col sm={2} md={2} className='col-sm-offset-1 col-md-offset-1'>
                <strong className='wizard-label-title'>Status:</strong>
              </Col>
              <Col sm={8} md={8}>
                {address.status}
              </Col>
            </Row>
            <Row className='wizard-table-row'>
              <Col sm={2} md={2} className='col-sm-offset-1 col-md-offset-1'>
                <strong className='wizard-label-title'>Address Type:</strong>
              </Col>
              <Col sm={8} md={8}>
                {address.addressType}
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
    )
  }
}

export default Address;