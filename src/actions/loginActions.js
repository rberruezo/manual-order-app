import flux from 'control';
import {createActions} from 'alt/utils/decorators';
import userSource from 'sources/userSource';

@createActions(flux)
class LoginActions {
  constructor() {
    this.generateActions('updateEmail', 'updatePass');
  }

  loginUser(user) {
		var savedEmail = localStorage.getItem('email');
	  userSource.loginUser(user)
	    .then((status) => {
	    	console.log(status)
	    	if (savedEmail !== user.email) {
		      localStorage.setItem('email', user.email);
		    }
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
    localStorage.removeItem('email');
  	this.dispatch();
  }
}

export default LoginActions;
