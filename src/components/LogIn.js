import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        '& h1': {
            textTransform: 'uppercase',
            color: 'black',
            fontFamily: 'Roboto, sans-serif'
        }
    }


}));

export const LogIn = () => {
    const classes = useStyles();

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <h1>LogIn</h1>
                <div>
                    <TextField
                        id="outlined-password-input"
                        label="Email address"
                        type="text"
                        autoComplete="current-email"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                    />
                </div>
            </form>
        </div>
    )
}