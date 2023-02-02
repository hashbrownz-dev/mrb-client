import React from 'react';
import { Loader } from '../../Components/Loader';
import { useState } from 'react';
import { indexRecipes } from '../../api/recipe';
import CardContainer from '../../Components/Recipe/CardContainer';
import FormButton from '../../Components/Forms/Button';

const Index = ({ auth, setAuth, current, setCurrent, page, setPage })=>{
    const [ myRecipes, setMyRecipes ] = useState([]);
    const [ loaded, setLoaded ] = useState(false);
    indexRecipes().then( (data) => {
        setMyRecipes(data);
        setLoaded(true);
    });

    return(
        <>
            <h2>My Recipes</h2>
            { loaded ? null : <Loader message={'Loading Recipes...'} />}
            { myRecipes.length === 0 && <p>No Recipes!</p>}
            <CardContainer recipes={myRecipes} current={current} setCurrent={setCurrent} page={page} setPage={setPage} />
        </>       
    )
}

export default Index;