import React from 'react';
import SolarPanel from './SolarPanel';
import Order from './Order';
import Profile from './Profile';

function App() {
  return (
    <div className="App">
      <h1>Solar Panels</h1>
      <SolarPanel />
      <h1>Orders</h1>
      <Order />
      <h1>Profiles</h1>
      <Profile />
    </div>
  );
}

export default App;

