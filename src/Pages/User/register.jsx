import React from 'react';
import RegisterForm from '../../Components/Forms/Register';

const Register = ({ page, setPage, auth, setAuth, current, setCurrent })=>{
    return(
        <RegisterForm page={page} setPage={setPage} auth={auth} setAuth={setAuth} current={current} setCurrent={setCurrent} />
    )
}

export default Register;