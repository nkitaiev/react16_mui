import React from "react";
import {
  Box,
  Button,
  Typography,
  InputAdornment,
  TextField,
  Link,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { ArrowBack, PhoneIphone, AccountCircle } from "@material-ui/icons";
import "./login-bussiness.css";
import { LoginWrapper } from "../Wrapper/LoginWrapper";
import { makeStyles } from "@material-ui/core/styles";
import { CustomCheckbox } from "./components/CustomCheckbox";

// const customStyles = makeStyles({
//   formWrapper: {
//     maxWidth: 460,
//     display: "flex",
//     flexGrow: 1,
//     flexDirection: "column",
//     backgroundColor: "white",
//     padding: "50px 75px",
//   },
// });

const customStyles = makeStyles({
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
  selectStyles: {
    padding: "14px",
    paddingRight: "32px",
  },
  checkboxesBlock: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 10,
  },
  root: {
    color: "#0A0412",
    fontWeight: 800,
    fontSize: "16px",
    letterSpacing: "-0.29px",
  },
});

const styles = (theme) => ({
  input: {
    color: "red",
    padding: 0,
  },
});

export const LoginBusiness = () => {
  const classes = customStyles();
  const inputClasses = styles();

  // const selectClasses = useSelectStyles();
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
        <Typography classes={classes.root} variant="body1">
          Enter Business Details
        </Typography>

        <div className={classes.checkboxesBlock}>
          <CustomCheckbox title={"Restaurant"} />
          <CustomCheckbox title={"Hotel"} />
        </div>

        {/*<TextField*/}
        {/*  id="type-of-hotel"*/}
        {/*  label="Type of hotel"*/}
        {/*  variant="outlined"*/}
        {/*  style={{*/}
        {/*    paddingBottom: "16px",*/}
        {/*  }}*/}
        {/*  inputProps={{*/}
        {/*    style: { padding: "14px 18px" },*/}
        {/*  }}*/}
        {/*  // InputLabelProps={{*/}
        {/*  //   style: {*/}
        {/*  //     transform: "translate(14px, 16px) scale(1)",*/}
        {/*  //   },*/}
        {/*  // }}*/}
        {/*  InputProps={{*/}
        {/*    style: {*/}
        {/*      borderRadius: "50px",*/}
        {/*    },*/}
        {/*    className: inputClasses.input,*/}
        {/*  }}*/}
        {/*/>*/}

        <FormControl variant="outlined" style={{ paddingBottom: "16px" }}>
          <InputLabel id="demo-simple-select-outlined-label">
            Type of hotel
          </InputLabel>
          <Select
            labelId="type-of-hotel-label"
            id="type-of-hotel"
            label="Type of hotel"
            value={typeOfHotel}
            onChange={handleChange}
            classes={{ select: classes.selectStyles }}
            style={{
              borderRadius: "50px",
            }}
            InputProps={{
              style: {
                borderRadius: "50px",
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
          id="legal-company-name"
          label="Legal Company Name"
          variant="outlined"
          style={{
            paddingBottom: "16px",
          }}
          inputProps={{
            style: { padding: "14px 18px" },
          }}
          InputProps={{
            style: {
              borderRadius: "50px",
            },
            className: inputClasses.input,
          }}
        />

        <TextField
          id="dba-name"
          label="Enter DBA Name"
          variant="outlined"
          style={{
            paddingBottom: "16px",
          }}
          inputProps={{
            style: { padding: "14px 18px" },
          }}
          InputProps={{
            style: {
              borderRadius: "50px",
            },
            className: inputClasses.input,
          }}
        />

        <TextField
          id="address"
          label="Address"
          variant="outlined"
          style={{
            paddingBottom: "16px",
          }}
          inputProps={{
            style: { padding: "14px 18px" },
          }}
          InputProps={{
            style: {
              borderRadius: "50px",
            },
            className: inputClasses.input,
          }}
        />

        <TextField
          id="business-telephone"
          label="Business Telephone"
          variant="outlined"
          style={{
            paddingBottom: "16px",
          }}
          inputProps={{
            style: { padding: "14px 18px" },
          }}
          InputProps={{
            style: {
              borderRadius: "50px",
            },
            className: inputClasses.input,
          }}
        />

        <TextField
          id="business-website"
          label="Business Website"
          variant="outlined"
          style={{
            paddingBottom: "16px",
          }}
          inputProps={{
            style: { padding: "14px 18px" },
          }}
          InputProps={{
            style: {
              borderRadius: "50px",
            },
            className: inputClasses.input,
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
          Next
        </Button>
      </Box>
    </LoginWrapper>
  );
};
