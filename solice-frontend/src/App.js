import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Orders from './Orders';
import SolarPanels from './SolarPanels';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Router>
        <Route path="/orders" component={Orders} />
        <Route path="/solar_panels" component={SolarPanels} />
      </Router>
    </div>
  );
}

export default App;