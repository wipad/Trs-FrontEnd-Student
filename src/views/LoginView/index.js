import React from 'react'
// import PropTypes from 'prop-types'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import {
      useSelector,
      useDispatch
} from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Helmet } from 'react-helmet';
// import FirebaseSignIn from '../../components/FirebaseSignIn'
import Logo from '../../img/eau.png';

const useStyles = makeStyles((theme) => ({
      root: {
            display: 'flex',
            flexWrap: 'wrap',
      },
      margin: {
            margin: 1,
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

function LoginView(props) {
      const classes = useStyles();

      const [values, setValues] = React.useState({
            studentId: ''
      });

      const [noti, setNoti] = React.useState({
            open: false,
            msg: ''
      });

      const [dataExample,setDataExample] =React.useState([
            {
                  studentId:"59180030",
                  idCard: "1409901607307"
            },
            {
                  studentId:"59180031",
            }
      ])

      const user = useSelector(state => state.user);

      const { t } = useTranslation()
      const dispatch = useDispatch();
      const history = useHistory();

      const handleChange = (prop) => (event) => {
            setValues({ ...values, [prop]: event.target.value });
      };

  

      const handleClickLogIn = () => {
            dataExample.map((value,index,array) => {
                  if (value.studentId === values.studentId) {
                      
                        if (value.idCard) {
                              dispatch({ type: 'AUTHENTICATED', payload: true });
                              history.push('/')
                        } else {
                              history.push('/register')
                              setNoti({
                                    open: true,
                                    msg: 'password ไม่ถูกต้อง'
                              })
                        }
                
                  } else {
                        setNoti({
                              open: true,
                              msg: 'studentId ไม่ถูกต้อง'
                        })
                  }
            })
            

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
                        <title>{t('React JS | Login')}</title>
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
                                          <img alt="logo" src={Logo} />
                                    </Grid>
                                    <Grid item xs={12}>
                                          <Typography variant="h5" component="h2">
                                                {t("รหัสนักศึกษา")}
                                          </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                          <TextField
                                                className={clsx(classes.margin, classes.textField)}
                                                label="รหัสนักศึกษา"
                                                id="student-id"
                                                name="student-id"
                                                value={values.studentId}
                                                onChange={handleChange('studentId')}
                                                // InputProps={{
                                                //       startAdornment: <AccountCircleIcon />,
                                                // }}
                                          />
                                    </Grid>
                                    <Grid item xs={12}>
                                          <Button variant="contained" color="primary" onClick={handleClickLogIn}>
                                                {t("ยืนยันตัวตน")}
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

// LoginView.propTypes = {

// }

export default LoginView
