import React from 'react';
import RecipeForm from '../../Components/Forms/Recipe';

const UpdateRecipe = ({ current })=>{
    return(
        <RecipeForm pageTitle="Edit Recipe" current={current} />
    )
}

export default UpdateRecipe;