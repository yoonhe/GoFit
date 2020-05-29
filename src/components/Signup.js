import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { SigninStyle, GoSignin, BodyInfo } from '../style/SignupStyle';
import axios from 'axios';
const ROOT_URL = 'http://localhost:7777/';

const Signup = () => {
  let [values, setValues] = useState({});

  const handleInputTextChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSignup = () => {
    console.log('gathering values', values);
    //axios.post(POST_URL, values).then(res => redirect = true)
    let signupURL = ROOT_URL + 'api/user/signup';
    axios.post(signupURL, values).then(res => {
      console.log(res);
      setValues({ redirect: true });
    });
  };
  if (values.redirect) {
    return <Redirect to='/' />;
  }
  return (
    <div>
      <SigninStyle>
        <h3>
          <span>회원가입</span>
        </h3>

        <div>
          <input
            name='email'
            onChange={handleInputTextChange}
            placeholder='이메일 주소'
          />{' '}
        </div>
        <div>
          <input
            type='password'
            name='password'
            onChange={handleInputTextChange}
            placeholder='비밀번호'
          />
        </div>
        <div>
          <input
            type='password'
            placeholder='check'
            name='passwordChecker'
            onChange={handleInputTextChange}
            placeholder='비밀번호 확인'
          />
        </div>
        <div>
          <input
            name='username'
            onChange={handleInputTextChange}
            placeholder='사용자 이름'
          />
        </div>
        <div>
          <h6> * * *</h6>
        </div>
        <BodyInfo>
          <div>
            <input
              name='height'
              onChange={handleInputTextChange}
              type='number'
              placeholder='키'
            />
            cm
          </div>

          <div>
            <input
              name='weight'
              onChange={handleInputTextChange}
              type='number'
              placeholder='현재 몸무게'
            />
            kg
          </div>
        </BodyInfo>
        <button onClick={handleSignup}>가입</button>
        <Link to='/'>
          <GoSignin>
            {/* <button>Cancel</button> */}
            이미 계정이 있으신가요?
          </GoSignin>
        </Link>
      </SigninStyle>
    </div>
  );
};

export default Signup;
