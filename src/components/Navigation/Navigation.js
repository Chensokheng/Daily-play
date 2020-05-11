import React, { useState, useContext } from 'react';
import clsx from 'clsx';
import { AppBar, Typography, Toolbar, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SideMenu from './SideMenu';
import firebase from '../../utils/firebase';
import ThemeApi from '../../utils/ThemeApi';
import useStyles from './styles';
import SignIn from '../Auth/SignIn';
import SignUp from '../Auth/SignUp';

export default function Navigation() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  const { setUser, setAuthroize, authorized } = useContext(ThemeApi);
  const [signInOpen, setSignInOpen] = React.useState(false);
  const [signUpOpen, setSignUpOpen] = React.useState(false);

  const handleLogout = async () => {
    await firebase.auth().signOut();
    setAuthroize(false);
    setUser(null);
  };
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
    <div>
      <AppBar className={classes.root} elevation={0}>
        <Toolbar>
          <Typography variant="body2" className={classes.title}>
            Daily Play
          </Typography>
          <div className={classes.optionContainer}>
            {!authorized ? (
              <div>
                <Button
                  variant="contained"
                  size="large"
                  className={clsx({
                    [classes.btnSignIn]: true,
                    [classes.button]: true,
                  })}
                  onClick={handleSignInOpen}
                >
                  Sign In
                </Button>
                <Button
                  variant="outlined"
                  className={classes.button}
                  onClick={handleSignUpOpen}
                >
                  Sign Up
                </Button>
                <Button
                  variant="outlined"
                  className={classes.button}
                  onClick={handleGuestMode}
                >
                  Guest Mode
                </Button>
              </div>
            ) : (
              <Button
                variant="contained"
                size="large"
                className={clsx({
                  [classes.btnSignIn]: true,
                  [classes.button]: true,
                })}
                onClick={handleLogout}
              >
                Logout
              </Button>
            )}
          </div>
          <MenuIcon
            onClick={() => setOpenDrawer(!openDrawer)}
            className={classes.menuIcon}
            color="inherit"
          />
        </Toolbar>
      </AppBar>
      <SideMenu
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
        authorized={authorized}
        handleLogout={handleLogout}
        setSignInOpen={setSignInOpen}
        setSignUpOpen={setSignUpOpen}
        handleGuestMode={handleGuestMode}
      />

      <SignIn open={signInOpen} setOpen={setSignInOpen} />
      <SignUp open={signUpOpen} setOpen={setSignUpOpen} />
    </div>
  );
}
