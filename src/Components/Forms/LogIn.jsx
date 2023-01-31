import React from "react";
import FormButton from "./Button";
import { logInUser } from "../../api/user";

const LogInForm = ( { page, setPage, auth, setAuth, current, setCurrent } ) => {
    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await logInUser({
            email : event.target.email.value,
            password : event.target.password.value,
        })

        if(response.hasOwnProperty('accessToken')){
            localStorage.setItem('user', JSON.stringify(response));
            setAuth(!auth);
            setPage('index');
        }
    }
    
    const handleRegister = () => {
        setPage('register');
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
        </div>
    )
}

export default LogInForm;