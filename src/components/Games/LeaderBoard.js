import React, { useEffect } from 'react';
import { Typography } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import firebase from '../../utils/firebase';

const useStyles = makeStyles((theme) => ({
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
export default function LeaderBoard() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.leaderBoardContainer}>
        <Typography className={classes.leaderBoardTitle}>
          Leader Board
        </Typography>
        <div className={classes.scoreContainer}>
          <Typography className={classes.score}>1.</Typography>
          <Typography className={classes.score}>Panha</Typography>
          <Typography className={classes.score}>0</Typography>
        </div>
      </div>
    </div>
  );
}
