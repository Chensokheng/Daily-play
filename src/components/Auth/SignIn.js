import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    height: '20vh',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  btn: {
    background: '#242526',
    color: '#fff',
  },
}));

export default function SignIn({ open, setOpen }) {
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h1>SIGN IN</h1>
            <TextField id="outlined-helperText" label="Email Address" helperText="" variant="outlined" />
            <TextField id="outlined-helperText" label="Password" helperText="" variant="outlined" type="password" />
            <Button className={classes.btn}>SIGN IN</Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
