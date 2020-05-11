import React, { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import firebase from '../../utils/firebase';
import Loading from '../LoadingScreen/Loading';

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
    justifyContent: 'space-between',
  },
  score: {
    fontSize: '2rem',
    color: '#fff',
  },
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90vh',
    flexDirection: 'column',
  },
  loading: {
    fontSize: '2rem',
    fontFamily: 'Quicksand',
    color: '#fff',
  },
}));
export default function LeaderBoard() {
  const classes = useStyles();
  const [playerScore, setPlayerScore] = useState(null);
  const [loading, setLoading] = useState(true);

  const getScore = () => {
    const scoreRef = firebase.database().ref('Score');

    scoreRef.on('value', (snapshot) => {
      const playerScores = snapshot.val();
      setPlayerScore(playerScores);
      setLoading(false);
    });
  };
  useEffect(() => {
    getScore();
  }, []);
  return (
    <>
      {loading || !playerScore ? (
        <div className={classes.loadingContainer}>
          <Typography className={classes.loading}>Loading</Typography>
          <Loading />
        </div>
      ) : (
        <div className={classes.leaderBoardContainer}>
          <Typography className={classes.leaderBoardTitle}>
            Leader Board
          </Typography>

          {Object.keys(playerScore)
            .sort((a, b) => playerScore[b].score - playerScore[a].score)
            .map((value, index) => (
              <div className={classes.scoreContainer} key={index}>
                <Typography className={classes.score}>{index + 1}.</Typography>
                <Typography className={classes.score}>{value}</Typography>
                <Typography className={classes.score}>
                  {playerScore[value].score}
                </Typography>
              </div>
            ))}
        </div>
      )}
    </>
  );
}
