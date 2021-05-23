import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  carousel: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '500px',
    margin: '0 10px',
    padding: '0',
    transform: 'translateY(10%)',
    position: 'relative'
  },
  carouselInner: {
    width: '100%',
    height: '100%',
    display: 'flex'
  },
  sliderCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '10px',
  },
  sliderCard__image: {
    borderRadius: '10px',
    height: '250px'
  },
  sliderCard__title: {
    fontSize: '1rem',
    textAlign: 'center',
    color: '#4c4c54'
  },
  sliderCard__score: {
    color: '#3f56bf',
    transform: 'translateY(-60%)',
  },
  sliderCard__message: {
    color: '#73738d',
    transform: 'translateY(-60%)',
    maxWidth: '150px',
    textAlign: 'center'
  },
}));

