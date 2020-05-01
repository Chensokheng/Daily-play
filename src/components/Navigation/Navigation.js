import React, { useState, useContext } from 'react';
import clsx from 'clsx';
import { AppBar, Typography, Toolbar, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SideMenu from './SideMenu';
import { auth, provider } from '../../utils/firebase';
import ThemeApi from '../../utils/ThemeApi';
import useStyles from './styles';

export default function Navigation() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  const { setUser, setAuthroize, authorized } = useContext(ThemeApi);

  const handleUserRegister = () => {
    auth.signInWithPopup(provider).then((result) => {
      const user = result.user;
      const userInfo = {
        username: user.displayName,
        email: user.email,
        photoLink: user.photoURL,
      };
      setUser(userInfo);
      setAuthroize(true);
    });
  };

  const handleLogout = async () => {
    await auth.signOut();
    setAuthroize(false);
    setUser(null);
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
                  onClick={handleUserRegister}
                >
                  Sign In
                </Button>
                <Button variant="outlined" className={classes.button}>
                  Sign Up
                </Button>
                <Button variant="outlined" className={classes.button}>
                  Guest
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
      />
    </div>
  );
}
