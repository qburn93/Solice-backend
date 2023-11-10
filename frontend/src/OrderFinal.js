import React, { useState, useEffect } from 'react';
import SolarPanel from './SolarPanel';
import './App.css';

function OrderFinal() {
    const [orderData, setOrderData] = useState(null);

    useEffect(() => {
        // Fetch order data from your API when the component mounts
        fetch('/api/orders/final')
            .then(response => response.json())
            .then(data => setOrderData(data));
    }, []);

    return (
        <div>
            <h1>Place an Order</h1>
            <SolarPanel />
            {/* Pass the order data to the Order component as a prop */}
            
        </div>
    );
}

export default OrderFinal;