import React from "react";

export const Loader = ({message}) => {
    return (
        <div className = 'loader'>
            <p>{message}</p>
            <progress value={null} />
        </div>
    )
}