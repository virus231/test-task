import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Paper} from "@material-ui/core";
import Image from './assets/img/bg-image.png'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: 0,
    flexGrow: 1,
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover',
    backgroundPositionY: 'bottom',
    height: '100vh',
    backgroundRepeat: 'no-repeat',
    '& .MuiGrid-container': {
      height: '100vh'
    }
  },
  paper: {
    padding: theme.spacing(2),
    marginRight: theme.spacing(10),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();

  return (
      <div className={classes.root}>
        <Grid
        container
        direction="row"
        justify="flex-end"
        alignItems="center"
        height="100vh"
          >
            <Grid item xs={12} sm={6} lg={4}>
                <Paper spacing={10} className={classes.paper}>xs=12 sm=6</Paper>
            </Grid>

        </Grid>
      </div>
  );
}

export default App;
