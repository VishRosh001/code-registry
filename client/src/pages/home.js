import React, {useState} from 'react'

import NavBar from "../components/navBar/navBar"
import RegistryContent from "./../components/registryContent/registryContent"
import SnipDisplay from "./../components/snipDisplay/snipDisplay";
import {getSnippets} from "../axios/serverRequests";

import "./home.css"

function Home() {
    return (
        <div>
            <NavBar></NavBar>
           {/* <RegistryContent style={{marginLeft:"40%", marginTop: "10px", width:"400px"}}></RegistryContent>*/}
           
           <RegistryContent></RegistryContent>
            
        </div>
    )
}

export default Home;
