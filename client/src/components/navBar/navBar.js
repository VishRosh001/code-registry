import React, {useState} from 'react'
import {useTheme} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button} from '@material-ui/core';

import RegistryLogo from "../logo";
import SearchBox from "../searchBox";
import InputButton from "../inputButton";

import "./navBar.css";
import {useHistory} from "react-router-dom";
import {authUser} from "../../axios/serverRequests";



const useGetStyles = () => {
    const theme = useTheme();

    return {
        welcomeText:{
            color: theme.palette.common.white,
            fontSize: 20,
            marginLeft: "40%",
            marginTop: "10px",
            gridColumnStart: 3,
            gridColumnEnd: 5,
        }
    }
}

const useStyles = makeStyles(useGetStyles);

const getStyles = {
    registryLogo:{
        marginTop: "4px",
        paddingRight: "5px",
    }
}


function AccountButtons(props){
    const history = useHistory();
    const classes = useStyles();
    if(props.username.username === "guest")
        return(
            <>
                <InputButton name="login" onclick={(e)=>{history.push("/login");}} label="Login"></InputButton>
                <InputButton name="register" onclick={(e)=>{history.push("/register");}} label="Sign Up"></InputButton>
            </>
        )
    else
        return(
            <>
                <Typography className={classes.welcomeText}>{"Welcome, " + props.username.username}</Typography>
            </>)
}

//const useStyles = makeStyles(useGetStyles);

function NavBar() {
   // const classes = useStyles();

    const [user, setUser] = useState({username: "guest"});

    authUser()
    .then(res => {
        if(res === true && user.username !== localStorage.getItem("user")){setUser({username: localStorage.getItem("user")})};
        console.log(user);
    }).catch(e => console.log(e));

    return (
        <div className="registryNav">
            <RegistryLogo className="registryLogo"></RegistryLogo>
            <SearchBox></SearchBox>
            <AccountButtons username={user}></AccountButtons>
        </div>
    )
}

export default NavBar;
