import React from 'react';
import OrderWizardFlux from 'components/homeComponents/fluxes/orderWizardFlux';
import 'flexboxgrid'
import 'styles/wizard.styl';

class OrderWizard extends React.Component {

  render() {
    return (
      <div className='wizard'>
        <OrderWizardFlux />
      </div>
    );
  }

}

export default OrderWizard;
