import React from 'react';
import {
  BrowserRouter as Router, 
  Switch, 
  Route
} from "react-router-dom"

import NavigationContainer from './components/navigation/navigation-container';
import Home from './components/pages/home'
import About from './components/pages/about'
import Contact from './components/pages/contact'

import "./components/styles/main.scss"
import TurnTest from './components/pages/abc';

function App() {
  return (
    <div className="App">
      <TurnTest />
      <Router>
        <NavigationContainer/>
          <Switch>
              {/* <Route exact path="/" component={Home} /> */}
              <Route  path="/about" component={About} />
              <Route  path="/contact" component={Contact} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
