import React from "react";
import { useState } from "react";

// IMPORT COMPONENTS
import NavBar from "./Components/NavBar";
// IMPORT PAGES
import Login from "./Pages/User/login";
import LogOut from "./Pages/User/logout";
import Register from "./Pages/User/register";
import CreateRecipe from "./Pages/Recipe/create";
import Index from "./Pages/Recipe";
import ReadRecipe from "./Pages/Recipe/read";
import UpdateRecipe from "./Pages/Recipe/update";
import Footer from "./Components/Footer";

const App = (props) => {
    const getPage = (p) => {
        switch(p){
            case 'index':
                // Displays All Recipes on Index
                return <Index page={page} setPage={setPage} auth={auth} setAuth={setAuth} current={current} setCurrent={setCurrent} />
            case 'log in':
                // Display Log In Page
                return <Login page={page} setPage={setPage} auth={auth} setAuth={setAuth} current={current} setCurrent={setCurrent} />
            case 'register':
                // Display Register Page
                return <Register page={page} setPage={setPage} auth={auth} setAuth={setAuth} current={current} setCurrent={setCurrent} />  
            case 'create recipe':
                // Display Create Recipe Page
                return <CreateRecipe page={page} setPage={setPage} auth={auth} setAuth={setAuth} current={current} setCurrent={setCurrent} />
            case 'read recipe':
                // Display Read Recipe Page
                return <ReadRecipe page={page} setPage={setPage} auth={auth} setAuth={setAuth} current={current} setCurrent={setCurrent} />
            case 'update recipe':
                // Display Edit Recipe Page
                return <UpdateRecipe page={page} setPage={setPage} auth={auth} setAuth={setAuth} current={current} setCurrent={setCurrent} />
            case 'delete recipe':
                break;
            case 'log out':
                return <LogOut page={page} setPage={setPage} auth={auth} setAuth={setAuth} current={current} setCurrent={setCurrent} />
            default:
                break;
        }
    }

    // Page Determines Navigation
    const [ page, setPage ] = useState('log in');
    // Auth handles user authorization
    const [ auth, setAuth ] = useState(false);
    // Current is for viewing specific Recipes
    const [ current, setCurrent ] = useState({
        title:'',
        imgSrc:'',
        ingredients:[''],
        directions:[''],
        _id:'',
    });

    return (
        <div>
            <NavBar auth={auth} setAuth={setAuth} page={page} setPage={setPage} />
            { getPage(page) }
            <Footer />
        </div>
    )
}

export default App;