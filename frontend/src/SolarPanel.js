import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function SolarPanel() {
    const [solarPanels, setSolarPanels] = useState([]);
    const [quantity, setQuantity] = useState({}); // Add state for quantity

    useEffect(() => {
        axios.get('/api/solar_panels/')
            .then(res => {
                setSolarPanels(res.data);
                // Initialize quantity state
                const initialQuantity = {};
                res.data.forEach(panel => {
                    initialQuantity[panel.id] = 0;
                });
                setQuantity(initialQuantity);
            })
            .catch(err => console.log(err));
    }, []);

    // Function to handle placing an order
    const placeOrder = (panelId) => {
        axios.post('/api/orders/', {
            solar_panel: panelId,
            quantity: quantity[panelId]
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    };

    return (
        <div className="solar-panels-grid">
            {solarPanels.map(panel => (
                <div key={panel.id} className="solar-panel">
                    <h2>{panel.name}</h2>
                    <img src={panel.image} alt={panel.name} />
                    <p>{panel.square_meters} square meters</p>
                    <input 
                        type="number" 
                        value={quantity[panel.id]} 
                        onChange={e => setQuantity({...quantity, [panel.id]: e.target.value})}
                    />
                    <button onClick={() => placeOrder(panel.id)}>Place Order</button>
                </div>
            ))}
        </div>
    );
}

export default SolarPanel;