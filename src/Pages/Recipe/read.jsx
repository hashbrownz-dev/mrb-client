import React from 'react';
import Recipe from '../../Components/Recipe/Page';

const ReadRecipe = ({ current, setPage, setCurrent })=>{
    return(
        <Recipe current={current} setCurrent={setCurrent} setPage={setPage} />
    )
}

export default ReadRecipe;