import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Trips from './pages/Trips';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/trips/" component={Trips} />
        <Route exact path="/trips/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </div>
  );
};

export default App;
