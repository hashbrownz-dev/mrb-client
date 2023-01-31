import React from "react";

const RecipeCard = ({ recipe, current, setCurrent, page, setPage }) => {

    const { title, imgSrc, ingredients, directions } = recipe;

    const handleClick = () => {
        setCurrent({
            title,
            imgSrc,
            ingredients,
            directions,
        });
        setPage('read recipe');
    }
    return(
        <div className="recipe-card" onClick={handleClick}>
            <img src={imgSrc} alt={title} />
            <p>{title}</p>
        </div>
    )
}

export default RecipeCard;