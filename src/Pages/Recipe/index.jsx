import React from 'react';
import { Navigate } from 'react-router-dom';

const RecipeHome = ({user})=>{
    return(
        <>
            { !user && <Navigate to="/login" /> }
            <h1>View Your Recipes</h1>
        </>       
    )
}

export default RecipeHome;