import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import Main from './main';
import Login from '../components/Login'
import Signup from '../components/Signup'
import { Switch, Route, Redirect } from 'react-router-dom';

const App = () => {
  const isLogin = useSelector(state => state.user.isLogin)

  return (
    <div>
      <Switch>
        <Route exact 
              path = "/login"
              component = {Login}
        />
        <Route exact 
              path = "/signup" 
              component = {Signup}
        />
        <Route exact 
              path = "/main"
              component = {Main}
        />
        <Route
            path="/"
            component = { isLogin ? Main:Login}
          />
      </Switch>
    </div>
  );
};

export default App;
