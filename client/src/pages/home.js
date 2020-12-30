import React, {useState} from 'react'

import NavBar from "../components/navBar/navBar"
import RegistryContent from "./../components/registryContent/registryContent"
import CreateSnippet from "./../components/registryContent/createSnippet"
import SnipDisplay from "./../components/snipDisplay/snipDisplay";
import {getSnippets} from "../axios/serverRequests";

import {useLocation} from "react-router-dom";

import "./home.css"

function Home(props) {
    if(props.history.location.state != undefined)
        if(props.location.state.from === "login"){window.location.reload();props.history.replace({...props.history, state:{from: "none"}});}
    return (
        <div>
            <NavBar></NavBar>
           {/* <RegistryContent style={{marginLeft:"40%", marginTop: "10px", width:"400px"}}></RegistryContent>*/}
           <CreateSnippet></CreateSnippet>
           <RegistryContent></RegistryContent>
            
        </div>
    )
}

export default Home;
