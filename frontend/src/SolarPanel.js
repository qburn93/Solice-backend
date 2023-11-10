import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SolarPanel() {
    const [solarPanels, setSolarPanels] = useState([]);

    useEffect(() => {
        axios.get('/api/solar_panels/')
            .then(res => setSolarPanels(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            {solarPanels.map(panel => (
                <div key={panel.id}>
                    <h2>{panel.name}</h2>
                    <img src={panel.image} alt={panel.name} />
                    <p>{panel.square_meters} square meters</p>
                </div>
            ))}
        </div>
    );
}

export default SolarPanel;