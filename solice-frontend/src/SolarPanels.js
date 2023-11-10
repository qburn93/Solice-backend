// SolarPanels.js
import React, { useEffect, useState } from 'react';
import { getSolarPanels } from './api';

function SolarPanels() {
    const [solarPanels, setSolarPanels] = useState([]);

    useEffect(() => {
        getSolarPanels().then(response => {
            setSolarPanels(response.data);
        });
    }, []);

    return (
        <div>
            {solarPanels.map(panel => (
                <div key={panel.id}>
                    {/* Display solar panel data here */}
                </div>
            ))}
        </div>
    );
}

export default SolarPanels;