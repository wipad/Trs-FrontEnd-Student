import React from 'react'
// import PropTypes from 'prop-types'
import Grid from '@mui/material/Grid';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
      useSelector,
      useDispatch
} from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Helmet } from 'react-helmet';
// import FirebaseSignIn from '../../components/FirebaseSignIn'

const useStyles = makeStyles((theme) => ({
      root: {
            display: 'flex',
            flexWrap: 'wrap',
      },
      margin: {
            margin: 33,
      },
      withoutLabel: {
            marginTop: 3,
      },
      textField: {
            width: '30ch',
      },
}));

function Alert(props) {
      return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function RegisterView(props) {
      const classes = useStyles();

      const [values, setValues] = React.useState({
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            showPassword: false,
            showConfirmPassword: false
      });

      const [noti, setNoti] = React.useState({
            open: false,
            msg: ''
      });

      const user = useSelector(state => state.user);

      const { t } = useTranslation()
      const dispatch = useDispatch();
      const history = useHistory();

      const handleChange = (prop) => (event) => {
            setValues({ ...values, [prop]: event.target.value });
      };

      const handleClickShowPassword = () => {
            setValues({ ...values, showPassword: !values.showPassword });
      };

      const handleClickConfirmShowPassword = () => {
            setValues({ ...values, showConfirmPassword: !values.showConfirmPassword });
      };

      const handleMouseDownPassword = (event) => {
            event.preventDefault();
      };

      const handleClickRegister = () => {

            if (values.password === values.confirmPassword) {
                  dispatch({ type: 'USER_ID', payload: Math.random().toString(36).substr(2, 9) });
                  dispatch({ type: 'USER_USERNAME', payload: values.username });
                  dispatch({ type: 'USER_EMAIL', payload: values.email });
                  dispatch({ type: 'USER_PASSWORD', payload: values.password });

                  console.log(user);
                  history.push('/')
            } else {
                  setNoti({
                        open: true,
                        msg: 'password ไม่ตรงกัน'
                  })
            }

      }

      const handleClose = () => {
            setNoti({
                  open: false,
                  msg: ''
            })
      }

      return (
            <React.Fragment>
                  <Helmet>
                        <title>{t('React JS | Register')}</title>
                        <meta name="description" content="Helmet application" />
                  </Helmet>
                  <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                  }}>
                        <Paper style={{
                              padding: 30
                        }}>
                              <Grid
                                    container
                                    direction="column"
                                    justify="center"
                                    alignItems="center"
                                    spacing={2}
                              >
                                    <Grid item xs={12}>
                                          <Typography variant="h5" component="h2">
                                                {t("Register")}
                                          </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                          <TextField
                                                className={clsx(classes.margin, classes.textField)}
                                                label="Username"
                                                id="username"
                                                value={values.username}
                                                onChange={handleChange('username')}
                                                InputProps={{
                                                      startAdornment: <AccountCircleIcon />,
                                                }}
                                          />
                                    </Grid>
                                    <Grid item xs={12}>
                                          <TextField
                                                className={clsx(classes.margin, classes.textField)}
                                                label="E-mail"
                                                id="email"
                                                value={values.email}
                                                onChange={handleChange('email')}
                                                InputProps={{
                                                      startAdornment: <EmailIcon />,
                                                }}
                                          />
                                    </Grid>
                                    <Grid item xs={12}>
                                          <FormControl className={clsx(classes.margin, classes.textField)} >
                                                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                                <Input
                                                      id="standard-adornment-password"
                                                      type={values.showPassword ? 'text' : 'password'}
                                                      value={values.password}
                                                      onChange={handleChange('password')}
                                                      endAdornment={
                                                            <InputAdornment position="end">
                                                                  <IconButton
                                                                        aria-label="toggle password visibility"
                                                                        onClick={handleClickShowPassword}
                                                                        onMouseDown={handleMouseDownPassword}
                                                                  >
                                                                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                                                  </IconButton>
                                                            </InputAdornment>
                                                      }
                                                />
                                          </FormControl>
                                    </Grid>
                                    <Grid item xs={12}>
                                          <FormControl className={clsx(classes.margin, classes.textField)} >
                                                <InputLabel htmlFor="standard-adornment-confirm-password">Confirm Password</InputLabel>
                                                <Input
                                                      id="standard-adornment-confirm-password"
                                                      type={values.showConfirmPassword ? 'text' : 'password'}
                                                      value={values.confirmPassword}
                                                      onChange={handleChange('confirmPassword')}
                                                      endAdornment={
                                                            <InputAdornment position="end">
                                                                  <IconButton
                                                                        aria-label="toggle confirm password visibility"
                                                                        onClick={handleClickConfirmShowPassword}
                                                                        onMouseDown={handleMouseDownPassword}
                                                                  >
                                                                        {values.showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                                                                  </IconButton>
                                                            </InputAdornment>
                                                      }
                                                />
                                          </FormControl>
                                    </Grid>
                                    <Grid item xs={12}>
                                          <Button variant="contained" color="primary" onClick={handleClickRegister}>
                                                {t("Sign Up")}
                                          </Button>
                                    </Grid>
                                    <Grid item xs={12}>
                                          {/* <FirebaseSignIn></FirebaseSignIn> */}
                                    </Grid>
                              </Grid>
                        </Paper>
                  </div>
                  <Snackbar open={noti.open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="error">
                              {t(`${noti.msg}`)}
                        </Alert>
                  </Snackbar>
            </React.Fragment>
      )
}

// RegisterView.propTypes = {

// }

export default RegisterView
