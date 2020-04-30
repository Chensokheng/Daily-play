import React from 'react';
import { Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
  root: {
    minHeight: '50vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    fontSize: '3rem',
    color: '#fff',
    letterSpacing: theme.spacing(0.5),
    fontFamily: 'Quicksand',
    fontWeight: 500,
    marginBottom: theme.spacing(4),
  },
  content: {
    width: '50%',
    margin: '0 auto',
    fontSize: '1.7rem',
    color: '#fff',
    letterSpacing: theme.spacing(0.5),
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  openSource: {
    color: '#1CA1F2',
  },
}));
export default function AboutUS() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Typography className={classes.title}>About Us</Typography>
      <Typography className={classes.content}>
        Daily play is a <span className={classes.openSource}>open-source</span>{' '}
        website game.That you can submit your games to our github{' '}
        <Link href="https://github.com/Chensokheng/Daily-play" target="_blank">
          repository
        </Link>
      </Typography>
    </div>
  );
}
