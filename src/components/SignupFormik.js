import { Formik } from 'formik';
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { SigninStyle, GoSignin, BodyInfo } from '../style/SignupStyle';
import axios from 'axios';
const ROOT_URL = 'http://13.125.15.2:80/';

const SignupFormik = () => {
  let [values, setValues] = useState({});

  if (values.redirect) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          if (!values.password) {
            errors.password = 'Required';
          } else if (!values.passwordChecker) {
            errors.passwordChecker = 'Required';
          } else if (values.password !== values.passwordChecker) {
            errors.passwordChecker = '입력한 패스워드가 맞지 않습니다.';
          }
          if (!values.username) {
            errors.username = 'Required';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log('gathering values', values);
          //axios.post(POST_URL, values).then(res => redirect = true)
          axios.post(ROOT_URL + 'api/user/signup', values).then((res) => {
            console.log(res);
            setSubmitting(false);
            setValues({ redirect: true });
          });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <SigninStyle>
            <h3>
              <span>회원가입</span>
            </h3>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="email"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  placeholder="이메일 주소"
                />
                <div>{errors.email && touched.email && errors.email}</div>
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="비밀번호"
                />
                <div>
                  {errors.password && touched.password && errors.password}
                </div>
              </div>
              <div>
                <input
                  type="password"
                  placeholder="check"
                  name="passwordChecker"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.passwordChecker}
                  placeholder="비밀번호 확인"
                />
                <div>
                  {errors.passwordChecker &&
                    touched.passwordChecker &&
                    errors.passwordChecker}
                </div>
              </div>
              <div>
                <input
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  placeholder="사용자 이름"
                />
                <div>
                  {errors.username && touched.username && errors.username}
                </div>
              </div>
              <div>
                <h6> * * *</h6>
              </div>
              <BodyInfo>
                <div>
                  <input
                    name="height"
                    onChange={handleChange}
                    type="number"
                    placeholder="키"
                  />
                  cm
                </div>

                <div>
                  <input
                    name="weight"
                    onChange={handleChange}
                    type="number"
                    placeholder="현재 몸무게"
                  />
                  kg
                </div>
              </BodyInfo>
              <button type="submit" disabled={isSubmitting}>
                가입
              </button>
            </form>
            <Link to="/">
              <GoSignin>
                {/* <button>Cancel</button> */}
                이미 계정이 있으신가요?
              </GoSignin>
            </Link>
          </SigninStyle>
        )}
      </Formik>
    </div>
  );
};

export default SignupFormik;
