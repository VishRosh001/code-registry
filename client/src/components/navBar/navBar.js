import React, {useState, useEffect} from 'react'
import {useTheme} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { Typography} from '@material-ui/core';

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
            marginLeft: "10%",
            marginTop: "10px",
            gridColumnStart: 3,
            gridColumnEnd: 5,
            marginRight: -10,
        },

        loggedIn: {
            gridColumnStart: 5,
        }
    }
}

const useStyles = makeStyles(useGetStyles);

function AccountButtons(props){
    const history = useHistory();
    const classes = useStyles();
    
    if(props.username === "guest"){
        return(
            <>
                <InputButton name="login" onclick={(e)=>{history.push("/login");}} label="Login"></InputButton>
                <InputButton name="register" onclick={(e)=>{history.push("/register");}} label="Sign Up"></InputButton>
            </>
        )
    }else{
        return(
            <>
                <Typography className={classes.welcomeText}>{"Welcome, " + props.username}</Typography>
                <InputButton className={classes.loggedIn} name="logout" onclick={(e)=>{history.push("/logout");}} label="Log Out"></InputButton>
            </>)
    }
}

//const useStyles = makeStyles(useGetStyles);

function NavBar() {
   // const classes = useStyles();

    const [user, setUser] = useState("guest");

    useEffect(() => {
        if(user !== localStorage.getItem("user")){
            authUser()
            .then(res=>{
                if(res === true)setUser(localStorage.getItem("user"));
            });
        }
    }, []);

    return (
        <div className="registryNav">
            <RegistryLogo className="registryLogo"></RegistryLogo>
            <SearchBox className="searchBox"></SearchBox>
            <AccountButtons username={user}></AccountButtons>
        </div>
    )
}

export default NavBar;
