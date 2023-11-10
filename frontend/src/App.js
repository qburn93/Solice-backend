import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HeroVideo from './HeroVideo';
import BenefitsGrid from './BenefitsGrid';
import './App.css';
import './styles/MainPage.css';
import OrderFinal from './OrderFinal';
import SolarPanel from './SolarPanel';
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
          <HeroVideo />
          <BenefitsGrid />
            <div className="main-page">
            <h1>Welcome to Our Solar Panel Store</h1>
            <p>We offer high-quality solar panels for your home and business.</p>
            <h2>Benefits of Solar Energy</h2>
            <p>Solar energy is renewable, reduces electricity bills, and has diverse applications.</p>
            <h2>Our Process</h2>
            <p>We provide a seamless ordering and installation process to ensure you get the best experience.</p>
            <h2>Testimonials</h2>
            <p>Read testimonials from our satisfied customers.</p>
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
          <Route path="/orders" component={OrderFinal} />
          <Route path="/profiles" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;