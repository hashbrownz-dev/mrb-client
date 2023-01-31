import React from "react";
import FormButton from "./Button";

const RegisterForm = ( { page, setPage, auth, setAuth } ) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        setAuth(!auth);
        setPage('index');
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
                <FormButton type="submit" value="Create Account" />
            </form>
        </div>
    )
}

export default RegisterForm;