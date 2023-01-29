import React from 'react';
import RegisterForm from '../../Components/Forms/Register';

const Register = ({user, setUser})=>{
    return(
        <RegisterForm user={user} setUser={setUser} />
    )
}

export default Register;