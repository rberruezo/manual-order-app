/******************************************************************************
Abstract class to manage the flux of the wizard steps
******************************************************************************/

import React from 'react';
import OrderWizardStore from 'stores/orderWizardStore';

class WizardFlux extends React.Component {
  
  constructor(props) {
    super(props);
  }

  static getStores(props) {
    return [OrderWizardStore];
  }

  static getPropsFromStores(props) {
    return OrderWizardStore.getState();
  }

}

export default WizardFlux;