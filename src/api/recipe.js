import { apiURL } from "./url";

export const indexRecipes = async() => {
    const { user, accessToken } = JSON.parse(localStorage.getItem('user'));
    const submission = await fetch(`${apiURL}/recipes/my-recipes/${user._id}`);
    return await submission.json();
}

export const createRecipe = async (recipe) => {
    const { user, accessToken } = JSON.parse(localStorage.getItem('user'));
    const { title, ingredients, directions } = recipe;
    const payload = {
        title,
        ingredients,
        directions,
        user,
        accessToken
    }
    const submission = await fetch(`${apiURL}/recipes/`, {
        method:"POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(payload)
    })
    return await submission.json();
}

export const updateRecipe = async (recipe) => {
    const { user, accessToken } = JSON.parse(localStorage.getItem('user'));
    const { title, ingredients, directions, recipeId } = recipe;

    const payload = {
        recipeId,
        title,
        ingredients,
        directions,
        user,
        accessToken
    }
    const submission = await fetch(`${apiURL}/recipes/`,{
        method:"PUT",
        headers:{
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(payload)
    })
    const response = await submission.json();
    return response;
}

export const deleteRecipe = async (recipe) => {
    const { user, accessToken } = JSON.parse(localStorage.getItem('user'));
    const { _id:recipeId } = recipe;
    const payload = { user, accessToken, recipeId };

    const submission = await fetch(`${apiURL}/recipes/`, {
        method:"DELETE",
        headers: {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(payload)
    })
    // return await submission.json();
    return submission;
}