import { useState } from 'react';
import axios from 'axios';

export default function GetOrder() {
    const [orderId, setOrderId] = useState('');
    const [orderData, setOrderData] = useState(null);
    const [message, setMessage] = useState('');

    const handleFetch = async () => {
        try {
            const res = await axios.get(`https://apigateway-84s9.onrender.com/orders/${orderId}`);
            setOrderData(res.data);
            setMessage('');
        } catch (error) {
            setMessage('Order Not Found or Invalid ID');
            setOrderData(null);
        }
    };

    return (
        <div>
            <h2>Get Order Details</h2>
            <input type="text" placeholder="Enter Order ID" value={orderId} onChange={(e) => setOrderId(e.target.value)} />
            <button onClick={handleFetch}>Get Order</button>

            {message && <p className="message">{message}</p>}

            {orderData && (
                <div style={{ marginTop: '20px' }}>
                    <h3>Order Details</h3>
                    <p><strong>Product:</strong> {orderData.order.product}</p>
                    <p><strong>Price:</strong> {orderData.order.price}</p>
                    <h4>User Details</h4>
                    <p><strong>Name:</strong> {orderData.user.name}</p>
                    <p><strong>Email:</strong> {orderData.user.email}</p>
                </div>
            )}
        </div>
    );
}
