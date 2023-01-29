import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// IMPORT COMPONENTS
import NavBar from "./Components/NavBar";
// IMPORT PAGES
import Login from "./Pages/User/login";
import Register from "./Pages/User/register";
import CreateRecipe from "./Pages/Recipe/create";
import RecipeHome from "./Pages/Recipe";
import ShowRecipe from "./Pages/Recipe/show";


const App = (props) => {
const [ auth, setAuth ] = useState(false);
    return (
        <Router>
            <NavBar user={auth} />
            <Routes>
                <Route path="/" element={<RecipeHome user={auth} />} />
                <Route path="/recipes/create" element={<CreateRecipe user={auth} />} />
                <Route path="/about" element={<ShowRecipe user={auth} />} />
                <Route path="/login" element={<Login user={auth} setUser={setAuth} />} />
                <Route path="/register" element={<Register user={auth} setUser={setAuth} />} />
            </Routes>
        </Router>
    )
}

export default App;