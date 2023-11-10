import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './styles/MainPage.css';
import SolarPanel from './SolarPanel';
import Order from './Order';
import Profile from './Profile';

function App() {
  const [solarPanels, setSolarPanels] = useState([]);

  useEffect(() => {
    axios.get('/api/solar_panels/')
      .then(res => setSolarPanels(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/solar_panels">Solar Panels</Link></li>
            <li><Link to="/orders">Orders</Link></li>
            <li><Link to="/profiles">Profiles</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact>
            <div className="main-page">
              <h1>Welcome to Our Solar Panel Store</h1>
              <p>We offer high-quality solar panels for your home and business.</p>
              <div className="solar-panels">
                {solarPanels.map(panel => (
                  <div key={panel.id} className="solar-panel">
                    <h2>{panel.name}</h2>
                    <img src={panel.image} alt={panel.name} />
                    <p>{panel.square_meters} square meters</p>
                  </div>
                ))}
              </div>
            </div>
          </Route>
          <Route path="/solar_panels" component={SolarPanel} />
          <Route path="/orders" component={Order} />
          <Route path="/profiles" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;