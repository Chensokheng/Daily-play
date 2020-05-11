import React from 'react';
import Navigation from '../Navigation';
import { Grid } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import LeaderBoard from './LeaderBoard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: '#011',
    minHeight: '100vh',
  },
  container: {
    paddingTop: '90px',
  },
  leaderBoardContainer: {
    textAlign: 'center',
    height: '90vh',
    borderLeft: '1px solid #3c3def',
  },
  leaderBoardTitle: {
    textTransform: 'uppercase',
    paddingTop: theme.spacing(5),
    fontSize: '2rem',
    color: '#fff',
    fontFamily: 'Quicksand',
  },
  scoreContainer: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  score: {
    fontSize: '2rem',
    color: '#fff',
  },
}));

export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navigation />
      <div>
        <Grid className={classes.container} container>
          <Grid item xs={12} sm={6} md={8} lg={8}>
            {children}
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <LeaderBoard />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
