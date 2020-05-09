import React from 'react';
import Navigation from '../Navigation';
import { Grid, Paper } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: '#011',
    minHeight: '100vh',
  },
  container: {
    paddingTop: '90px',
  },
}));

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navigation />
      <div>
        <Grid className={classes.container} container spacing={2}>
          <Grid item xs={12} md={8} lg={8}>
            {children}
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <h1>Leaderboard</h1>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
