import React from "react";
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
import { makeStyles } from "@material-ui/core/styles";
import loginImage from "../../assets/login_background.svg";
import companyLogo from "../../assets/company_logo.svg";
import "./login-styles.css";
import { LoginWrapper } from "../Wrapper/LoginWrapper";

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

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  label: {
    color: "red",
  },
});

export const Login = () => {
  const classes = useStyles();
  return (
    <LoginWrapper>
      <Box
        style={{
          maxWidth: 460,
          display: "flex",
          flexGrow: 1,
          flexDirection: "column",
          backgroundColor: "white",
          padding: "50px 75px",
        }}
      >
        <div className="back-button">
          <Button
            style={{
              maxWidth: "36px",
              width: "100%",
              minWidth: "20px",
              height: "36px",
              borderRadius: "100%",
            }}
            variant="contained"
            startIcon={<ArrowBack style={{ marginLeft: "10px" }} />}
          />
          <Typography
            style={{
              fontWeight: 600,
              fontSize: "16px",
              letterSpacing: "-0.31px",
              marginLeft: "5px",
            }}
            variant="body1"
            color={"primary"}
          >
            Back to home
          </Typography>
        </div>
        <div className="title">
          <span>Login</span>
          <span> Now</span>
        </div>
        <Typography
          style={{
            fontSize: "16px",
            fontWeight: 600,
            maxWidth: "310px",
            letterSpacing: "-0.31px",
            color: "#6F7C8E",
          }}
        >
          Enter Your mobile number and verify OTP to get access of your account.
        </Typography>

        <TextField
          id="outlined-helperText"
          label="Mobile number"
          color="primary"
          variant="outlined"
          style={{
            margin: "28px 0",
            padding: "12px 0",
          }}
          InputProps={{
            style: {
              borderRadius: "50px",
            },
            startAdornment: (
              <InputAdornment position="start">
                <PhoneIphone />
              </InputAdornment>
            ),
          }}
        />

        <Button
          style={{
            borderRadius: "50px",
            padding: "11px 0",
            fontSize: "14px",
            fontWeight: 800,
            textTransform: "none",
          }}
          variant="contained"
          color={"primary"}
          onClick={() => console.log("click")}
        >
          Get OTP
        </Button>

        <div className="divider">
          <hr />
          <div className="circle-wrapper">
            <div className="circle">
              <div>OR</div>
            </div>
          </div>
        </div>

        <div className="create-account-block">
          <Typography
            style={{
              fontSize: "16px",
              fontWeight: 300,
              fontStyle: "italic",
              letterSpacing: "-0.31px",
            }}
          >
            If you don’t have an account?
          </Typography>
          <Link
            component="button"
            variant="body2"
            style={{
              fontSize: "16px",
              fontWeight: 600,
              letterSpacing: "-0.31px",
            }}
            onClick={() => {
              console.info("create new click");
            }}
          >
            Create New
          </Link>
        </div>
      </Box>
    </LoginWrapper>
  );
};
