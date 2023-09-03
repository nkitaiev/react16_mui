import React from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import "./login-bussiness.css";
import { LoginWrapper } from "../Wrapper/LoginWrapper";
import { makeStyles } from "@material-ui/core/styles";
import { CustomCheckbox } from "./components/CustomCheckbox";
import { DividerWithText } from "../CustomDivider/DividerWithText";

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
  selectClasses: {
    paddingBottom: "16px",
    padding: "14px",
    paddingRight: "32px",
  },
  selectRootClasses: {
    "& .MuiOutlinedInput-notchedOutline": {
      borderRadius: "50px",
    },
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
  checkboxesBlock: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 10,
    paddingBottom: "16px",
  },
  button: {
    borderRadius: "50px",
    padding: "11px 0",
    fontSize: "14px",
    fontWeight: 800,
    textTransform: "none",
    marginTop: "32px",
  },
});

export const LoginBusiness = () => {
  const classes = customStyles();

  const [typeOfHotel, setTypeOfHotel] = React.useState("");

  const handleChange = (event) => {
    setTypeOfHotel(event.target.value);
  };
  return (
    <LoginWrapper>
      <Box className={classes.formWrapper}>
        <div className="back-button">
          <Button
            className={classes.backBtn}
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
          <span>Sign up as a</span>
          <span> Business</span>
        </div>
        <DividerWithText position={"left"}>
          Enter Business Details
        </DividerWithText>

        <div className={classes.checkboxesBlock}>
          <CustomCheckbox title={"Restaurant"} label="restaurant" />
          <CustomCheckbox title={"Hotel"} label="hotel" />
        </div>

        <FormControl
          variant="outlined"
          style={{ paddingBottom: "16px", borderRadius: "50px" }}
          classes={{ root: classes.selectRootClasses }}
        >
          <InputLabel
            id="demo-simple-select-outlined-label"
            classes={{ root: classes.inputLabelClasses }}
          >
            Type of hotel
          </InputLabel>
          <Select
            labelId="type-of-hotel-label"
            id="type-of-hotel"
            label="Type of hotel"
            value={typeOfHotel}
            onChange={handleChange}
            classes={{
              select: classes.selectClasses,
            }}
            inputProps={{
              style: {
                padding: "14px",
                paddingRight: "32px",
              },
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <TextField
          classes={{
            root: classes.inputClasses,
          }}
          InputLabelProps={{
            className: classes.inputLabelClasses,
          }}
          id="legal-company-name"
          label="Legal Company Name"
          variant="outlined"
        />

        <TextField
          classes={{
            root: classes.inputClasses,
          }}
          InputLabelProps={{
            className: classes.inputLabelClasses,
          }}
          id="dba-name"
          label="Enter DBA Name"
          variant="outlined"
        />

        <TextField
          classes={{
            root: classes.inputClasses,
          }}
          InputLabelProps={{
            className: classes.inputLabelClasses,
          }}
          id="address"
          label="Address"
          variant="outlined"
        />

        <TextField
          classes={{
            root: classes.inputClasses,
          }}
          InputLabelProps={{
            className: classes.inputLabelClasses,
          }}
          id="business-telephone"
          label="Business Telephone"
          variant="outlined"
        />

        <TextField
          classes={{
            root: classes.inputClasses,
          }}
          InputLabelProps={{
            className: classes.inputLabelClasses,
          }}
          id="business-website"
          label="Business Website"
          variant="outlined"
        />

        <Button
          classes={{
            root: classes.button,
          }}
          variant="contained"
          color={"primary"}
          onClick={() => console.log("click")}
        >
          Next
        </Button>
      </Box>
    </LoginWrapper>
  );
};
