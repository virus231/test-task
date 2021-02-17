import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import Link from '@material-ui/core/Link';
import { useForm, Controller } from "react-hook-form";
import {FormControl} from "@material-ui/core";
import {useState} from "react";
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormHelperText from '@material-ui/core/FormHelperText';



const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(2),
            width: '25ch',
            marginLeft: 0,
            display: 'block',

            '&:nth-child(1)': {
                width: '90%'
            },

            '& .MuiOutlinedInput-input:nth-child(1)': {
                padding: '18.5px 35px',
                paddingLeft: '14px'
            }
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

            '& .btn-login': {
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
                marginBottom: '20px',

                '&--errors': {
                    background: '#B2B7BB',
                }

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
            },
            '& .error': {

            },

        },
        '& .MuiFormControl-root': {
            height: 'fit-content'
        },
        '& .MuiFormHelperText-root': {
            color: "red"
        }

    }


}));

export const LogIn = () => {
    const [values, setValues] = useState({
        password: '',
        showPassword: false,
    });
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        clearErrors("password")
    };
    const classes = useStyles();
    const [info, setInfo] = useState(false)
    const { control, handleSubmit, errors: fieldsErrors, clearErrors } = useForm();
    const preventDefault = (event) => event.preventDefault();

    const onSubmitLogin = (data) => {
        const info = {
            data: data.email,
            password: data.password
        }
        alert(JSON.stringify(info))
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const error = () => {
        if (fieldsErrors) {
            setInfo(true)
        } else {
            setInfo(false)
        }
    }

    console.log(fieldsErrors.password)

    return (
        <div className={classes.root}>
            <h1>LogIn</h1>
            <form className="form-wrapper" onSubmit={handleSubmit(onSubmitLogin)}>
                <FormControl className={classes.margin} variant="outlined">
                    <Controller
                        name="email"
                        as={
                            <div style={{height: '120px'}}>
                                <TextField
                                    onChange={() => clearErrors("email")}
                                    id="email"
                                    labelWidth={70}
                                    // onFocus={() => clearErrors("email")}
                                    // onBlur={() => clearErrors("email")}
                                    variant="outlined"
                                    label="Email address"
                                    fullWidth
                                    error={fieldsErrors.email}
                                    helperText={fieldsErrors.email ? fieldsErrors.email.message : null}
                                />
                            </div>
                        }
                        control={control}
                        defaultValue=""
                        rules={{
                            required: 'Email required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: 'Invalid email address',

                            }
                        }}
                    />
                </FormControl>
                <FormControl className={classes.margin} variant="outlined">
                    <Controller
                        name="password"
                        as={
                            <div style={{height: '120px'}}>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <OutlinedInput
                                    id="password"
                                    error={fieldsErrors.password}
                                    variant="outlined"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    fullWidth
                                    // onBlur={() => clearErrors("password")}
                                    // onFocus={() => clearErrors("password")}
                                    onChange={handleChange('password')}
                                    label="Password"
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
                                <FormHelperText id="outlined-weight-helper-text red">
                                    {fieldsErrors.password ? fieldsErrors.password.message : null}
                                </FormHelperText>
                            </div>
                        }
                        control={control}
                        defaultValue=""
                        rules={{
                            required: 'Password required',
                            minLength: 6,
                            maxLength: 20,
                            message: 'Password required'
                        }}
                    />
                </FormControl>
                <Button onClick={error} className={info ? 'btn-login btn-login--errors ' : 'btn-login '} type="submit">
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