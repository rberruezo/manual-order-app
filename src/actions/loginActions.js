import flux from 'control';
import {createActions} from 'alt/utils/decorators';
import userSource from 'sources/userSource';

@createActions(flux)
class LoginActions {
  constructor() {
    this.generateActions('updateEmail', 'updatePass');
  }

  loginUser(user) {
	  userSource.loginUser(user)
	    .then((status) => {
	    	console.log(status)
  			this.dispatch(user);
	    })
	    .catch((errorMessage) => {
	      console.log(errorMessage);
	      alert(errorMessage);
	      this.actions.loginFailed(errorMessage);
	    });
  }

	loginFailed(errorMessage) {
	  this.dispatch(errorMessage);
	}

	logoutUser() {
  	this.dispatch();
  }
}

export default LoginActions;
