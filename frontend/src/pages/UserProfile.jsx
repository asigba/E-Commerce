import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function UserProfile() {
    const {userId} = useSearchParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate fetching user data
        fetch(`http://localhost:5001/api/users/${userId}`)
        .then((data) => {
            setUser(data);
            setLoading(false);
        })
        .catch((error) => {
            console.error('Error fetching user data:', error);
            setLoading(false);
        }); 
    }, [userId]);

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
