/******************************************************************************
PRECOND: this.props.buttons should have an array of objects with the following
structure: {callback: this.nextStep, text: 'Continue'}
POSCOND: render returns the specified buttons with the associated callback on
the onClick event
******************************************************************************/

import React from 'react';
import {Row, Col} from 'react-flexbox-grid';

class Buttonpad extends React.Component {
  render() {
  	var key = 1;
    return (
      <section className="wizard-footbox">
        <Row className='center-md wizard-foot'>
  				{this.props.buttons.map(function(button){
            if (button.type === undefined) {
              button.type = 'secondary';
            }
  		   		return (
              <Col sm={3} md={3}>
                <button className={'button-'+button.type} key={key++} onClick={button.callback}>
                  {button.text}
                </button>
              </Col>
            )
  				})}
  			</Row>
      </section>
    )
  }
}

export default Buttonpad;