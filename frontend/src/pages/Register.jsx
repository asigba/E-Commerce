import React, {useState} from 'react';
import './Register.css';

export default function Register(){
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: ''
    });

    const [confirmPass, setConfirmPass] = useState('');

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    function handleConfirmChange(e) {
        setConfirmPass(e.target.value);
    }

    function confirmPassword() {
        if (formData.password !== confirmPass) {
            alert('Passwords do not match');
            return false;
        }
        return true;
    }

    async function handleSubmit(e){
        console.log('Form submitted');
        e.preventDefault(); // Prevent the form from refreshing the page
        const check = confirmPassword();
        if (!check) {
            return;
        } else {
            try {
                const response = await fetch('http://localhost:5002/api/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || 'Network response was not ok');
                }
                const data = await response.json();
                console.log('Registration successful:', data);
                alert('Registration successful! Redirecting...');
                window.location.href = '/'; // Redirect to home page or dashboard

            }catch (error) {
                console.error('Error submitting form:', error);
                alert('Registration failed. Please try again.');
            }
        }
    }

    return(
        <div className="register-container">
            <div className="register-card">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="First Name" required/>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" id="email" name="email" value={formData.email} placeholder="Email" onChange={handleChange} required/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" value={confirmPass} onChange={handleConfirmChange}  required/>
                </div>
                <button type="submit" className="register-button">Register</button>
            </form>
            <p className="login-link">
                    Already have an account? <a href="/login">Log in</a>
            </p>
            </div>
        </div>
    );
}