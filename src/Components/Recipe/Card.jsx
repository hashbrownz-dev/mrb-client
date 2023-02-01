import React from "react";

const RecipeCard = ({ recipe, current, setCurrent, page, setPage }) => {

    const { title, imgSrc, ingredients, directions, _id } = recipe;

    const handleClick = () => {
        setCurrent({
            title,
            imgSrc,
            ingredients,
            directions,
            _id
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