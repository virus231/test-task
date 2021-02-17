import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Paper} from "@material-ui/core";
import Image from './assets/img/bg-image.png'
import ImageForPhone from './assets/img/bg-phone.svg'
import ImageForTablet from './assets/img/bg-tablet.png'
import {LogIn} from "./components/LogIn";

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
    [theme.breakpoints.up('xs')]: {
      backgroundImage: `url(${ImageForPhone})`,
    },
    [theme.breakpoints.up('md')]: {
      backgroundPositionX: 'center',
      backgroundImage: `url(${ImageForTablet})`,
    },
    [theme.breakpoints.up('lg')]: {
      backgroundPositionX: 'center',
      backgroundImage: `url(${Image})`,
    },

    '& .MuiGrid-container': {
      height: '100vh'
    }
  },
  paper: {
    padding: theme.spacing(2),
    marginRight: theme.spacing(10),
    textAlign: 'center',
    boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.25)',
    borderRadius: '10px',
    color: theme.palette.text.secondary,
    [theme.breakpoints.up('xs')]: {
      margin: theme.spacing(4),
    },
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(13),
    },
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
            <Grid item xs={12} sm={12} md={9} lg={5}>
                <Paper spacing={10} className={classes.paper}>
                  <LogIn/>
                </Paper>
            </Grid>

        </Grid>
      </div>
  );
}

export default App;
