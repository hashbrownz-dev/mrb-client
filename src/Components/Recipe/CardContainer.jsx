import React from "react";
import RecipeCard from "./Card";

const CardContainer = (props) => {
    const { recipes, current, setCurrent } = props;
    return (
        <div className="card-container">
            {recipes.map(recipe => <RecipeCard recipe={recipe} current={current} setCurrent={setCurrent} />)}
        </div>
    )
}

export default CardContainer;