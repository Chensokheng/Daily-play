import React from 'react';
import { Button, Paper, Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SignIn from './SignIn';

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
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div className={classes.root}>
      <Paper className={classes.btnContainer}>
        <Button className={classes.btn} onClick={handleOpen}>
          Sign In
        </Button>
        <Button className={classes.btn}>Sign Up</Button>
        <Button className={classes.btn}>Guest Mode</Button>
      </Paper>
      <SignIn open={open} setOpen={setOpen} />
    </div>
  );
}
