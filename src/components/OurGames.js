import React, { useContext } from 'react';
import { Typography, Button } from '@material-ui/core';
import { makeStyles, fade } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import ThemeApi from '../utils/ThemeApi';
import { findOpponent } from '../utils/database';
const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    padding: theme.spacing(2),
  },
  title: {
    fontSize: '3rem',
    color: '#fff',
    letterSpacing: theme.spacing(0.5),
    fontFamily: 'Quicksand',
    fontWeight: 500,
    marginBottom: theme.spacing(4),
  },
  gameContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    margin: '0 auto',

    [theme.breakpoints.down('sm')]: {
      width: '100%',
      display: 'block',
    },
  },
  gameTitle: {
    fontFamily: 'Bangers',
    letterSpacing: theme.spacing(0.5),
    fontSize: '1.3rem',
    color: '#fff',
    marginBottom: theme.spacing(2),
  },
  games: {
    width: '300px',
    height: '300px',
    background: '#ddd',
    [theme.breakpoints.down('sm')]: {
      width: '50%',
      margin: '0 auto',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  btnPlay: {
    fontFamily: 'Quicksand',
    marginBottom: theme.spacing(4),
    textAlign: 'center',
    marginTop: theme.spacing(1),
    background: '#1CA1F2',
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    color: '#fff',
    fontSize: '1.2rem',
    letterSpacing: theme.spacing(0.5),
    '&:hover': {
      background: fade('#1CA1F2', 0.5),
    },
  },
  button: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(4),
    fontSize: '1.2rem',
    color: '#fff',
    fontFamily: 'Quicksand',
    letterSpacing: theme.spacing(0.5),
  },
}));

export default function OurGames() {
  const classes = useStyles();
  const history = useHistory();
  const { authorized, user } = useContext(ThemeApi);
  const handlePlay = async (game) => {
    console.log(authorized);
    if (authorized) {
      console.log('i am running');
      await findOpponent(user.uid, history);
      history.push(`/${game}/find`);
    } else {
      history.push('/auth');
    }
  };
  return (
    <div className={classes.root} id="our_game">
      <Typography className={classes.title}>Our Games</Typography>
      <div className={classes.gameContainer}>
        <div>
          <Typography className={classes.gameTitle}>Memory</Typography>
          <div
            className={classes.games}
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + '/images/memory.jpg'
              })`,
              backgroundSize: 'cover',
            }}
          ></div>
          <Button className={classes.button}>Coming Soon</Button>
        </div>
        <div>
          <Typography className={classes.gameTitle}>Tic Tac Toe</Typography>
          <div
            className={classes.games}
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + '/images/tictactoe.png'
              })`,
              backgroundSize: 'cover',
            }}
          ></div>
          <Button
            className={classes.btnPlay}
            onClick={() => handlePlay('tictactoe')}
          >
            Play
          </Button>
        </div>
        <div>
          <Typography className={classes.gameTitle}>Coming Soon</Typography>
          <div className={classes.games}></div>
          <Button className={classes.button}>Coming Soon</Button>
        </div>
      </div>
    </div>
  );
}
