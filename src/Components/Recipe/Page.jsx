import React from "react";
import FormButton from "../Forms/Button";

const Ingredient = ({ text }) => {
    return(
        <li>{text}</li>
    )
}

const Ingredients = ({ ingredients }) => {
    return(
        <ul>
            {ingredients.map((ingredient)=><Ingredient text={ingredient} />)}
        </ul>
    )
}

const Direction = ({ text }) => {
    return(
        <li>{text}</li>
    )
}

const Directions = ({ directions }) => {
    return(
        <ol>
            {directions.map((direction)=><Direction text={direction} />)}
        </ol>
    )
}

const Recipe = ( { current, setPage } ) => {
    const { title, imgSrc, ingredients, directions } = current;
    const handleClickEdit = (event) => {
        setPage('update recipe');
    }
    const handleClickDelete = (event) => {
        console.log('Delete Recipe')
    }
    return(
        <div className='recipe'>
            <h2>{title}</h2>
            <div className='recipe-container'>
                <img src={imgSrc} alt={title} className='recipe-hero' />
                <div className='id-container'>
                    <h3>Ingredients:</h3>
                    <Ingredients ingredients={ingredients} />
                </div>
                <div className='id-container'>
                    <h3>Directions:</h3>
                    <Directions directions={directions} />
                </div>
            </div>
            <form className="recipe-controls">
                <FormButton type='button' value='edit' action={handleClickEdit} />
                <FormButton type='button' value='delete' action={handleClickDelete} />
            </form>
        </div>
    )
}

export default Recipe;