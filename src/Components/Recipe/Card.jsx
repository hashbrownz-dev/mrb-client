import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const RecipeCard = (props) => {
    const { recipe, current, setCurrent } = props;
    const { title, imgSrc, ingredients, directions } = recipe;

    const [ click, setClick ] = useState(false);

    const handleClick = () => {
        setCurrent({
            title,
            imgSrc,
            ingredients,
            directions,
        });
        setClick(true);
    }
    return(
        <>
        { click && <Navigate to="/recipes/view" /> }
        <div className="recipe-card" onClick={handleClick}>
            <img src={imgSrc} alt={title} />
            <p>{title}</p>
        </div>
        </>
        
    )
}

export default RecipeCard;