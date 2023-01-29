import React from "react";
import { Link } from "react-router-dom"

const LinkContainer = () => {
    return (
        <div>
            {/* View My Recipes */}
            <Link to="/">My Recipes</Link>
            {/* Create New Recipe */}
            <Link to="/recipes/create">New Recipe</Link>
            {/* About */}
            <Link to="/about">About</Link>
        </div>
    )
}

const NavBar = ({user}) => {
    return (
        <nav>
            <h1>My Recipe Book</h1>
            { user ? <LinkContainer /> : null }
        </nav>
    )
}

export default NavBar;