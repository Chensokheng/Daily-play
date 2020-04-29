import React from 'react';
import Navigation from './Navigation/Navigation';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    background: '#000',
  },
}));

export default function LandingPage() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Navigation />
    </div>
  );
}
