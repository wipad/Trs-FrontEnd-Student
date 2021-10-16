import React from 'react';
import {
      useSelector,
      // useDispatch
} from 'react-redux';
import { Helmet } from 'react-helmet';
import logo from '../../img/eau.jpg';
import '../../App.css';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useHistory } from 'react-router-dom';
import {
      Switch,
      Route
} from "react-router-dom";
import NoMatch from '../NoMatch';

function HomeView() {
      const fakeAuth = useSelector(state => state.auth);
      const user = useSelector(state => state.user);


      const drawerWidth = 240;

      const history = useHistory();

      return (
            <div className="App">
                  <Helmet>
                        <title>React JS | Home</title>
                        <meta name="description" content="Helmet application" />
                  </Helmet>
                  <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <Typography variant="h4" style={{
                              margin: 20
                        }} >
                              {"ระบบการบันทึกจัดการการฝึกงาน"}
                        </Typography >
                        <Button variant="outlined" href="/login" >{"เข้าสู่ระบบ"}</Button>



                  </header>

            </div>
      );
}

export default HomeView;