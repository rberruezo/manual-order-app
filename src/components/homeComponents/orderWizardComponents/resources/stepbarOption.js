import React from 'react';
import 'styles/stepbar.styl';

class StepbarOption extends React.Component {

  getClassNameForStep(step) {
    if (this.props.currentStep == step) {
      return 'active-step';
    }
    return '';
  }

  render() {
    return (
      <li>
      	<a 	className={this.getClassNameForStep(this.props.index)}
      			href="#"
      			onClick={this.props.goToStep}
      			name={this.props.index}
      			id={this.props.index} >
      	{this.props.title}
      	</a>
      </li>
    )
  }
}

export default StepbarOption;