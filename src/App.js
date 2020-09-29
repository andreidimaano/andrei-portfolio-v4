import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/pages/Home';
import About from './Components/pages/About';


function App() {
  return (
    <div className="app">
      <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/' exact component={About} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
