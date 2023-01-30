import React from "react";
import { Navigate } from "react-router-dom";
import FormButton from "./Button";

const LogInForm = ( {user, setUser} ) => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        setUser(!user);
    }
    const handleRegister = () => {
        window.location.href = 'http://localhost:3000/register'
    }
    
    return (
        <div className="user-form">
            <h2>Log In</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">E-Mail:</label>
                <input type="text" name="email"></input>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password"></input>
                <FormButton type='submit' value='Log In' />
                <FormButton type="button" value="Register" action={handleRegister} />
            </form>
            { user && <Navigate to="/" /> }
        </div>
    )
}

export default LogInForm;