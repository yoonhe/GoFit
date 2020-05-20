import React, { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginAction from '../reducers/user';
import { Link } from 'react-router-dom';

const Login = (props) => {
  let [values, setValues] = useState({});

  const handleInputTextChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const { LoginAction } = props;
  const handleLogin = () => {
    console.log('values will send', values);
    LoginAction.postLogin(values);
  };

  return (
    <div>
      <h3> Login </h3>
      <div>
        {' '}
        Email
        <div>
          <input name="email" onChange={handleInputTextChange} />
        </div>
      </div>
      <div>
        Password
        <div>
          <input
            type="password"
            name="password"
            onChange={handleInputTextChange}
          />
        </div>
      </div>
      <button onClick={handleLogin}>Login</button>
      <Link to="/Signup">
        <button>Sign up</button>
      </Link>
    </div>
  );
};

export default connect(
  (state) => ({}),
  (dispatch) => ({
    LoginAction: bindActionCreators(loginAction, dispatch),
  })
)(Login);
