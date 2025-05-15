import React, {useState} from 'react';
import './Register.css';

export default function Register(){
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
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

    function handleSubmit(){
        console.log('Form submitted');

        const check = confirmPassword();
        if (!check) {
            return;
        } else {
            try {
                const response = fetch('http://localhost:5002/api/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = response.json();
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
                    <label>First Name</label>
                    <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required/>
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" id="lastName" name="lastName" value={formData.lastName} placeholder="Last Name" onChange={handleChange} required/>
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