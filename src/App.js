import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
            case 'login':
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
                break;
            default:
                break;
        }
    }

    // Page Determines Navigation
    const [ page, setPage ] = useState('login');
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
            <NavBar user={auth} />
            { getPage(page) }
            {/* <Routes>
                <Route path="/" element={<RecipeHome user={auth} current={current} setCurrent={setCurrent} />} />
                <Route path="/recipes/create" element={<CreateRecipe user={auth} />} />
                <Route path="/recipes/edit" element={<EditRecipe />} />
                <Route path="/recipes/view" element={<ShowRecipe current={current} />} />
                <Route path="/login" element={<Login user={auth} setUser={setAuth} />} />
                <Route path="/logout" element={<LogOut user={auth} setUser={setAuth} />} />
                <Route path="/register" element={<Register user={auth} setUser={setAuth} />} />
            </Routes> */}
            <Footer />
        </div>
    )
}

export default App;