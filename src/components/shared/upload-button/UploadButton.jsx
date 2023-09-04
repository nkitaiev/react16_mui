import React from "react";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ReactComponent as Upload } from "../../../assets/upload_icon.svg";

const customStyles = makeStyles((them) => ({
  input: {
    display: "none",
  },
  button: {
    width: "100%",
    backgroundColor: "rgba(57, 8, 121, .04)",
    color: them.palette.primary.main,
    border: "1px dashed",
    borderRadius: "50px",
    padding: "11px 0",
    fontSize: 12,
    fontWeight: 500,
    textTransform: "none",
    "&:hover": {
      backgroundColor: "rgba(57, 8, 121, .04)",
    },
  },
  backBtnText: {
    color: "black",
  },
  main: {
    marginBottom: 10,
  },
}));

const UploadButton = ({ uploadLabel, id }) => {
  const classes = customStyles();
  return (
    <div className={classes.main}>
      <Typography
        style={{
          fontWeight: 500,
          fontSize: 12,
          letterSpacing: "-0.21px",
          color: "#0A0412",
        }}
        classes={{
          root: classes.backBtnText,
        }}
        variant="body1"
        color={"primary"}
      >
        {uploadLabel}
      </Typography>
      <input
        accept="image/*"
        className={classes.input}
        id={id}
        multiple
        type="file"
      />
      <label htmlFor={id}>
        <Button
          variant="contained"
          color="primary"
          component="span"
          classes={{ root: classes.button }}
          disableElevation={true}
        >
          <Upload />
          <span>Upload Document</span>
        </Button>
      </label>
    </div>
  );
};

export default UploadButton;
