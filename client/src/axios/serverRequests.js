const axios = require("axios");

export const postLogin = async (userData)=>{
    axios.post("http://localhost:5000/api/user/login", {
        username: userData.username,
        password: userData.password
    })
    .then(response => {console.log(response);localStorage.setItem("authorisation", response.data.token)})
    .catch(error => console.log(error));
}

export const postRegister = async (userData)=>{
    axios.post("http://localhost:5000/api/user/register", {
        username: userData.username,
        email: userData.email,
        password: userData.password
    })
    .then(response => {console.log(response);localStorage.setItem("authorisation", response.data.token)})
    .catch(error => console.log(error));
}