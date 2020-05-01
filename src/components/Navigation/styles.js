import { makeStyles, fade } from '@material-ui/core/styles';

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

export default useStyles;
