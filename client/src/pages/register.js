import React from 'react';
import Box from '@material-ui/core/Box';
import { Typography, Button, FormControl, FilledInput, InputLabel} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {useTheme} from "@material-ui/core";

const useGetStyles = () =>{
    const theme = useTheme();

    return {
            loginBox:{
                background: theme.palette.secondary.main,
                width: "50%",
                minWidth: "400px",
                maxWidth: "500px",
                boxShadow: "0 3px 5px 4px rgba(0, 0, 0, 0.3)"
            },

            loginTitle:{
                color: theme.palette.common.white,
                fontSize: 30,
                marginTop: "20px",
                marginLeft: "15px",
                marginBottom: "15px"
            },

            inputField:{
                width: "300px",
                marginBottom: "20px",
                marginLeft: "20%",
                color: theme.palette.common.white,
                background: theme.palette.secondary.light,
               
            },

            loginButton:{
                width: "150px",
                height: "50px",
                marginLeft: "30%",
                marginBottom: "20px"
            }
        }
}

const useStyles = makeStyles(useGetStyles);

function Register() {
    const classes = useStyles();

  return <Box className={classes.loginBox} >
      <Typography className={classes.loginTitle}>Sign Up</Typography>
      <FormControl className={classes.inputField}>
        <InputLabel>Username</InputLabel>
        <FilledInput ></FilledInput>
      </FormControl>
      <FormControl className={classes.inputField}>
        <InputLabel>Email address</InputLabel>
        <FilledInput ></FilledInput>
      </FormControl>
      <FormControl className={classes.inputField}>
        <InputLabel>Password</InputLabel>
        <FilledInput></FilledInput>
      </FormControl>
      <FormControl className={classes.inputField}>
        <InputLabel>Confirm Password</InputLabel>
        <FilledInput></FilledInput>
      </FormControl>
      <Button className={classes.loginButton}>Sign Up</Button>
  </Box>;
}

export default Register;
