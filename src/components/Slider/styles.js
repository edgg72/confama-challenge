import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  carousel: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    margin: '0 10px',
    padding: '0',
    transform: 'translateY(10%)'
  },
  carouselInner: {
    width: '100%',
    height: '100%'

  }
}));

