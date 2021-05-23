import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container__outer: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:  '#fafafa',
    position: 'relative'
  },
  container__inner: {
    width: '90%',
    height: '90%',
    borderRadius: '15px',
    position: 'relative',
    display: 'flex',
    justifyItems: 'center',
    boxShadow:  '11px 11px 43px #a5a5a5, -11px -11px 43px #ffffff',
    backgroundColor: '#8391e2',
    [theme.breakpoints.down('xs')]: {
      height: '70%'
    }
  },
  left__section: {

  },
  image__section: {
    boxSizing: 'border-box',
    border: '5px solid #2a3990',
    borderRadius: '15px',
    height: '80%',
    transform: 'translate(10%, 10%)',
    [theme.breakpoints.down('sm')]: {
      height: '70%'
    },
    [theme.breakpoints.down('xs')]: {
      height: '50%',
      transform: 'translate(10%,30%)'
    }
  },
  right__section: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    transform: 'translate(10%, 10%)',
    [theme.breakpoints.down('xs')]: {
      transform: 'translateX(-10%)'
    }
  },
  title__section: {
    fontSize: '3rem',
    fontFamily: 'Signika',
    fontWeight: '600',
    color: '#2b2626de',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.5rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.8rem',
    }
  },
  score__section: {
    fontSize: '2rem',
    marginTop: '20px',
    fontFamily: 'Signika',
    color: '#2b2626de',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.8rem',
    }
  },
  synopsis__section: {
    fontSize: '1.3rem',
    fontWeight: '600',
    lineHeight: '30px',
    maxWidth: '70%',
    marginTop: '20px',
    fontFamily: "'KoHo', sans-serif",
    color: '#2b2626de',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.6rem',
    }
  },
  goBack: {
    fontFamily: 'Signika',
    fontSize: '2rem',
    position: 'relative',
    bottom: '-10%',
    textDecoration: 'none',
    borderRadius: '10px',
    backgroundColor: '#4b5fd0',
    padding: '5px 10px',
    color: '#2b2626de',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.8rem',
    }
  }
}));