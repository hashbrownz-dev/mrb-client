import React from "react";
import RecipeCard from "./Card";

const CardContainer = ({ recipes, current, setCurrent, page, setPage }) => {
    return (
        <div className="card-container">
            {recipes.map(recipe => <RecipeCard recipe={recipe} current={current} setCurrent={setCurrent} page={page} setPage={setPage} key={recipe._id} />)}
        </div>
    )
}

export default CardContainer;