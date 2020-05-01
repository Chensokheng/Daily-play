import React from 'react';
import Navigation from '../Navigation/Navigation';
import { makeStyles } from '@material-ui/core/styles';
import Intro from './Intro';
import OurGames from './OurGames';
import AboutUs from './AboutUs';
const useStyle = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    background: '#111',
  },
  introduction: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    color: '#fff',
    fontSize: '4.5rem',
    fontFamily: 'Quicksand',
    fontWeight: 700,
  },
}));

export default function LandingPage() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Navigation />
      <Intro />
      <OurGames />
      <AboutUs />
    </div>
  );
}
