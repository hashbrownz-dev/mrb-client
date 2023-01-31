import React from 'react';
import LogInForm from '../../Components/Forms/LogIn';

const Login = ({ page, setPage, auth, setAuth, current, setCurrent })=>{
    return(
        <LogInForm page={page} setPage={setPage} auth={auth} setAuth={setAuth} current={current} setCurrent={setCurrent} />
    )
}

export default Login;