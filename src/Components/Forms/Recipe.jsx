import React from "react";
import FormButton from "./Button";

const RecipeForm = (props) => {
    const { title } = props;
    return (
        <div>
            <h2>{title}</h2>
            <form className='recipe-form'>
                <label htmlFor="title">Title:</label>
                <input type="text" name="title" id="title" />
                <label htmlFor="ingredients">Ingredients:</label>
                <textarea name="ingredients" id="ingredients" cols="30" rows="10"></textarea>
                <label htmlFor="directions">Directions:</label>
                <textarea name="directions" id="directions" cols="30" rows="10"></textarea>
                <label htmlFor='imageUpload'>Add an Image: </label>
                <input type="file" name="imageUpload" id="imageUpload" style={{
                    border:'none',
                    height:'32px',
                }} />
                <FormButton type="submit" value={title} />
            </form>
        </div>
    )
}

export default RecipeForm;