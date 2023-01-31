import React from "react";
import FormButton from "./Button";

import { registerUser } from "../../api/user";

const RegisterForm = ( { page, setPage, auth, setAuth } ) => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const user = {
            name : event.target.name.value,
            email : event.target.email.value,
            password : event.target.password.value
        }
        const response = await registerUser(user);
        if(response.hasOwnProperty('accessToken')){
            localStorage.setItem('user', JSON.stringify(response));
            setAuth(true);
            setPage('index');
        } else {
            console.log(response);
        }
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