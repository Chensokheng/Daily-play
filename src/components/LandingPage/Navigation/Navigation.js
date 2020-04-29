import React from 'react';
import clsx from 'clsx';
import { AppBar, Typography, Toolbar, Button } from '@material-ui/core';
import { makeStyles, fade } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    background: 'None',
  },
  title: {
    fontFamily: 'Bangers',
    fontSize: '1.5rem',
    letterSpacing: theme.spacing(0.5),
    flexGrow: 1,
  },
  btnSignIn: {
    backgroundColor: '#1CA1F2',
    '&:hover': {
      background: fade('#1CA1F2', 0.5),
    },
  },
  button: {
    fontSize: '1rem',
    letterSpacing: theme.spacing(0.5),
    color: '#fff',
    marginLeft: theme.spacing(2),
  },
}));

export default function Navigation() {
  const classes = useStyles();
  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <Typography variant="body2" className={classes.title}>
          Daily Play
        </Typography>
        <Button
          variant="contained"
          size="large"
          className={clsx({
            [classes.btnSignIn]: true,
            [classes.button]: true,
          })}
        >
          Sign In
        </Button>
        <Button variant="outline" size="large" className={classes.button}>
          Sign Up
        </Button>
        <Button variant="outline" size="large" className={classes.button}>
          Guest
        </Button>
      </Toolbar>
    </AppBar>
  );
}
