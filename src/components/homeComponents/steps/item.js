import React from 'react';
import PartnerWizardActions from 'actions/partnerWizardActions';
import connectToStores from 'alt/utils/connectToStores';
import OrderWizardStore from 'stores/orderWizardStore';
import PartnerWizardStore from 'stores/partnerWizardStore';
import Buttonpad from 'components/homeComponents/resources/buttonpad';
import ItemStatus from 'components/homeComponents/resources/itemStatus';
import Numeral from 'numeral';
import {BACK, CONTINUE} from 'constants/stepButtonLabels';
import {Grid, Row, Col} from 'react-flexbox-grid';

@connectToStores
class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  static getStores(props) {
    return [PartnerWizardStore, OrderWizardStore];
  }

  static getPropsFromStores(props) {
    var state = PartnerWizardStore.getState();
    state.orderWizard = OrderWizardStore.getState();
    return state;
  }

  getItem() {
    return this.props.orderWizard.order.partners[this.props.orderWizard.step-1].items[this.props.step-1];
  }

  getStepButtons() {
    var buttons = [];
    switch(this.props.step) {
      case 1:
        buttons = [
                    {callback: PartnerWizardActions.nextStep, text: CONTINUE}
                  ];
        break;
      default:
        buttons = [
                    {callback: PartnerWizardActions.previousStep, text: BACK},
                    {callback: PartnerWizardActions.nextStep, text: CONTINUE}
                  ];
    }
    return buttons;
  }

  render() {
    var item = this.getItem();
    return (
      <div>
        <div className='wizard-table'>
          <h3>Product: {item.name}</h3>
          <Grid className='wizard-table-body'>
            <Row>
              <Col md={7} className='col-md-offset-1'>
                <Row className='wizard-table-row'>
                  <Col md={2} className='col-md-offset-1'>
                     <strong className='wizard-label-title'>Color</strong> 
                  </Col>
                  <Col md={8}>
                     {item.color}
                  </Col>
                </Row>
                <Row className='wizard-table-row'>
                  <Col md={2} className='col-md-offset-1'>
                    <strong className='wizard-label-title'>Size</strong>
                  </Col>
                  <Col md={8}>
                    {item.size}
                  </Col>
                </Row>
                <Row className='wizard-table-row'>
                  <Col md={2} className='col-md-offset-1'>
                    <strong className='wizard-label-title'>Quantity</strong>
                  </Col>
                  <Col md={8}>
                    {item.quantity}
                  </Col>
                </Row>
                <Row className='wizard-table-row'>
                  <Col md={2} className='col-md-offset-1'>
                    <strong className='wizard-label-title'>List Price</strong>
                  </Col>
                  <Col md={8}>
                    {Numeral(item.listPriceCents/100).format('$0,0.00')}
                  </Col>
                </Row>
                <Row className='wizard-table-row'>
                  <Col md={2} className='col-md-offset-1'>
                    <strong className='wizard-label-title'>Sale Price</strong>
                  </Col>
                  <Col md={8}>
                    {Numeral(item.salePriceCents/100).format('$0,0.00')}
                  </Col>
                </Row>
                <Row className='wizard-table-row'>
                  <Col md={2} className='col-md-offset-1'>
                    <strong className='wizard-label-title'>Source Url</strong>
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
        <Buttonpad buttons={this.getStepButtons()} />
      </div>
    )
  }

  handleStatusChange = value => {
    this.getItem().status = value;
    this.setState(this.getItem());
  }
}

export default Item;