import React from 'react';
import RecipeForm from '../../Components/Forms/Recipe';

const CreateRecipe = ({setPage, setCurrent})=>{
    return(
        <RecipeForm pageTitle="Create New Recipe" setPage={setPage} setCurrent={setCurrent} />
    )
}

export default CreateRecipe;