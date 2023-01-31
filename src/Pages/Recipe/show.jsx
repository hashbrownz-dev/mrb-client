import React from 'react';
import Recipe from '../../Components/Recipe/Page';

const ShowRecipe = (props)=>{
    const { current } = props;
    return(
        <Recipe current={current} />
    )
}

export default ShowRecipe;