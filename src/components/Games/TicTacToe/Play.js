import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Clear from '@material-ui/icons/Clear';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import Typography from '@material-ui/core/Typography';
import firebase from '../../../utils/firebase';
import ThemeApi from '../../../utils/ThemeApi';
import Loading from '../../LoadingScreen/Loading';
import Result from './Result';
import { Grow } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    verticalAlign: 'middle',
    minHeight: '80vh',
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, auto)',
    width: '306px',
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100px',
    height: '100px',
    // border: '1px solid #fff',
    background: 'transparent',
  },
  playerTurn: {
    marginBottom: theme.spacing(2),
    color: '#fff',
    fontFamily: 'Quicksand',
    fontSize: '2rem',
  },
  symbol: {
    fontSize: '5rem',
    color: '#fff',
  },
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    height: '80vh',
  },
  loading: {
    fontSize: '2rem',
    color: '#fff',
    fontFamily: 'Quicksand',
    letterSpacing: theme.spacing(0.5),
  },
}));

export default function Play() {
  const classes = useStyles();
  const { user } = useContext(ThemeApi);
  const [match, setMatch] = useState(null);
  const [loading, setLoading] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [message, setMessage] = useState('');
  const history = useHistory();

  const handleMove = (index) => {
    const newMatch = match;
    newMatch.board[index] = newMatch.move;
    newMatch.playerTurn = match.opponent;
    setMatch(newMatch);
    const matchRef = firebase.database().ref(`Matches/${user.uid}`);
    const opponentRef = firebase.database().ref(`Matches/${match.opponent}`);
    opponentRef.update({
      board: newMatch.board,
      playerTurn: newMatch.playerTurn,
    });
    matchRef.update(newMatch);
  };
  const whoWin = (board, move) => {
    let check = [
      // Horizontal
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      // Vertical
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      // Diagonal
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let elem of check) {
      if (
        board[elem[0]] === board[elem[1]] &&
        board[elem[1]] === board[elem[2]]
      ) {
        const messgae = move === board[elem[0]] ? '🎉 You Win' : '😣 You Lose';
        if (board[elem[0]] === move) {
          if (user.displayName) {
            const scoreRef = firebase.database().ref('Score');
            scoreRef.push({
              name: user.displayName,
            });
          }
        } else {
        }
        setMessage(messgae);
        setDisabled(true);
        return;
      }
    }

    const isDraw = board.filter((value) => value !== 'x' && value !== 'o');
    if (isDraw.length === 0) {
      setMessage('You are draw');
      setDisabled(true);
    }
  };
  const getBoard = () => {
    const matchRef = firebase.database().ref(`Matches/${user.uid}`);
    if (matchRef) {
      matchRef.on('value', (snapshot) => {
        const match = snapshot.val();
        if (!match || match.length === 0) {
          history.push('/home');
        } else {
          setMatch(match);
          setLoading(false);
          whoWin(match.board, match.move);
        }
      });
    }
  };

  useEffect(() => {
    getBoard();
  }, []);
  return (
    <div>
      {loading ? (
        <div className={classes.loadingContainer}>
          <Typography className={classes.loading}>Loading</Typography>
          <Loading color="#fff" height="30px" width="30px" />
        </div>
      ) : (
        <div className={classes.root}>
          <Grow in={match.playerTurn === user.uid}>
            <Typography className={classes.playerTurn}>Your Turn</Typography>
          </Grow>
          <Grow in={match.playerTurn !== user.uid}>
            <Typography className={classes.playerTurn}>
              Opponent Turn
            </Typography>
          </Grow>

          <div className={classes.cardContainer}>
            {match.board.map((value, index) => (
              <button
                key={index}
                className={classes.card}
                onClick={() => handleMove(index)}
                disabled={
                  match.playerTurn !== user.uid ||
                  value === 'x' ||
                  value === 'o' ||
                  disabled
                }
              >
                {value === 'x' ? <Clear className={classes.symbol} /> : ''}
                {value === 'o' ? (
                  <NotInterestedIcon className={classes.symbol} />
                ) : (
                  ''
                )}
              </button>
            ))}
          </div>
          <Result
            open={disabled}
            message={message}
            opponent={match.opponent}
            myID={user.uid}
          />
        </div>
      )}
    </div>
  );
}
