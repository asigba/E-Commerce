import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './UserProfile.css';

export default function UserProfile() {
    const API_URL = process.env.REACT_APP_USER_URL || "http://localhost:5002";
    const {userId} = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
            // Simulate fetching products from an API
            const fetchUser = async () => {
                try {
                    const response = await fetch(`${API_URL}/api/users/${userId}`); 
                    const data = await response.json();
                    setUser(data);
                } catch (error) {
                    console.error('Error fetching user:', error);
                } finally {
                    setLoading(false);
                }
            };
    
            fetchUser();
        }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return <div>Error loading user data.</div>;
    }

    return (
        <div className="user-profile-container">
            <div className="user-profile-card">
                <h1 className="user-profile-title">User Profile</h1>
                <div className="user-profile-info">
                    <div>
                        <strong>Name:</strong> {user.name}
                    </div>
                    <div>
                        <strong>Email:</strong> {user.email}
                    </div>
                    <div>
                        <strong>Joined:</strong> {new Date(user.joined).toLocaleDateString()}
                    </div>
                </div>
            </div>
        </div>
    );
};
