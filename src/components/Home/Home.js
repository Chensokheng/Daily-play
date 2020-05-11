import React from 'react';
import Navigation from '../Navigation';
import { makeStyles } from '@material-ui/core/styles';
import OurGames from '../OurGames';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    background: '#000',
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navigation />
      <OurGames />
    </div>
  );
}
