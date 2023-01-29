const LogInForm = ( {user, setUser} ) => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        setUser(!user);
    }
    return (
        <div>
            <h2>My Recipe Book</h2>
            <h3>Log In</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="email"></input>
                <input type="password" name="password"></input>
                <input type="submit" value="Log In"></input>
            </form>
        </div>
    )
}

export default LogInForm;