import { apiURL } from "./url";

export const logInUser = async ( credentials ) => {
    const submission = await fetch(`${apiURL}/user/login`, {
        method:"POST",
        headers: {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(credentials)
    });
    const response = await submission.json();
    return response;
}