import React from 'react';
import { useState } from 'react';
import { indexRecipes } from '../../api/recipe';
import CardContainer from '../../Components/Recipe/CardContainer';

const Index = ({ auth, setAuth, current, setCurrent, page, setPage })=>{
    const [ myRecipes, setMyRecipes ] = useState([]);
    indexRecipes().then( (data) => setMyRecipes(data));

    return(
        <>
            <h2>My Recipes</h2>
            <CardContainer recipes={myRecipes} current={current} setCurrent={setCurrent} page={page} setPage={setPage} />
        </>       
    )
}

export default Index;