import React from "react";
import FormButton from "../Forms/Button";

const Ingredient = (props) => {
    const { text } = props
    return(
        <li>{text}</li>
    )
}

const Ingredients = (props) => {
    const { ingredients } = props;
    return(
        <ul>
            {ingredients.map((ingredient)=><Ingredient text={ingredient} />)}
        </ul>
    )
}

const Direction = (props) => {
    const { text } = props
    return(
        <li>{text}</li>
    )
}

const Directions = (props) => {
    const { directions } = props;
    return(
        <ol>
            {directions.map((direction)=><Direction text={direction} />)}
        </ol>
    )
}

const Recipe = (props) => {
    const {current} = props;
    const { title, imgSrc, ingredients, directions } = current;
    console.log(props);
    console.log(current);
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
                <FormButton type='button' value='edit' action='' />
                <FormButton type='button' value='delete' action='' />
            </form>
        </div>
    )
}

export default Recipe;