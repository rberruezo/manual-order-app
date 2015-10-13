import flux from 'control';
import {createActions} from 'alt/utils/decorators';
import userSource from 'sources/userSource';

@createActions(flux)
class LoginActions {
  constructor() {
    this.generateActions('updateEmail', 'updatePass');
  }

  loginUser(user) {
  	this.dispatch();
	  userSource.loginUser(user)
	    .then((status) => {
	    	console.log(status)
	    })
	    .catch((errorMessage) => {
	      this.actions.loginFailed(errorMessage);
	    });
  }

	loginFailed(errorMessage) {
	  this.dispatch(errorMessage);
	}
}

export default LoginActions;
