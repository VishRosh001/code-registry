import React from 'react'

import NavBar from "../components/navBar/navBar"
import RegistryContent from "./../components/registryContent/registryContent"

function Home() {
    return (
        <div>
            <NavBar></NavBar>
            <RegistryContent style={{marginLeft:"40%", marginTop: "10px", width:"400px"}}></RegistryContent>
        </div>
    )
}

export default Home;
