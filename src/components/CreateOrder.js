import { useState } from 'react';
import axios from 'axios';

export default function CreateOrder({ userId }) {
    const [product, setProduct] = useState('');
    const [price, setPrice] = useState('');
    const [message, setMessage] = useState('');
    const [orderId, setOrderId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('https://orderservice-7xr2.onrender.com/orders', { product, price, userId });
            setOrderId(res.data._id);
            setMessage('Order Created Successfully!');
            setProduct('');
            setPrice('');
        } catch (error) {
            setMessage('Error creating order');
        }
    };

    return (
        <div>
            <h2>Create Order</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter Product" value={product} onChange={(e) => setProduct(e.target.value)} required />
                <input type="number" placeholder="Enter Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
                <input type="text" placeholder="Enter User ID" value={userId} readOnly />
                <button type="submit">Create Order</button>
            </form>
            {message && <p className="message">{message}</p>}
            {orderId && <p className="message">Order ID: {orderId}</p>}
        </div>
    );
}
