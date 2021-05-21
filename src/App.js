import './App.css';
import { Typography, AppBar, Card, Button, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core'
import TopBar from './components/TopBar/TopBar';
import Cards from './components/Cards/Cards'
import { useStyles } from './styles';


function App() {

  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <TopBar/>   {/* TopBar Component, the bar at the top  */}
      <main>
        <div className={classes.container} >
          <Container maxWidth="sm" >
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom >
              Welcome to SeekAnime
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph >
              Hello everyone, this is an anime search website and I'm trying to make this sentence as long as possible so we can see how does it look like on the screen
            </Typography>
            <div className={classes.button} >
              <Grid container spacing={2} justify="center" >
                <Grid item >
                  <Button variant="contained" color="primary" >
                    See the best anime
                  </Button>
                </Grid>
                <Grid item >
                  <Button variant="outlined" color="primary" >
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Cards /> {/* Cards Component, all the cards mapped */}
      </main>
    </>
  )
}

export default App;
