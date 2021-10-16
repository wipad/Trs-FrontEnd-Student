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

function PrivateView() {
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

                  <Drawer
                        variant="permanent"
                        sx={{
                              width: drawerWidth,
                              flexShrink: 0,
                              [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                        }}
                  >
                        <Toolbar />
                        <Toolbar />
                        <Box sx={{ overflow: 'auto' }}>
                              <List>
                                    <ListItem button >
                                          {/* <ListItemIcon>
                                                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                                      </ListItemIcon> */}
                                          <ListItemText primary={"รายงานที่ได้รับมอบหมาย"} onClick={() => { history.push('/assigned-reports') }} />
                                    </ListItem>
                                    <ListItem button >
                                          {/* <ListItemIcon>
                                                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                                      </ListItemIcon> */}
                                          <ListItemText primary={"บันทึกรายวัน"} onClick={() => { history.push('/journal') }} />
                                    </ListItem>
                                    <ListItem button >
                                          {/* <ListItemIcon>
                                                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                                      </ListItemIcon> */}
                                          <ListItemText primary={"บันทึกรายสัปดาห์"} onClick={() => { history.push('/weekly-record') }} />
                                    </ListItem>
                              </List>
                        </Box>
                  </Drawer>
                  <Switch>
                        <Route exact={true} path="/">
                        <h1>{"หน้าแรก"}</h1>
                        </Route>
                        <Route path="/assigned-reports">
                              <h1>{"รายงานที่ได้รับมอบหมาย"}</h1>
                        </Route>
                        <Route path="/journal">
                              <h1>{"บันทึกรายวัน"}</h1>
                        </Route>
                        <Route path="/weekly-record">
                              <h1>{"บันทึกรายสัปดาห์"}</h1>
                        </Route>
                        <Route path="/*">
                              <NoMatch />
                        </Route>
                  </Switch>



            </div>
      );
}

export default PrivateView;