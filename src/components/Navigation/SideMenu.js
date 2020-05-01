import React from 'react';
import clsx from 'clsx';
import { Drawer, Button, IconButton } from '@material-ui/core';
import { makeStyles, fade } from '@material-ui/core/styles';
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#000',
    width: '300px',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  btnSignIn: {
    backgroundColor: '#1CA1F2',
    '&:hover': {
      background: fade('#1CA1F2', 0.5),
    },
  },
  button: {
    fontSize: '1rem',
    letterSpacing: theme.spacing(0.5),
    color: '#fff',
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(5),
  },
  clearIcon: {
    color: '#fff',
  },
}));
export default function SideMenu({
  openDrawer,
  setOpenDrawer,
  authorized,
  handleLogout,
}) {
  const classes = useStyles();
  return (
    <Drawer open={openDrawer} onClose={() => setOpenDrawer(!openDrawer)}>
      <div className={classes.root}>
        <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
          <ClearIcon className={classes.clearIcon} />
        </IconButton>
        {!authorized ? (
          <>
            <Button
              variant="contained"
              size="large"
              className={clsx({
                [classes.btnSignIn]: true,
                [classes.button]: true,
              })}
            >
              Sign In
            </Button>
            <Button variant="outlined" size="large" className={classes.button}>
              Sign Up
            </Button>
            <Button variant="outlined" size="large" className={classes.button}>
              Guest
            </Button>
          </>
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
    </Drawer>
  );
}
