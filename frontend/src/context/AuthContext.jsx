import React, {createContext, useContext, useState} from 'react';

const AuthContext = createContext();

export function useAuth() {
        return useContext(AuthContext);
}

export default function AuthProvider({children}) {
    const [isSignedIn, setIsSignedIn] = useState(() => {
        return localStorage.getItem('isSignedIn') === 'false';
    });
    const [user, setUser] = useState(() => {
        return JSON.parse(localStorage.getItem('user')) || null;
    });


    function login(userData) {
        setIsSignedIn(true);
        setUser(userData);
        localStorage.setItem('isSignedIn', true);
        localStorage.setItem('user', JSON.stringify(userData)); 

        console.log('User data saved to localStorage:', user);
        console.log('isSIgnedIn:',isSignedIn);
        
    }

    function logout() {
        setIsSignedIn(false);
        setUser(null);  
        localStorage.removeItem('isSignedIn');
        localStorage.removeItem('user');
    }

    const value = {
        isSignedIn,
        user,
        login,
        logout
    };
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}