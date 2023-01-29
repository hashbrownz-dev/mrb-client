import React from "react";
import { Navigate } from "react-router-dom";

const RegisterForm = ( {user, setUser} ) => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        setUser(!user);
    }
    
    return (
        <div className="user-form">
            <h2>Create New Account</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">E-Mail:</label>
                <input type="text" name="email"></input>
                <label htmlFor="userName">User Name:</label>
                <input type="text" name="userName"></input>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password"></input>
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input type="password" name="confirmPassword"></input>
                <input type="submit" value="Create Account"></input>
            </form>
            { user && <Navigate to="/" /> }
        </div>
    )
}

export default RegisterForm;