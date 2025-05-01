import React, { useState, useEffect } from 'react';

export default function UserProfile() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate fetching user data
        const fetchUserData = async () => {
            try {
                const response = await fetch('/api/user'); // Replace with your API endpoint
                const data = await response.json();
                setUser(data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return <div>Error loading user data.</div>;
    }

    return (
        <div className="user-profile">
            <h1>User Profile</h1>
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
    );
};
