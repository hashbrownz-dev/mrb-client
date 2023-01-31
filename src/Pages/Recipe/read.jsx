import React from 'react';
import Recipe from '../../Components/Recipe/Page';

const ReadRecipe = ({ current, setPage })=>{
    return(
        <Recipe current={current} setPage={setPage} />
    )
}

export default ReadRecipe;