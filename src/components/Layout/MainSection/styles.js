import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#fafafa',
    padding: theme.spacing(8, 0, 6)
  },
  innerContainer: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative'
  },
}));

