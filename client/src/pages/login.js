import React from 'react';
import Box from '@material-ui/core/Box';
import { Typography, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {useTheme} from "@material-ui/core";

import InputBox from "./../components/inputBox";
import InputButton from "./../components/inputButton";

const useGetStyles = () =>{
    const theme = useTheme();

    return {
            loginBox:{
                background: theme.palette.secondary.light,
                width: "50%",
                minWidth: "400px",
                maxWidth: "500px",
                height: "280px",
                boxShadow: "0 3px 5px 4px rgba(0, 0, 0, 0.3)"
            },

            loginTitle:{
                color: theme.palette.common.white,
                fontSize: 30,
                marginTop: "20px",
                marginLeft: "40%",
                marginBottom: "15px"
            }
        }
}

const getStyles = {
    userInput: {
        marginTop: "10px",
        marginLeft: "28%",
        width: "300px"
    },
    loginButton:{
        marginLeft: "33%",
        marginTop: "20px",
        marginBottom: "40px",
    }
}

const useStyles = makeStyles(useGetStyles);

function Login() {
    const classes = useStyles();

  return <Box className={classes.loginBox} >
      <Typography className={classes.loginTitle}>Log In</Typography>
      <InputBox style={getStyles.userInput} label="Username"></InputBox>
      <InputBox style={getStyles.userInput} label="Password"></InputBox>
      <InputButton style={getStyles.loginButton} label="Log In"></InputButton>
  </Box>;
}

export default Login;
