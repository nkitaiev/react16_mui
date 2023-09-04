import React from "react";
import { Box, Button, TextField, Grid } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "./login-bussiness-step2.css";
import { LoginWrapper } from "../Wrapper/LoginWrapper";
import { makeStyles } from "@material-ui/core/styles";
import { DividerWithText } from "../CustomDivider/DividerWithText";
import BackButton from "../shared/back-button/BackButton";
import UploadButton from "../shared/upload-button/UploadButton";

const customStyles = makeStyles({
  inputClasses: {
    paddingBottom: "16px",
    "& input": {
      padding: "14px 18px",
    },
    "& fieldset.MuiOutlinedInput-notchedOutline": {
      borderRadius: "50px",
    },
    "& label.Mui-focused": {
      fontStyle: "normal",
      fontWeight: "400",
      textTransform: "uppercase",
    },
  },
  inputLabelClasses: {
    transform: "translate(14px, 16px) scale(1)",
    fontSize: "13px",
    fontWeight: "100",
    fontStyle: "italic",
  },
  formWrapper: {
    maxWidth: 460,
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    backgroundColor: "white",
    padding: "50px 75px",
  },
  backBtn: {
    maxWidth: "36px",
    width: "100%",
    minWidth: "20px",
    height: "36px",
    borderRadius: "100%",
  },
  button: {
    width: "100%",
    borderRadius: "50px",
    padding: "11px 0",
    fontSize: "14px",
    fontWeight: 800,
    textTransform: "none",
  },
  buttonsBlock: {
    marginTop: 32,
  },
  gridContainer: {
    flexGrow: 1,
  },
});

export const LoginBusinessStep2 = () => {
  const classes = customStyles();

  return (
    <LoginWrapper>
      <Box className={classes.formWrapper}>
        <BackButton
          icon={<ArrowBack style={{ marginLeft: "10px" }} />}
          text="Back to login"
        />
        <div className="title">
          <span>Sign up as a</span>
          <span> Business</span>
        </div>
        <DividerWithText position={"left"} textStyles={{ paddingLeft: 0 }}>
          Other details
        </DividerWithText>

        <TextField
          classes={{
            root: classes.inputClasses,
          }}
          InputLabelProps={{
            className: classes.inputLabelClasses,
          }}
          id="contact-name"
          label="Contact Name"
          variant="outlined"
        />

        <TextField
          classes={{
            root: classes.inputClasses,
          }}
          InputLabelProps={{
            className: classes.inputLabelClasses,
          }}
          id="contact-number"
          label="Contact Number"
          variant="outlined"
        />

        <TextField
          classes={{
            root: classes.inputClasses,
          }}
          InputLabelProps={{
            className: classes.inputLabelClasses,
          }}
          id="contact-email-address"
          label="Contact Email Address"
          variant="outlined"
        />

        <TextField
          classes={{
            root: classes.inputClasses,
          }}
          InputLabelProps={{
            className: classes.inputLabelClasses,
          }}
          id="ein"
          label="EIN (Employer Identification Number)"
          variant="outlined"
        />

        <DividerWithText
          position="center"
          textStyles={{ fontSize: 14, fontWeight: 600, color: "#0A0412" }}
        >
          Upload docs
        </DividerWithText>
        <UploadButton
          uploadLabel={"Certificate of Organization"}
          id="certificate-of-organization"
        />
        <UploadButton uploadLabel={"W-9 Form"} id="w9-form" />

        <Grid container className={classes.buttonsBlock}>
          <Grid item xs={6}>
            <BackButton
              icon={
                <ArrowBackIosIcon style={{ marginLeft: 18, fontSize: 15 }} />
              }
              text="Prev"
            />
          </Grid>
          <Grid item xs={6}>
            <Button
              classes={{
                root: classes.button,
              }}
              variant="contained"
              color={"primary"}
              onClick={() => console.log("click")}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </LoginWrapper>
  );
};
