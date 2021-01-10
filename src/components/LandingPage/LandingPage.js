import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './LandingPage.css';

// CUSTOM COMPONENTS
import LoginForm from '../LoginForm/LoginForm';

class LandingPage extends Component {
  state = {
    heading: 'Class Component',
  };

  onLogin = (event) => {
    this.props.history.push('/login');
  };

  toRegistration = (event) => {
    this.props.history.push('/registration')
  };

  render() {
    return (
      <div className="container">
        <h2>{this.state.heading}</h2>

        <div className="grid">
          <div className="grid-col grid-col_8">
            
            
          </div>
          <div className="grid-col grid-col_4">
            <LoginForm />

            <center>
              <h4>Want to sign up?</h4>
              <button className="btn btn_sizeSm" onClick={this.toRegistration}>
                Registration
              </button>
            </center>
          </div>
        </div>
      </div>
    );
  }
}


export default connect(mapStoreToProps)(LandingPage);
