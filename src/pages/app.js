import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import Main from './main';
import Login from '../components/Login';
import Signup from '../components/Signup';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import {} from 'react-router';

const App = () => {
  const isLogin = useSelector((state) => state.user.isLogin);

  return (
    <div>
      <Route exact path="/" component={isLogin ? Main : Login} />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/main" component={Main} />
      </Switch>
    </div>
  );
};

export default App;
