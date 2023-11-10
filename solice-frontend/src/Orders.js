import React, { useEffect, useState } from 'react';
import { getOrders } from './api';

function Orders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getOrders().then(response => {
            setOrders(response.data);
        });
    }, []);

    return (
        <div>
            {orders.map(order => (
                <div key={order.id}>
                    {/* Display order data here */}
                </div>
            ))}
        </div>
    );
}