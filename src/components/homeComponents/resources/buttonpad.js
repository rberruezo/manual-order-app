import React from 'react';

/******************************************************************************
PRECOND: this.props.buttons should have an array of objects with the following
structure: {callback: this.nextStep, text: 'Continue'}
POSCOND: render returns the specified buttons with the associated callback on
the onClick event
******************************************************************************/

class Buttonpad extends React.Component {
  render() {
  	var key = 1;
    return (
      <div className="button">
				{this.props.buttons.map(function(button){
		   		return <button key={key++} onClick={button.callback}>{button.text}</button>;
				})}
			</div>
    )
  }
}

export default Buttonpad;