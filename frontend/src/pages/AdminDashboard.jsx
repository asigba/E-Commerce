import React from 'react';

export default function AdminDashboard(){
    return (
        <div style={{ padding: '20px' }}>
            <h1>Admin Dashboard</h1>
            <p>Welcome to the admin dashboard. Here you can manage the application.</p>
            <div style={{ marginTop: '20px' }}>
                <button style={{ marginRight: '10px' }}>Manage Products</button>
                <button style={{ marginRight: '10px' }}>View Orders</button>
                <button>Manage Users</button>
            </div>
        </div>
    );
};
