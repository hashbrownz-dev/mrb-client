import React from "react";
import { Link } from "react-router-dom"

const LinkContainer = ({user, setUser}) => {
    const linkStyle = {
        color:'white',
        textDecoration:'none',
        fontSize:'18px'
    }
    const logOut = (event)=>{
        // event.preventDefault();
        console.log('log out')
    }
    return (
        <ul>
            {/* View My Recipes */}
            <li><Link to="/" style={linkStyle}>My Recipes</Link></li>
            {/* Create New Recipe */}
            <li><Link to="/recipes/create" style={linkStyle}>New Recipe</Link></li>
            {/* About */}
            <li><Link to="/about" style={linkStyle}>About</Link></li>
            {/* Log Out */}
            <li><a href="/logout" onClick={logOut} style={linkStyle}>Log Out</a></li>
        </ul>
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