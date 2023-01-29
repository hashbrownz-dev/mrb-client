const LogInForm = (props) => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const url = 'https://localhost:5000/user/login';
        const body = new FormData(event.target);
        const response = await fetch(url, {method:"POST"});
        console.log(response);
        // const body = {
        //     email : event.target.email.value,
        //     password : event.target.password.value
        // };

    }
    return (
        <form onSubmit={handleSubmit} method="POST" action="https://localhost:5000/user/login">
            <input type="text" name="email"></input>
            <input type="password" name="password"></input>
            <input type="submit" value="Log In"></input>
        </form>
    )
}

export default LogInForm;