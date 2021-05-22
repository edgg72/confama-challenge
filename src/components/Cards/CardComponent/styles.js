import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  card: {
    height: '100%',
    minWidth: '150px',
    display: 'flex',
    flexDirection: 'column',
    margin: '0',
  },
  cardMedia: {
    paddingTop: '56.25%'
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexGrow: 1
  },

});