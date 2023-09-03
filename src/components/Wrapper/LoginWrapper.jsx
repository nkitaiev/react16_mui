import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import loginImage from "../../assets/login_background.svg";
import companyLogo from "../../assets/company_logo.svg";
import "./login-wrapper.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#390879",
    },
    inputBorders: {
      main: "#E1E6EC",
    },
    inputText: {
      main: "#6F7C8E",
    },
  },
});

export const LoginWrapper = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <div className="page-layout">
        <div>
          <div className="login-image-wrapper">
            <img
              style={{
                height: "100%",
                maxWidth: 500,
              }}
              src={loginImage}
            />
            <img
              style={{
                height: "100%",
                maxWidth: 200,
                position: "absolute",
              }}
              alt="The house from the offer."
              src={companyLogo}
            />
          </div>
        </div>
        {children}
      </div>
    </ThemeProvider>
  );
};
