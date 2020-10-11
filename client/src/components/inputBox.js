import React from 'react';
import {FormControl, TextField} from '@material-ui/core';
import styled from 'styled-components';
import {useTheme} from "@material-ui/core";

const StyledTextField = styled(TextField)`
    .MuiFormLabel-root{
        color: ${props => props.theme.palette.common.white};
    }

    .MuiOutlinedInput-root {
        input {
            color: ${props => props.theme.palette.common.white};
            background: ${props => props.theme.palette.secondary.main};
        }

        input:hover {
            color: ${props => props.theme.palette.common.white};
            background: ${props => props.theme.palette.primary.dark};
        }

        &.Mui-focused input{
            color: ${props => props.theme.palette.common.white};
            background: ${props => props.theme.palette.secondary.main};
        }
    }
`;

let InputBox = function(props){
    const theme = useTheme();
    return <FormControl>
        <StyledTextField label={props.label} theme={theme} style={props.style} variant="outlined"></StyledTextField>
    </FormControl>
}

export default InputBox;