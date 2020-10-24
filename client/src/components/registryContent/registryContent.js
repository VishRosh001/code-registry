import React, {useState} from 'react'
import {Paper, Typography} from "@material-ui/core";

import "./registryContent.css";

class ContentDisplay{
    constructor(id, title, desc, upvotes, author){
        this.id = id;
        this.title = title;
        this.description = desc;
        this.upvotes = upvotes;
        this.author = author;
    }
}

function RegistryContent(props) {

    const [content, setContent] = useState([]);

    return (
        <div {...props}>
            <Paper variant="outlined" elevation={2}>
                <div>
                <Typography variant="h6"> 10 Upvotes</Typography>
                </div>
                <div>
                    <Typography variant="h5"> This is a title</Typography>
                    <Typography display="inline" variant="subtitle1">Hello this is a desciption dfsdf sdf sfds dsfs dfsdfwfw wfsdfsfs sfsfs</Typography>
                </div>
            </Paper>
        </div>
    )
}

export default RegistryContent;
