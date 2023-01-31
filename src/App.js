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
import RecipeHome from "./Pages/Recipe";
import ShowRecipe from "./Pages/Recipe/show";
import EditRecipe from "./Pages/Recipe/edit";
import Footer from "./Components/Footer";


const App = (props) => {
const [ auth, setAuth ] = useState(false);
const [ current, setCurrent ] = useState({
    title:'null',
    imgSrc:'null',
    ingredients:['null'],
    directions:['null'],
    _id:'null',
});

console.log(current);

    return (
        <Router>
            <NavBar user={auth} />
            <Routes>
                <Route path="/" element={<RecipeHome user={auth} current={current} setCurrent={setCurrent} />} />
                <Route path="/recipes/create" element={<CreateRecipe user={auth} />} />
                <Route path="/recipes/edit" element={<EditRecipe />} />
                <Route path="/recipes/view" element={<ShowRecipe current={current} />} />
                <Route path="/login" element={<Login user={auth} setUser={setAuth} />} />
                <Route path="/logout" element={<LogOut user={auth} setUser={setAuth} />} />
                <Route path="/register" element={<Register user={auth} setUser={setAuth} />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App;