import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FourOhFour from './pages/404';
import Homepage from './pages/Homepage';
import About from './pages/About';

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/about" component={About} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;

// <Route path="/search" component={props => <Search shows={preload.shows} {...props} />} />
