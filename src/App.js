import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { useSelector } from 'react-redux';
import 'bulma/css/bulma.css';
import './App.css';
import MainPage from './Pages/main';
import LoginPage from './Pages/login';

function App() {

  let login = useSelector(state => state.loggedIn);

  if (login == false) {
    if (window.localStorage.getItem("athenaLogin") != null) {
      login = true;
    }
  }
  return (
    <Router>
      <div className="App full-height">
        {login?<MainPage></MainPage>:<LoginPage></LoginPage>}
      </div>
    </Router>
  );
}

export default App;
