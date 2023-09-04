import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    marginBottom: "22px",
  },
  border: {
    borderBottom: "2px solid lightgray",
    width: "100%",
  },
  content: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    fontWeight: 600,
    fontSize: 16,
    letterSpacing: "-0.25px",
    whiteSpace: "nowrap",
  },
}));
export const DividerWithText = ({
  children,
  position = "left",
  textStyles,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {position === "center" && <div className={classes.border} />}
      <Typography
        classes={{ root: classes.content }}
        style={textStyles}
        variant="body1"
      >
        {children}
      </Typography>
      <div className={classes.border} />
    </div>
  );
};
