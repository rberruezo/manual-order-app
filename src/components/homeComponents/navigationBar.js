import React from 'react';
import LoginActions from 'actions/loginActions';
import connectToStores from 'alt/utils/connectToStores';
import LoginStore from 'stores/loginStore';
import {Row, Col} from 'react-flexbox-grid';

@connectToStores
class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  	this.setState(this.props);
  }

  static getStores(props) {
    return [LoginStore];
  }

  static getPropsFromStores(props) {
    return LoginStore.getState();
  }

  render() {
    return (
      <Row className='middle-md navigationBar'>
        <Col xs={6} sm={6} md={6}>
					<strong> {this.state.user.email} </strong> 
        </Col>
        <Col xs={3} sm={3} md={1} className='col-xs-offset-3 col-sm-offset-3 col-md-offset-5'>
	        <button className="logout-button" onClick={this.handleLogout}>Log out</button>
        </Col>
      </Row>
    );
  }

  handleLogout = evt => {
    evt.preventDefault();
    LoginActions.logoutUser();
  }
}

export default NavigationBar;
