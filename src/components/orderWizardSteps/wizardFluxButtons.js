import React from 'react';

class WizardFluxButtons extends React.Component {
  
	getButton(onClickCallback, text) {
		if (onClickCallback == undefined) {
			return
		} else {
			return <button onClick={onClickCallback}>{text}</button>
		}
	}

  render() {
    return (
      <div className="button">
				{this.getButton(this.props.previousStep, 'Back')}
				{this.getButton(this.props.nextStep, 'Continue')}
				{this.getButton(this.props.submitChanges, 'Submit Changes')}
				{this.getButton(this.props.close, 'Close')}
			</div>
    )
  }
}

export default WizardFluxButtons;