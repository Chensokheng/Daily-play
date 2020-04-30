import React, { useState } from 'react';
import clsx from 'clsx';
import { AppBar, Typography, Toolbar, Button } from '@material-ui/core';
import { makeStyles, fade } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SideMenu from './SideMenu';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  title: {
    fontFamily: 'Bangers',
    fontSize: '1.5rem',
    letterSpacing: theme.spacing(0.5),
    flexGrow: 1,
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
    marginLeft: theme.spacing(2),
  },
  optionContainer: {
    [theme.breakpoints.down('sm')]: {
      display: 'None',
    },
  },
  menuIcon: {
    display: 'None',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
}));

export default function Navigation() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <div>
      <AppBar className={classes.root} elevation={0}>
        <Toolbar>
          <Typography variant="body2" className={classes.title}>
            Daily Play
          </Typography>
          <div className={classes.optionContainer}>
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
            <Button variant="outlined" className={classes.button}>
              Sign Up
            </Button>
            <Button variant="outlined" className={classes.button}>
              Guest
            </Button>
          </div>
          <MenuIcon
            onClick={() => setOpenDrawer(!openDrawer)}
            className={classes.menuIcon}
            color="inherit"
          />
        </Toolbar>
      </AppBar>

      <SideMenu openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
    </div>
  );
}
