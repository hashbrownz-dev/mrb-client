import React from "react";

const Link = ({auth, setAuth, to, setPage, logOut}) => {
    const handleClick = (event)=>{
        event.preventDefault();
        if(logOut) setAuth(!auth);
        setPage(to);
    }
    const linkStyle = {
        color:'white',
        textDecoration:'none',
        textTransform:'capitalize',
        fontSize:'18px'
    }
    return (
        <li>
            <a href='' onClick={handleClick} style={linkStyle}>{to}</a>
        </li>
    )
}

const LinkContainer = ({ auth, setAuth, page, setPage }) => {
    
    const content = auth ? ['index', 'create recipe', 'log out'] : ['log in', 'register'];

    return (
        <ul>
            {content.map(element => <Link auth={auth} setAuth={setAuth} to={element} setPage={setPage} logOut={(element === 'log out')} />)}
        </ul>
    )
}

const NavBar = ( {auth, setAuth, page, setPage} ) => {
    return (
        <nav>
            <h1>My Recipe Book</h1>
            <LinkContainer auth={auth} setAuth={setAuth} page={page} setPage={setPage} />
        </nav>
    )
}

export default NavBar;