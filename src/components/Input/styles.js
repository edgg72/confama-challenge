import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  searchInput: {
    margin: '15px 10px 15px 10px',
    width: '65%'
  },
  searchIcon: {
    color: '#3f51b5',
    cursor: 'pointer'
  }

});