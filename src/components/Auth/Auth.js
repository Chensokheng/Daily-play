import React, { useContext } from 'react';
import { Button, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SignIn from './SignIn';
import SignUp from './SignUp';
import firebase from '../../utils/firebase';
import ThemeApi from '../../utils/ThemeApi';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#000',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    background: '#252526',
    width: '500px',
    height: '300px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  btn: {
    minWidth: '80%',
    display: 'block',
    color: '#fff',
    padding: theme.spacing(2),
    background: '#171819',
  },
}));
export default function Auth() {
  const classes = useStyles();
  const [signInOpen, setSignInOpen] = React.useState(false);
  const [signUpOpen, setSignUpOpen] = React.useState(false);
  const { setAuthroize, setUser } = useContext(ThemeApi);
  const handleSignInOpen = () => {
    setSignInOpen(true);
  };
  const handleSignUpOpen = () => {
    setSignUpOpen(true);
  };
  const handleGuestMode = () => {
    firebase
      .auth()
      .signInAnonymously()
      .then((result) => {
        if (result.user) {
          setAuthroize(true);
          setUser(result.user);
        }
      });
  };
  return (
    <div className={classes.root}>
      <Paper className={classes.btnContainer}>
        <Button className={classes.btn} onClick={handleSignInOpen}>
          Sign In
        </Button>
        <Button className={classes.btn} onClick={handleSignUpOpen}>
          Sign Up
        </Button>
        <Button className={classes.btn} onClick={handleGuestMode}>
          Guest Mode
        </Button>
      </Paper>
      <SignIn open={signInOpen} setOpen={setSignInOpen} />
      <SignUp open={signUpOpen} setOpen={setSignUpOpen} />
    </div>
  );
}
