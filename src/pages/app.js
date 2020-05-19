
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

/*import React, { useState } from "react";
import Main from "./main";
import SearchInput from "../components/SearchInput";
import ResultVideos from "../components/ResultVideos";
import Modal from "react-modal";

Modal.setAppElement(document.getElementById("root"));

function App() {
  //리액트 훅: useState()로 함수형 컴포넌트에서도 클래스형 컴포넌트의 기능을 사용할 수 있게 해줌.
  //useState()는 클래스형 컴포넌트의 state의 선언과 관리를 짧고 직관적인 코드로 가능하게 해줌.
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <Main />
      <button onClick={() => setModalIsOpen(true)}>영상 추가 +</button>
      <>
        <Modal isOpen={modalIsOpen}>
          <SearchInput />
          <ResultVideos />
          <hr />
          <button onClick={() => setModalIsOpen(false)}>선택완료</button>
          <button onClick={() => setModalIsOpen(false)}>닫기</button>
        </Modal>
      </>
*/
    </div>
  );
}

export default App;
