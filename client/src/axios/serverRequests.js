const axios = require("axios");

export const postLogin = async (userData)=>{
    let success = false;
    await axios.post("http://localhost:5000/api/user/login", {
        username: userData.username,
        password: userData.password
    })
    .then(response => {
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
        return response.data.username
    })
    .catch();
}

export const postRegister = async (userData)=>{
    axios.post("http://localhost:5000/api/user/register", {
        username: userData.username,
        email: userData.email,
        password: userData.password
    })
    .then(response => {
        localStorage.setItem("authorisation", response.data.token);
        localStorage.setItem("exp", response.data.exp);
        localStorage.setItem("user", response.data.user);
    })
    .catch();
}

const axiosConfig = {
    headers: {
        'authorisation': localStorage.getItem("authorisation")
    }
}

export const postSnippet = async function(snipData){
    return await axios.post("http://localhost:5000/api/snippet/add", {
        title: snipData.title,
        description: snipData.description,
        snippet: snipData.code
    }, axiosConfig)
    .then(res=>{return res;})
    .catch();
}

export const getSnippets = async ()=>{
    let snippets = [];
    await axios.get("http://localhost:5000/api/snippet/get")
    .then(response => {snippets = response.data;})
    .catch();
    return snippets;
}

export const authUser = async function(goto){
    return await axios.post("http://localhost:5000/api/user/authUser", {
        token: localStorage.getItem("authorisation")
    }, axiosConfig)
    .then(()=>{return true})
    .catch(()=>{return false});
}

export const getSnippet = async function(id){
    let snippet;
    await axios.get("http://localhost:5000/api/snippet/get/"+id)
    .then(res=>{snippet=res.data})
    .catch();
    return snippet;
}

export const updateSnippetVote = async function(snip, vote){
    let success = false;
    await axios.post("http://localhost:5000/api/snippet/update/votes", {
        snipId: snip,
        vote: vote
    }, axiosConfig)
    .then(()=>{success = true;})
    .catch(()=>{success = false;});
    return success;
}

export const updateSnippetViews = async function(snip){
    return await axios.post("http://localhost:5000/api/snippet/update/views",{
        snipId: snip
    })
    .then()
    .catch();
}