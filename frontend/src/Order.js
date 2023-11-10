import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OrderFinal from './OrderFinal'; // Import OrderFinal

function Order() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get('/api/orders/')
            .then(res => setOrders(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <OrderFinal /> {/* Include OrderFinal */}
            {orders.map(order => (
                <div key={order.id}>
                    <h2>Order {order.id}</h2>
                    <p>Total price: {order.total_price}</p>
                    <p>Quantity: {order.quantity}</p>
                    <p>Date: {new Date(order.order_date).toLocaleDateString()}</p>
                </div>
            ))}
        </div>
    );
}

export default Order;