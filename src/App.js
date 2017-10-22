import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomeView from './components/homeview.js';
import AnotherView from './components/anotherpage.js';

class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div>
        <Link to="/">Home</Link>
        <Link to="/another">Another</Link>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/another" component={AnotherView} />
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
