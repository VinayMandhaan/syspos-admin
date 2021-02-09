import React, { useEffect } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';

import Navigations from './config/routes/index'

function WithTheme(props) {

    const theme = createMuiTheme({
        palette: {
            primary: {
                main: "#fff",
            },
            secondary: {
                main: "#7270e3",
            },
            tertiary: {
                main: "#f5f6fa"
            },
            fourth:{
                main:"#55d776"
            },
            fifth:{
                main:"#f35560"
            }, 
            text: {
                primary: "#808191",
                secondary:"#202224",
                tertiary:"#55d776"
            }
        },

    });

    return (
        <ThemeProvider theme={theme}>
            <Navigations />
        </ThemeProvider>
    );
}

export default WithTheme;
