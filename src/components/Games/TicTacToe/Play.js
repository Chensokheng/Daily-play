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
  const [open, setOpen] = useState(false);
  const history = useHistory();

  const handleMove = (index) => {
    const newMatch = match;
    newMatch.board[index] = newMatch.move;
    newMatch.playerTurn = match.opponent;
    setMatch(newMatch);
    const matchRef = firebase.database().ref(`Matches/${user.uid}`);
    const opponentRef = firebase.database().ref(`Matches/${match.opponent}`);
    opponentRef.update({ board: newMatch.board, playerTurn: newMatch.playerTurn });
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
      if (board[elem[0]] === board[elem[1]] && board[elem[1]] === board[elem[2]]) {
        const messgae = move === board[elem[0]] ? '🎉 You Win' : '😣 You Lose';
        setMessage(messgae);
        setOpen(true);
        setDisabled(true);
      }
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
          whoWin(match.board, match.move, match.opponent);
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
          <h1 className={classes.playerTurn}>{match.playerTurn === user.uid ? 'Your Turn' : 'Opponent Turn'}</h1>
          <div className={classes.cardContainer}>
            {match.board.map((value, index) => (
              <button key={index} className={classes.card} onClick={() => handleMove(index)} disabled={match.playerTurn !== user.uid || value === 'x' || value === 'o' || disabled}>
                {value === 'x' ? <Clear className={classes.symbol} /> : ''}
                {value === 'o' ? <NotInterestedIcon className={classes.symbol} /> : ''}
              </button>
            ))}
          </div>
          <Result open={open} message={message} opponent={match.opponent} myID={user.uid} />
        </div>
      )}
    </div>
  );
}
