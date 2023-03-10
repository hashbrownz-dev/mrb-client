import React from "react";
import FormButton from "./Button";
import { createRecipe, updateRecipe } from "../../api/recipe";

const RecipeForm = ({ pageTitle, current, setCurrent, setPage }) => {
    let title ='', parsedIngredients ='', parsedDirections ='', image;

    const reader = new FileReader();
    reader.onload = ( () => {image = window.btoa(reader.result);} );

    if(current){
        title = current.title;
        parsedIngredients = current.ingredients.join('\n');
        parsedDirections = current.directions.join('\n');
    }

    const handleFileChange = (event) => {
        // Check reader state
        reader.readAsBinaryString(event.target.files[0]);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Converts multi line inputs into array
        const getTextArea = (input) => {
            return input.split('\n');
        }

        const recipe = {
            title : event.target.title.value,
            ingredients : getTextArea(event.target.ingredients.value),
            directions : getTextArea(event.target.directions.value),
            image : image ? image : ''
        }
        let response;
        if(pageTitle.toLowerCase().includes('edit')){
            recipe.recipeId = current._id;
            response = await updateRecipe(recipe);
        } else {
            response = await createRecipe(recipe);
        }
        if(response.hasOwnProperty('_id')){
            setCurrent({
                title:recipe.title,
                ingredients:recipe.ingredients,
                directions:recipe.directions,
                imgSrc:'./images/Japanese-Chicken-Curry-3769-II.jpg',
                _id:response._id,
            });
            setPage('read recipe');
        }
    }

    return (
        <div>
            <h2>{pageTitle}</h2>
            <form className='recipe-form' onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input type="text" name="title" id="title" defaultValue={title} />
                <label htmlFor="ingredients">Ingredients:</label>
                <textarea name="ingredients" id="ingredients" cols="30" rows="10" defaultValue={parsedIngredients}></textarea>
                <label htmlFor="directions">Directions:</label>
                <textarea name="directions" id="directions" cols="30" rows="10" defaultValue={parsedDirections}></textarea>
                {/* <label htmlFor='imageUpload'>Add an Image: </label> */}
                {/* <input type="file" onChange={handleFileChange} name="imageUpload" id="imageUpload" style={{
                    border:'none',
                    height:'32px',
                }} /> */}
                <FormButton type="submit" value={pageTitle} />
            </form>
        </div>
    )
}

export default RecipeForm;