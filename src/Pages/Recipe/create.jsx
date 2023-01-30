import React from 'react';
import FormButton from '../../Components/Forms/Button';

const CreateRecipe = ()=>{
    return(
        <div>
            <h2>Create New Recipe</h2>
            <form className='recipe-form'>
                <label htmlFor="title">Title:</label>
                <input type="text" name="title" id="title" />
                <label htmlFor="ingredients">Ingredients:</label>
                <textarea name="ingredients" id="ingredients" cols="30" rows="10"></textarea>
                <label htmlFor="directions">Directions:</label>
                <textarea name="directions" id="directions" cols="30" rows="10"></textarea>
                <FormButton type="submit" value="Create Recipe" />
            </form>
        </div>
    )
}

export default CreateRecipe;