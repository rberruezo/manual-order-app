import React from 'react';
import ItemStatus from 'components/homeComponents/resources/itemStatus';
import Numeral from 'numeral';
import {Grid, Row, Col} from 'react-flexbox-grid';

class Item extends React.Component {
  render() {
    var item = this.props.item;
    return (
      <div className='wizard-table'>
        <h3>Product: {item.name}</h3>
        <Grid className='wizard-tbody'>
          <Row>
            <Col md={7} className='col-md-offset-1'>
              <Row className='wizard-tr'>
                <Col md={2} className='col-md-offset-1'>
                   <strong className='label-title'>Color</strong> 
                </Col>
                <Col md={8}>
                   {item.color}
                </Col>
              </Row>
              <Row className='wizard-tr'>
                <Col md={2} className='col-md-offset-1'>
                  <strong className='label-title'>Size</strong>
                </Col>
                <Col md={8}>
                  {item.size}
                </Col>
              </Row>
              <Row className='wizard-tr'>
                <Col md={2} className='col-md-offset-1'>
                  <strong className='label-title'>Quantity</strong>
                </Col>
                <Col md={8}>
                  {item.quantity}
                </Col>
              </Row>
              <Row className='wizard-tr'>
                <Col md={2} className='col-md-offset-1'>
                  <strong className='label-title'>List Price</strong>
                </Col>
                <Col md={8}>
                  {Numeral(item.listPriceCents/100).format('$0,0.00')}
                </Col>
              </Row>
              <Row className='wizard-tr'>
                <Col md={2} className='col-md-offset-1'>
                  <strong className='label-title'>Sale Price</strong>
                </Col>
                <Col md={8}>
                  {Numeral(item.salePriceCents/100).format('$0,0.00')}
                </Col>
              </Row>
              <Row className='wizard-tr'>
                <Col md={2} className='col-md-offset-1'>
                  <strong className='label-title'>Source Url</strong>
                </Col>
                <Col md={8}>
                  <a target="_blank" href={item.sourceUrl} name="sourceUrl">{item.sourceUrl}</a>
                </Col>
              </Row>
            </Col>
          </Row>
          <ItemStatus selectedValue={item.status} onChange={this.handleStatusChange} />
        </Grid>
      </div>
    )
  }

  handleStatusChange = value => {
    this.props.item.status = value;
    this.setState(this.props.item);
  }
}

export default Item;