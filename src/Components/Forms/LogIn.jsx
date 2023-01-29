const LogInForm = (props) => {
    const handleSubmit = async (event) => {
        event.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="email"></input>
            <input type="password" name="password"></input>
            <input type="submit" value="Log In"></input>
        </form>
    )
}

export default LogInForm;