import React from 'react';
import { Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Calculator from './components/Calculator';
import LearnMore from './components/LearnMore';

import './App.css';
import WelcomePage from "./components/WelcomePage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path ="/" render={props => <WelcomePage {...props} />} />
      <Route exact path ="/calculator" render={props => <Calculator {...props} />} />
      <Route exact path="/login" render={props => <Login {...props}/>} />
      <Route exact path ="/sign-up" render={props => <SignUp {...props} />} />
      <Route exact path ="/learn" render={props => <LearnMore {...props} />} />
    </div>
  );
}

export default App;
