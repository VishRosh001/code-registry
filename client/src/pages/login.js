import React from 'react';
import Box from '@material-ui/core/Box';
import { Typography, Button, TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {useTheme} from "@material-ui/core";

const useGetStyles = () =>{
    const theme = useTheme();

    return {
            loginBox:{
                background: theme.palette.secondary.main,
                width: "50%",
                minWidth: "500px",
                maxWidth: "800px",
                boxShadow: "0 3px 5px 4px rgba(0, 0, 0, 0.3)"
            },

            loginTitle:{
                color: theme.palette.common.white,
                fontSize: 30
            },

            inputField:{
                color: theme.palette.common.white,
                focus:{
                    background: theme.palette.secondary.light
                }
            }
        }
}

const useStyles = makeStyles(useGetStyles);

function Login() {
    const classes = useStyles();

  return <Box className={classes.loginBox} >
      <Typography className={classes.loginTitle}>Sign U</Typography>
      <TextField InputProps={{className: classes.inputField}} color="primary" id="username" label="Username" variant="filled"></TextField>
      <TextField InputProps={{className: classes.inputField}} color="primary" id="password" label="Password" type="password" variant="filled"></TextField>
  </Box>;
}

export default Login;
