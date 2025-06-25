import { useState } from 'react';
import './App.css';
import CreateUser from './components/CreateUser';
import CreateOrder from './components/CreateOrder';
import GetOrder from './components/GetOrder';

function App() {
    const [userId, setUserId] = useState('');

    return (
        <div className="container">
            <h1>Microservices Frontend</h1>
            <CreateUser setUserId={setUserId} />
            <hr />
            <CreateOrder userId={userId} />
            <hr />
            <GetOrder />
        </div>
    );
}

export default App;
