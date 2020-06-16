import React, { Component } from 'react';
import logo from './assets/QapaqLogo.png';
import { Home } from './Home';
import { Contact } from './Contact';
import { Layout } from './components/Layout'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';


class App extends React.Component {
  render() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
      </Router>
    </React.Fragment>
  );
  }
}

export default App;