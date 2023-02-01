import React from 'react';
import RecipeForm from '../../Components/Forms/Recipe';

const UpdateRecipe = ({ current, setPage, setCurrent })=>{
    return(
        <RecipeForm pageTitle="Edit Recipe" current={current} setPage={setPage} setCurrent={setCurrent} />
    )
}

export default UpdateRecipe;