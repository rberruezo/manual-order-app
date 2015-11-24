import React from 'react';
import RadioGroup from 'react-radio-group';
import {ITEM_OUT_OF_STOCK, ITEM_OUT_OF_STOCK_TITLE} from 'constants/orderStatus';
import {ORDER_ITEM_PROCESSED_SUCCESSFULLY, ORDER_ITEM_PROCESSED_SUCCESSFULLY_TITLE} from 'constants/orderStatus';
import {ORDER_ITEM_NOT_PROCESSED_DUE_ORDER_FAILURE, ORDER_ITEM_NOT_PROCESSED_DUE_ORDER_FAILURE_TITLE} from 'constants/orderStatus';
import {ORDER_ITEM_NOT_PROCESSED_DUE_SITE_FAILURE, ORDER_ITEM_NOT_PROCESSED_DUE_SITE_FAILURE_TITLE} from 'constants/orderStatus';
import {Grid, Row, Col} from 'react-flexbox-grid';

class ItemStatus extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      selectedValue: props.selectedValue
    };
  }

  componentWillReceiveProps(nextProps) {
	  this.state = {
	    selectedValue: nextProps.selectedValue
	  };
	}

  handleChange = value => {
	  this.setState({
	  	selectedValue: value
	  });
	  this.props.onChange(value);
  }

	render() {
		return (
			<RadioGroup name="selectedValue" selectedValue={this.state.selectedValue} onChange={this.handleChange}>
			{Radio => (
        <Grid className='wizard-table-body'>
          <Row>
            <Col md={7} className='col-md-offset-1'>
		          <Row>
		            <h5>Status</h5>
		          </Row>
              <Row className='wizard-table-row'>
                <Col md={6} className='col-md-offset-1 wizard-table-row status-success'>
                   <strong>{ORDER_ITEM_PROCESSED_SUCCESSFULLY_TITLE}</strong>
                </Col>
                <Col md={1}>
                   <Radio value={ORDER_ITEM_PROCESSED_SUCCESSFULLY} />
                </Col>
              </Row>
              <Row className='wizard-table-row'>
                <Col md={6} className='col-md-offset-1 wizard-table-row status-error'>
                   <strong>{ITEM_OUT_OF_STOCK_TITLE}</strong>
                </Col>
                <Col md={1}>
                   <Radio value={ITEM_OUT_OF_STOCK} />
                </Col>
              </Row>
              <Row className='wizard-table-row'>
                <Col md={6} className='col-md-offset-1 wizard-table-row status-error'>
                   <strong>{ORDER_ITEM_NOT_PROCESSED_DUE_SITE_FAILURE_TITLE}</strong>
                </Col>
                <Col md={1}>
                   <Radio value={ORDER_ITEM_NOT_PROCESSED_DUE_SITE_FAILURE} />
                </Col>
              </Row>
              <Row className='wizard-table-row'>
                <Col md={6} className='col-md-offset-1 wizard-table-row status-error'>
                   <strong>{ORDER_ITEM_NOT_PROCESSED_DUE_ORDER_FAILURE_TITLE}</strong>
                </Col>
                <Col md={1}>
                   <Radio value={ORDER_ITEM_NOT_PROCESSED_DUE_ORDER_FAILURE} />
                </Col>
              </Row>
             </Col>
            </Row>
           </Grid>
			)}
			</RadioGroup>
		)
	}

}

export default ItemStatus;