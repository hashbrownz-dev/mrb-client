import React from 'react';
import { Navigate } from 'react-router-dom';

const LogOut = ( { user, setUser }) => {
    return (
        <Navigate to="/login" />
    )
}

export default LogOut;