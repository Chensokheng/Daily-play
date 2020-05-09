import React from 'react';
import { Button, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#000',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    background: 'blue',
  },
  btn: {
    display: 'block',
    color: '#fff',
    margin: theme.spacing(10),
  },
}));
export default function Auth() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.btnContainer}>
        <Button className={classes.btn}>Sign In</Button>
        <Button className={classes.btn}>Sign Up</Button>
        <Button className={classes.btn}>Guest</Button>
      </Paper>
    </div>
  );
}
