import React from 'react';
import CardContainer from '../../Components/Recipe/CardContainer';

const Index = ({ auth, setAuth, current, setCurrent, page, setPage })=>{
    const testRecipe = {
        title : 'Japanese Curry',
        imgSrc : './images/Japanese-Chicken-Curry-3769-II.jpg',
        ingredients : [
            'potato',
            'carrot',
            'onion',
            'beef',
            'scallions',
            'ginger root',
            'garlic'
        ],
        directions : [
            'cook ingredients',
            'add curry roux',
            'cook rice',
            'serve curry on rice',
            'garnish with scallions'
        ],
        _id : 'fuck a duck!'
    }
    const myRecipes = Array(12).fill(testRecipe);
    return(
        <>
            <h2>My Recipes</h2>
            <CardContainer recipes={myRecipes} current={current} setCurrent={setCurrent} page={page} setPage={setPage} />
        </>       
    )
}

export default Index;