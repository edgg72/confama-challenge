import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  logo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    padding: '0',
    margin: '0'
  },
  logoText:{
    fontFamily: 'Signika',
    fontSize: '6.5vw'
  }
}));
