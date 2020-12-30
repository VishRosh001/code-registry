const axios = require("axios");

export const postLogin = async (userData)=>{
    let success = false;
    await axios.post("http://localhost:5000/api/user/login", {
        username: userData.username,
        password: userData.password
    })
    .then(response => {
        console.log(response);
        localStorage.setItem("authorisation", response.data.token);
        localStorage.setItem("exp", response.data.exp);
        localStorage.setItem("user", response.data.user);
        success = true;
    })
    .catch();
    return success;
}

export const requestUsername = async (userID)=>{
    axios.post("http://localhost:5000/api/user/request", {
        username: userID
    })
    .then(response => {
        console.log(response);
        return response.data.username
    })
    .catch(error => console.log("Error"));
}

export const postRegister = async (userData)=>{
    axios.post("http://localhost:5000/api/user/register", {
        username: userData.username,
        email: userData.email,
        password: userData.password
    })
    .then(response => {
        console.log(response);
        localStorage.setItem("authorisation", response.data.token);
        localStorage.setItem("exp", response.data.exp);
        localStorage.setItem("user", response.data.user);
    })
    .catch(error => console.log("Error"));
}

const axiosConfig = {
    headers: {
        'authorisation': localStorage.getItem("authorisation")
    }
}

export const postSnippet = async (snipData)=>{
    let success = false;
    await axios.post("http://localhost:5000/api/snippet/add", {
        title: snipData.title,
        description: snipData.description,
        snippet: snipData.code
    }, axiosConfig)
    .then(response => {success=true;})
    .catch();
    return success;
}

export const getSnippets = async ()=>{
    let snippets = [];
    await axios.get("http://localhost:5000/api/snippet/get")
    .then(response => {snippets = response.data;})
    .catch(error => console.log("Error"));
    return snippets;
}

export const authUser = async function(goto){
    let isAuth = false;
    await axios.post("http://localhost:5000/api/user/authUser", {
        token: localStorage.getItem("authorisation")
    }, axiosConfig)
    .then(()=>{isAuth = true;})
    .catch(error => console.log("Error"));
    return isAuth;
}