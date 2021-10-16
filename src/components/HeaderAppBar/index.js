import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import HideOnScroll from './components/HideOnScroll'
import T from '../T';
import BlueIcon from '../../img/unnamed.png';


const useStyles = makeStyles((theme) => ({
      grow: {
            flexGrow: 1,
      },
      menuButton: {
      },
      title: {
            display: 'block',
            color: 'white'
      },

      sectionDesktop: {
            display: 'block'
      },
      sectionMobile: {
            display: 'none'
      },
}));

function HeaderAppBar(props) {
      const classes = useStyles();
      const [anchorEl, setAnchorEl] = React.useState(null);

      const history = useHistory()
      const auth = useSelector(state => state.auth);
      const dispatch = useDispatch();

      const isMenuOpen = Boolean(anchorEl);

      const handleProfileMenuOpen = (event) => {
            setAnchorEl(event.currentTarget);
      };

      const handleMenuClose = () => {
            setAnchorEl(null);
      };

      const handleMenuLogout = () => {
            dispatch({ type: 'AUTHENTICATED', payload: false });
            setAnchorEl(null);
      };

      

      const menuId = 'primary-search-account-menu';
      const renderMenu = (
            <Menu
                  anchorEl={anchorEl}
                  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                  id={menuId}
                  keepMounted
                  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                  open={isMenuOpen}
                  onClose={handleMenuClose}
            >
                  <MenuItem onClick={handleMenuClose}><T>Profile</T></MenuItem>
                  <MenuItem onClick={handleMenuLogout}><T>Logout</T></MenuItem>
            </Menu>
      );

      return (
            <React.Fragment>
                  <CssBaseline />
                  <HideOnScroll {...props}>
                        <AppBar  position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} style={{
                              backgroundColor: 'rgb(2 72 141)'
                        }}>
                              <Toolbar>
                                    <Button
                                          style={{
                                                color: 'white',
                                                fontSize: '20px',
                                          }
                                          }
                                    onClick={() => {
                                          history.push('/')
                                    }} startIcon={<img style={{
                                          height: 80,
                                          color: "#fff",
                                          fontSize: 20
                                    }}
                                          alt="EAU"

                                          src={BlueIcon} />}>
                                    <T>EASTERN ASIA UNIVERSITY</T>
                              </Button>


                              <div className={classes.grow} />
                              {auth.isAuthenticated === true ? (
                                    <React.Fragment>
                                          <div className={classes.sectionDesktop}>
                                                <IconButton aria-label="show 4 new mails" color="inherit">
                                                      <Badge badgeContent={4} color="secondary">
                                                            <MailIcon />
                                                      </Badge>
                                                </IconButton>
                                                <IconButton aria-label="show 17 new notifications" color="inherit">
                                                      <Badge badgeContent={17} color="secondary">
                                                            <NotificationsIcon />
                                                      </Badge>
                                                </IconButton>
                                                <IconButton
                                                      edge="end"
                                                      aria-label="account of current user"
                                                      aria-controls={menuId}
                                                      aria-haspopup="true"
                                                      onClick={handleProfileMenuOpen}
                                                      color="inherit"
                                                >
                                                      <AccountCircle />
                                                </IconButton>
                                          </div>


                                    </React.Fragment>
                              ) : (
                                    <React.Fragment>
                                          <div className={classes.sectionDesktop}>
                                                <Button color="inherit" onClick={() => { history.push('/login') }}><T>เข้าสู่ระบบ</T></Button>
                                                {/* <Button color="inherit" onClick={() => { history.push('/register') }}><T>Register</T></Button> */}
                                          </div>

                                    </React.Fragment>
                              )}
                        </Toolbar>
                  </AppBar>

            </HideOnScroll>
                  { renderMenu }
                  <Toolbar />
                  <Toolbar />
                  <Container style={{
                        height: '100%'
                  }}>
                        <Box my={2} style={{
                              height: '100%'
                        }}>
                              {props.children}
                        </Box>
                  </Container>
            </React.Fragment >
      );
}


HeaderAppBar.propTypes = {
      children: PropTypes.element.isRequired,
};

export default HeaderAppBar