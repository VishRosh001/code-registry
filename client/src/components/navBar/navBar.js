import React from 'react'
import {useTheme} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import RegistryLogo from "../logo";
import SearchBox from "../searchBox";
import InputButton from "../inputButton";

import "./navBar.css";


const getStyles = {
    registryLogo:{
        marginTop: "4px",
        paddingRight: "5px",
    },
}

//const useStyles = makeStyles(useGetStyles);

function NavBar() {
   // const classes = useStyles();

    return (
        <div className="registryNav">
            <RegistryLogo className="registryLogo"></RegistryLogo>
            <SearchBox></SearchBox>
            
            <InputButton label="Login"></InputButton>
            <InputButton label="Sign Up"></InputButton>
        </div>
    )
}

export default NavBar;
