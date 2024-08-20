import React from 'react';
import { useAuth } from '../contexts/authContext';
import './Home.css';

const Home = () => {
    const { currentUser } = useAuth();

    const userName = currentUser ? currentUser.userName || currentUser.email : 'Guest';

    return (
        <div className="home-page">
            
        </div>
    );

    }

export default Home;
