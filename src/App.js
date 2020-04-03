import React from 'react';
import {
  BrowserRouter as Router, 
  Switch, 
  Route
} from "react-router-dom"

// import "bootstrap/dist/css/bootstrap.css"

import NavigationContainer from './components/navigation/navigation-container';
import Home from './components/site-pages/home'
import About from './components/site-pages/about'
// import Contact from './components/site-pages/contact'
import FormExample from"./components/site-pages/form-example"

import "./components/styles/main.scss"

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationContainer/>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route  path="/about" component={About} />
              {/* <Route  path="/contact" component={Contact} /> */}
              <Route  path="/contact" component={FormExample} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
