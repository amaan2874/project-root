import { useState } from 'react';
import axios from 'axios';

export default function CreateUser({ setUserId }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5002/users', { name, email });
            setUserId(res.data._id);
            setMessage(`User Created! ID: ${res.data._id}`);
            setName('');
            setEmail('');
        } catch (error) {
            setMessage('Error creating user');
        }
    };

    return (
        <div>
            <h2>Create User</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <button type="submit">Create User</button>
            </form>
            {message && <p className="message">{message}</p>}
        </div>
    );
}
