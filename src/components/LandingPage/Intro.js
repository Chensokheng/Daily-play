import React from 'react';
import { Typography, Button, Fade } from '@material-ui/core';
import Grow from '@material-ui/core/Grow';

import { makeStyles, fade } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  container: {
    width: '50%',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  content: {
    color: '#fff',
    fontSize: '4.5rem',
    fontFamily: 'Quicksand',
    letterSpacing: 1,
    fontWeight: 500,
    [theme.breakpoints.down('md')]: {
      fontSize: '3rem',
    },
  },
  btnExplore: {
    marginTop: theme.spacing(10),
    background: '#1CA1F2',
    color: '#fff',
    fontSize: '1.5rem',
    letterSpacing: theme.spacing(0.5),
    '&:hover': {
      background: fade('#1CA1F2', 0.5),
    },
  },
}));
export default function Intro() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Grow
          in={true}
          style={{ transformOrigin: '0 0 0' }}
          {...(true ? { timeout: 1000 } : {})}
        >
          <Typography className={classes.content}>
            Have fun with your Friend!!!
          </Typography>
        </Grow>
      </div>
      <Fade
        in={true}
        style={{ transformOrigin: '0 0 0' }}
        {...(true ? { timeout: 2000 } : {})}
      >
        <Button className={classes.btnExplore}>Explore</Button>
      </Fade>
    </div>
  );
}
