import React from 'react';
import {ThemeProvider, createMuiTheme, responsiveFontSizes} from "@material-ui/core/styles";
import Header from './Header';


const theme = createMuiTheme({
    typography: {
        fontFamily: 'Helvetica Now Display',
    },
});

export default function App() {


    return(
        <ThemeProvider theme={responsiveFontSizes(theme)}>
            <Header />
        </ThemeProvider>
    )
}