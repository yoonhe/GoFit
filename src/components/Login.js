import React, { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginAction from '../reducers/user';
import { Link } from 'react-router-dom';
import { LoginStyle, GoSignup } from '../style/LoginStyle';
import loginImg from '../../login_top.png';

const Login = props => {
  let [values, setValues] = useState({});
  const dispatch = useDispatch();
  const handleInputTextChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleLogin = () => {
    console.log('values will send', values);
    dispatch(loginAction.postLogin(values));
  };
  const handleEnter = e => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div>
      <LoginStyle>
        <img src={loginImg} width='318px' />
        <h1>
          <span>Go-Fit!</span>
        </h1>
        <div className='text'>
          <div>
            <input
              name='email'
              onChange={handleInputTextChange}
              onKeyPress={handleEnter}
              placeholder='이메일 주소'
            />
          </div>
        </div>
        <div className='text'>
          <div>
            <input
              type='password'
              name='password'
              onChange={handleInputTextChange}
              onKeyPress={handleEnter}
              placeholder='비밀번호'
            />
          </div>
        </div>
        <button onClick={handleLogin}>로그인</button>
        <Link to='/Signup'>
          <GoSignup>
            {/* <button>아직 계정이 없으신가요?</button> */}
            아직 계정이 없으신가요?
          </GoSignup>
        </Link>
      </LoginStyle>
    </div>
  );
};

export default Login;
