import React from 'react';
import {Button, Box} from '@material-ui/core';
import styled from 'styled-components';
import {useTheme} from "@material-ui/core";

const StyledBox = styled(Box)`
    .MuiButtonBase-root {
        width: 150px;
        height: 50px;
        background: #240090;
        color: ${props => props.theme.palette.common.white};
    }
`

let InputButton = function(props){
    const theme = useTheme();
    return <StyledBox style={props.style} theme={theme}>
        <Button>{props.label}</Button>
    </StyledBox>
}

export default InputButton;