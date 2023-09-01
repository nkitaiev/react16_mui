import React, { useState } from "react";
import { FormControlLabel, Checkbox, Typography } from "@material-ui/core";
import ApartmentIcon from "@material-ui/icons/Apartment";
import "./checkbox.css";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles({
  label: {
    fontWeight: 600,
    fontSize: "14px",
    letterSpacing: "-0.25px",
  },
});

export const CustomCheckbox = ({ title }) => {
  const classes = styles();
  const [state, setState] = useState(false);
  const handleChange = (event) => {
    setState(!state);
    // console.log(event.target.value);
  };
  // return (
  //   <FormControlLabel
  //     control={
  //       <Checkbox
  //         checked={false}
  //         onChange={handleChange}
  //         value={"id"}
  //         key={"id"}
  //       />
  //     }
  //     label={
  //       <>
  //         <ApartmentIcon />
  //         My text
  //       </>
  //     }
  //   />
  // );
  return (
    <div className="checkbox-wrapper">
      <div>
        <ApartmentIcon />
        <Typography variant="h5" className={classes.label}>
          {title}
        </Typography>
      </div>
      <Checkbox
        checked={state}
        onChange={handleChange}
        value={"id"}
        key={"id"}
      />
    </div>
  );
};
