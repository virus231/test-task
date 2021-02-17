import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        '& h1': {
            textTransform: 'uppercase',
            color: 'black',
            fontWeight: '700'
        },
        '& .form-wrapper': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '90px',

            '& button': {
                background: 'linear-gradient(90deg, #FF9146 0%, #FF351B 100%);',
                border: 0,
                borderRadius: 5,
                // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                height: 48,
                padding: '0 60px',
                textTransform: 'uppercase',
                fontWeight: '500',
                fontSize: '18px',
                color: '#FEFEFE',
                marginTop: '110px',
                marginBottom: '20px'
            },
            '& .form-links': {
                '& a:first-child': {
                    textDecorationLine: 'underline',
                    color: '#B2B7BB'
                },
                '& div': {
                    marginTop: '10px',
                    '& a': {
                        textDecorationLine: 'blink !important',
                        margin: '0 5px'
                    }
                }
            }
        }
    }


}));

export const LogIn = () => {
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();


    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <h1>LogIn</h1>
                <div className="form-wrapper">
                    <TextField
                        id="outlined-email-input"
                        label="Email address"
                        type="text"
                        autoComplete="current-email"
                        variant="outlined"
                    />
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                        labelWidth={70}
                    />
                    <Button>
                        Log In
                    </Button>
                    <div className="form-links">
                        <Link href="#" onClick={preventDefault}>
                            Forgot your password?
                        </Link>
                        <div>
                            <Link href="#" onClick={preventDefault}>
                                Don’t have an account yet?
                            </Link>
                            <Link href="#" onClick={preventDefault}>
                                Register
                            </Link>
                        </div>
                    </div>


                </div>
            </form>
        </div>
    )
}