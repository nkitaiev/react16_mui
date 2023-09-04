import React from "react";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const customStyles = makeStyles({
  backBtn: {
    maxWidth: "36px",
    width: "100%",
    minWidth: "20px",
    height: "36px",
    borderRadius: "100%",
  },
  backBtnText: {
    fontWeight: 600,
    fontSize: "16px",
    letterSpacing: "-0.31px",
    marginLeft: "5px",
  },
});

const BackButton = ({ icon, text }) => {
  const classes = customStyles();
  return (
    <div className="back-button">
      <Button
        className={classes.backBtn}
        variant="contained"
        startIcon={icon}
      />
      <Typography
        style={{
          fontWeight: 600,
          fontSize: "16px",
          letterSpacing: "-0.31px",
          marginLeft: "5px",
        }}
        classes={{
          root: classes.backBtnText,
        }}
        variant="body1"
        color={"primary"}
      >
        {text}
      </Typography>
    </div>
  );
};

export default BackButton;
