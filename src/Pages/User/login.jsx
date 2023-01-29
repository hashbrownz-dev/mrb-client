import React from 'react';
import LogInForm from '../../Components/Forms/LogIn';

const Login = ({user, setUser})=>{
    return(
        <LogInForm user={user} setUser={setUser} />
    )
}

export default Login;