import React, {useState} from 'react'

import MdeEditor from "./../components/registryContent/mdeEditor";
import {Paper, Typography} from "@material-ui/core";

import NavBar from "./../components/navBar/navBar";
import InputBox from "./../components/inputBox";
import InputButton from "./../components/inputButton";

function AddCode() {

    const setDescData = (data) =>{
        setSnipData({...snipData, description: data});
    }
   
    const handleChange = (event)=>{
        if(event.target.name === "title"){
            setSnipData({...snipData, title: event.target.value});
        }

        if(event.target.name === "description"){
            setSnipData({...snipData, description: event.target.value});
        }

        if(event.target.name === "code"){
            setSnipData({...snipData, code: event.target.value});
        }

        if(event.type === "click"){
            console.log(snipData);
        }
    }

    const[snipData, setSnipData] = useState({title: "", description: "", code: ""});

    return (
        <div>
            <NavBar></NavBar>
            <Paper variant="outlined" style={{marginLeft: "30%", marginTop: "30px", padding: "2px", paddingBottom: "5px", width: "40%"}} elevation={2} >
                <InputBox placeholder="Title" name="title" value={snipData.title} onChildChange={handleChange} style={{width: "100%"}}></InputBox>
                <MdeEditor placeholder="Description" name="description" value={snipData.description} parentCallback={setDescData} style={{marginTop: "10px", width: "100%"}}></MdeEditor>
                <InputBox placeholder="Code" name="code" value={snipData.code} onChildChange={handleChange} style={{marginTop: "10px", width: "100%"}} rows={8} rowsMax={8} multiline={true}></InputBox>
                <InputButton onChildClick={handleChange} style={{marginTop: "8px", marginLeft: "86%" , width: "100px"}} label="Post"></InputButton>
            </Paper>
        </div>
    )
}

export default AddCode;
