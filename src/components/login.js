import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import LoginStore from 'stores/loginStore';
import LoginActions from 'actions/loginActions';

@connectToStores
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: props.email,
      pass: props.pass
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
        <input type="text" value={this.props.email} onChange={this.onEmailChange}/>
        <input type="password" value={this.props.pass} onChange={this.onPassChange}/>
        <h1>It works: {this.props.email} {this.props.pass}</h1>
      </div>
    );
  }

  onEmailChange = evt => {
    this.setState({email: evt.target.value});
    LoginActions.updateEmail(evt.target.value);
  }

  onPassChange = evt => {
    this.setState({pass: evt.target.value});
    LoginActions.updatePass(evt.target.value);
  }
}

export default Login;
