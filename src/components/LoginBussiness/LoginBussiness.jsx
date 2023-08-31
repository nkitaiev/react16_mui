import React from 'react';
import {
    Box,
    Button,
    Typography,
    InputAdornment,
    TextField,
    Link,
} from "@material-ui/core";
import { ArrowBack, PhoneIphone } from "@material-ui/icons";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from '@material-ui/core/styles';
import loginImage from "../../assets/login_background.svg";
import companyLogo from "../../assets/company_logo.svg";
import './login-styles.css'

const theme = createTheme({
    palette: {
        primary: {
            main: "#390879",
            // light: will be calculated from palette.primary.main,
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            main: "#E0C2FF",
            light: "#F5EBFF",
            // dark: will be calculated from palette.secondary.main,
            contrastText: "#47008F",
        },
    },
});