import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import LoginStore from 'stores/loginStore';
import LoginActions from 'actions/loginActions';

@connectToStores
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user
    }
  }

  static getStores(props) {
    return [LoginStore];
  }

  static getPropsFromStores(props) {
    return LoginStore.getState();
  }

  render() {
    return (
      <div>
        <input type="text" value={this.props.user.email} onChange={this.onEmailChange}/>
        <input type="password" value={this.props.user.pass} onChange={this.onPassChange}/>
        <h1>It works: {this.props.user.email} {this.props.user.pass}</h1>
      </div>
    );
  }

  onEmailChange = evt => {
    this.setState({user: {email: evt.target.value}});
    LoginActions.updateEmail(evt.target.value);
  }

  onPassChange = evt => {
    this.setState({user: {pass: evt.target.value}});
    LoginActions.updatePass(evt.target.value);
  }
}

export default Login;
