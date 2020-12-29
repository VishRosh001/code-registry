import React, {useState} from 'react'
import SnipDisplay from "./../snipDisplay/snipDisplay";
import {getSnippets} from "./../../axios/serverRequests";

import "./registryContent.css";

let count = 0;

function RegistryContent(props) {
    let [snippets, setSnippets] = useState({data: []});
    
    if(count === 0){
        getSnippets()
        .then(res => {setSnippets({data: res.data}); count = 1})
        .catch(error => console.log(error));
    }

    return (
        <div className="snipsContainer">
            {
                
                snippets.data.map(item => <div key={item._id} className="snipItem"><SnipDisplay  title={item.title} description={item.description}></SnipDisplay></div>)
                
            }
        </div>
    )
}

export default RegistryContent;
