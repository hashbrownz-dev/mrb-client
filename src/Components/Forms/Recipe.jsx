import React from "react";
import FormButton from "./Button";

const RecipeForm = ({ pageTitle, current }) => {
    let title ='', imgSrc ='', parsedIngredients ='', parsedDirections ='';
    if(current){
        title = current.title;
        parsedIngredients = current.ingredients.join('\n');
        parsedDirections = current.directions.join('\n');
    }

    return (
        <div>
            <h2>{pageTitle}</h2>
            <form className='recipe-form'>
                <label htmlFor="title">Title:</label>
                <input type="text" name="title" id="title" value={title} />
                <label htmlFor="ingredients">Ingredients:</label>
                <textarea name="ingredients" id="ingredients" cols="30" rows="10">{parsedIngredients}</textarea>
                <label htmlFor="directions">Directions:</label>
                <textarea name="directions" id="directions" cols="30" rows="10">{parsedDirections}</textarea>
                <label htmlFor='imageUpload'>Add an Image: </label>
                <input type="file" name="imageUpload" id="imageUpload" style={{
                    border:'none',
                    height:'32px',
                }} />
                <FormButton type="submit" value={pageTitle} />
            </form>
        </div>
    )
}

export default RecipeForm;