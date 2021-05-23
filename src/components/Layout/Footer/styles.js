import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles( (theme) => ({
  footer: {
    height: '50px',
    backgroundColor: '#fafafa',
    padding: '50px 0',

  },
  socialList: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    margin: '2em 0 0',
    padding: '0',
  },

  socialList__item: {
    margin: '0 0.5em',
  },
  socialList__item__link: {
    color: '#3f51b5',
  },
}));

