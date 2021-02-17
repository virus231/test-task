import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { useForm, Controller } from "react-hook-form";
import {FormControl} from "@material-ui/core";
import {useState} from "react";


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(2),
            width: '25ch',
            display: 'block',
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
    const [generalLoginError, setGeneralLoginError] = useState('');
    const [status, setStatus] = useState(false)
    const { control, handleSubmit, errors: fieldsErrors } = useForm();
    const preventDefault = (event) => event.preventDefault();

    const onSubmitLogin = (data) => {
        const info = {
            data: data.email,
            password: data.password
        }
        alert(JSON.stringify(info))
    };

    const changeColor = () => {
        setStatus(!status)
    }

    return (
        <div className={classes.root}>
            <h1>LogIn</h1>
            <form className="form-wrapper" onSubmit={handleSubmit(onSubmitLogin)}>
                <FormControl className={classes.margin} variant="outlined">
                    <Controller
                        name="email"
                        as={
                            <TextField
                                id="email"
                                labelWidth={10}
                                helperText={fieldsErrors.email ? fieldsErrors.email.message : null}
                                variant="outlined"
                                label="Email address"
                                error={fieldsErrors.email}
                            />
                        }
                        control={control}
                        defaultValue=""
                        rules={{
                            required: 'Email required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: 'invalid email address'
                            }
                        }}
                    />
                </FormControl>
                <FormControl className={classes.margin} variant="outlined">
                    <Controller
                        name="password"
                        as={
                            <TextField
                                id="password"
                                type="password"
                                labelWidth={70}
                                helperText={fieldsErrors.password ? fieldsErrors.password.message : null}
                                variant="outlined"
                                label="Password"
                                error={fieldsErrors.password}
                            />
                        }
                        control={control}
                        defaultValue=""
                        rules={{
                            required: 'Password required'
                        }}
                    />
                </FormControl>
                {generalLoginError && <div>{generalLoginError}</div>}
                <Button onClick={changeColor} style={{background: status ? '#B2B7BB' : 'linear-gradient(90deg, #FF9146 0%, #FF351B 100%)'}} type="submit">
                    Login
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
            </form>

        </div>
    )
}