import React from 'react';
import RadioGroup from 'react-radio-group';
import {ITEM_OUT_OF_STOCK, ITEM_OUT_OF_STOCK_TITLE} from 'constants/orderStatus';
import {ORDER_ITEM_PROCESSED_SUCCESSFULLY, ORDER_ITEM_PROCESSED_SUCCESSFULLY_TITLE} from 'constants/orderStatus';
import {ORDER_ITEM_NOT_PROCESSED_DUE_ORDER_FAILURE, ORDER_ITEM_NOT_PROCESSED_DUE_ORDER_FAILURE_TITLE} from 'constants/orderStatus';
import {ORDER_ITEM_NOT_PROCESSED_DUE_SITE_FAILURE, ORDER_ITEM_NOT_PROCESSED_DUE_SITE_FAILURE_TITLE} from 'constants/orderStatus';
import {Row, Col} from 'react-flexbox-grid';

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
        <section className="wizard-subbox">
          <Row className='wizard-content'>
            <Col sm={8} md={8}>
		          <Row>
		            <h5>Status</h5>
		          </Row>
              <Row className='wizard-table-row'>
                <Col sm={6} md={6} className='col-sm-offset-1 col-md-offset-1 wizard-table-row status-success'>
                   <strong>{ORDER_ITEM_PROCESSED_SUCCESSFULLY_TITLE}</strong>
                </Col>
                <Col sm={1} md={1}>
                   <Radio value={ORDER_ITEM_PROCESSED_SUCCESSFULLY} />
                </Col>
              </Row>
              <Row className='wizard-table-row'>
                <Col sm={6} md={6} className='col-sm-offset-1 col-md-offset-1 wizard-table-row status-error'>
                   <strong>{ITEM_OUT_OF_STOCK_TITLE}</strong>
                </Col>
                <Col sm={1} md={1}>
                   <Radio value={ITEM_OUT_OF_STOCK} />
                </Col>
              </Row>
              <Row className='wizard-table-row'>
                <Col sm={6} md={6} className='col-sm-offset-1 col-md-offset-1 wizard-table-row status-error'>
                   <strong>{ORDER_ITEM_NOT_PROCESSED_DUE_SITE_FAILURE_TITLE}</strong>
                </Col>
                <Col sm={1} md={1}>
                   <Radio value={ORDER_ITEM_NOT_PROCESSED_DUE_SITE_FAILURE} />
                </Col>
              </Row>
              <Row className='wizard-table-row'>
                <Col sm={6} md={6} className='col-sm-offset-1 col-md-offset-1 wizard-table-row status-error'>
                   <strong>{ORDER_ITEM_NOT_PROCESSED_DUE_ORDER_FAILURE_TITLE}</strong>
                </Col>
                <Col sm={1} md={1}>
                   <Radio value={ORDER_ITEM_NOT_PROCESSED_DUE_ORDER_FAILURE} />
                </Col>
              </Row>
            </Col>
          </Row>
        </section>
			)}
			</RadioGroup>
		)
	}

}

export default ItemStatus;