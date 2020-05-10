import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import firebase from '../../../utils/firebase';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width: '300px',
    textAlign: 'center',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  btn: {
    marginTop: theme.spacing(2),
    background: '#1CA1F2',
    color: '#fff',
  },
}));

export default function Result({ open, message, opponent, myID }) {
  const classes = useStyles();
  const history = useHistory();
  const handleBackHome = () => {
    const ref = firebase.database().ref('Matches');
    ref.child(myID).remove();
    ref.child(opponent).remove();
    history.push('/home');
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">{message}</h2>
            <Button className={classes.btn} onClick={handleBackHome}>
              Return Home
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
