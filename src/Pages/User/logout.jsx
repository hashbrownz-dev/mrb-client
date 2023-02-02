import React from 'react';
import LogInForm from '../../Components/Forms/LogIn';
import { Navigate } from 'react-router-dom';

const LogOut = ( { page, setPage, auth, setAuth, current, setCurrent }) => {
    return (
        <>
            <p className='logOutMessage'>You have been successfully logged out!</p>
            <LogInForm page={page} setPage={setPage} auth={auth} setAuth={setAuth} current={current} setCurrent={setCurrent} />
        </>
    )
}

export default LogOut;