import React from "react";

const FormButton = ({type, value, action}) => {
    const buttonStyle = {
        maxWidth:"240px",
        marginTop:"20px",
        height:"34px",
        color:"var(--neutral)",
        textTransform:"uppercase",
        fontSize:"14px",
    }
    if(action){
        return <input type={type} value={value} style={buttonStyle} className="form-button" onClick={action} />
    }
    return <input type={type} value={value} style={buttonStyle} className="form-button" />
}
export default FormButton;