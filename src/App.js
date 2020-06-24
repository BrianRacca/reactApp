import React, { Component } from 'react';
import { Home } from './Home';
import { Orders } from './Orders';
import { ShopList } from './ShopList'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';


class App extends React.Component {
  render() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Route exact path='/' component={Home} />
        <Route exact path='/ordenes' component={Orders} />
        <Route exact path='/carrito' component={ShopList} />
      </Router>
    </React.Fragment>
  );
  }
}

export default App;