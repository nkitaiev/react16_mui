import React, { useState } from "react";
import { FormControlLabel, Checkbox, Typography } from "@material-ui/core";
import ApartmentIcon from "@material-ui/icons/Apartment";
import "./checkbox.css";
import { makeStyles } from "@material-ui/core/styles";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import { useTheme } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  label: {
    fontWeight: 600,
    fontSize: "14px",
    letterSpacing: "-0.25px",
  },
  checkboxArea: {
    marginLeft: 0,
    border: "1px solid",
    padding: "14px",
    borderRadius: "14px",
    display: "flex",
    justifyContent: "space-between",
  },
  checkboxAreaChecked: {
    borderColor: "green",
  },
  root: {
    padding: 0,
    alignSelf: "flex-start",
    margin: 0,
  },
  labelPlacementStart: {
    marginRight: 0,
  },
}));

export const CustomCheckbox = ({ title, label }) => {
  const classes = styles();
  const [state, setState] = useState(false);
  const theme = useTheme();
  const handleChange = (event, val) => {
    if (val) {
    }
    event.stopPropagation();
    console.log(event.target.value);
    setState(!state);
  };

  return (
    <FormControlLabel
      classes={{
        root: classes.checkboxArea,
        labelPlacementStart: classes.labelPlacementStart,
      }}
      style={{
        borderColor: state
          ? theme.palette.primary.main
          : theme.palette.inputBorders.main,
      }}
      labelPlacement="start"
      label={
        <div>
          <ApartmentIcon />
          <Typography variant="h5" className={classes.label}>
            {title}
          </Typography>
        </div>
      }
      control={
        <Checkbox
          id={label}
          checked={state}
          disableRipple
          onChange={handleChange}
          icon={<CircleUnchecked />}
          checkedIcon={<CircleCheckedFilled style={{ color: "black" }} />}
          classes={{
            root: classes.root,
          }}
          value={label}
          key={"id"}
        />
      }
    />
  );
};
