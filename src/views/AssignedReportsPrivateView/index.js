import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import LaunchIcon from '@mui/icons-material/Launch';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import {
      useSelector,
      useDispatch
} from 'react-redux';

function ElevationScroll(props) {
      const { children, window } = props;
      // Note that you normally won't need to set the window ref as useScrollTrigger
      // will default to window.
      // This is only being set here because the demo is in an iframe.
      const trigger = useScrollTrigger({
            disableHysteresis: true,
            threshold: 0,
            target: window ? window() : undefined,
      });

      return React.cloneElement(children, {
            elevation: trigger ? 4 : 0,
      });
}

ElevationScroll.propTypes = {
      children: PropTypes.element.isRequired,
      /**
       * Injected by the documentation to work in an iframe.
       * You won't need it on your project.
       */
      window: PropTypes.func,
};

function DialogLaunch(props) {
      return (<Dialog
            open={props.open}
            onClose={props.onClose}
            fullWidth={true}
            maxWidth="md"
            scroll="paper"
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
      >
            <DialogTitle id="scroll-dialog-title">
                  <Typography> {props.title}</Typography>
                  <Typography variant="body2" style={{
                        fontSize: "12px",
                        color: "gray",
                  }}> {props.date}</Typography>
                  <IconButton
                        aria-label="close"
                        onClick={props.onClose}
                        sx={{
                              position: 'absolute',
                              right: 8,
                              top: 8,
                              color: (theme) => theme.palette.grey[500],
                        }}
                  >
                        <CloseIcon />
                  </IconButton>
            </DialogTitle>

            <DialogContent dividers="paper">
                  <DialogContentText
                        id="scroll-dialog-description"
                        //     ref={descriptionElementRef}
                        tabIndex={-1}
                  >
                        {props.subheader}
                  </DialogContentText>
            </DialogContent>
            <DialogActions>
                  <Button onClick={props.onClose}>{"ปิด"}</Button>
                  {/* <Button onClick={props.onClose}>Subscribe</Button> */}
            </DialogActions>
      </Dialog>)
}


DialogLaunch.propTypes = {
      onClose: PropTypes.func,
      open: PropTypes.bool,
      title: PropTypes.string,
      subheader: PropTypes.string,
      date: PropTypes.string,
      /**
       * Injected by the documentation to work in an iframe.
       * You won't need it on your project.
       */
};

function DialogAdd(props) {
      const assignedReports = useSelector(state => state.assignedReports);
      const dispatch = useDispatch();

      const newAssignedReports = assignedReports.array

      const [change, setChange] = React.useState({
            title: "",
            subheader: ""
      })


      return (<Dialog
            open={props.open}
            onClose={props.onClose}
            fullWidth={true}
            maxWidth="md"
            scroll="paper"
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
      >
            <DialogTitle id="scroll-dialog-title">

                  <TextField
                        required
                        value={change.title}
                        onChange={(e) => {
                              setChange({ ...change, title: e.target.value, date: props.date })

                        }}
                        style={{
                              width: "100%"
                        }}
                        id="edit-title" name="edit-title" label="งานที่ได้รับมอบหมาย" variant="standard" />

                  <IconButton
                        aria-label="close"
                        onClick={() => {
                              setChange({
                                    title: "",
                                    subheader: ""
                              })
                              props.onClose()
                        }}
                        sx={{
                              position: 'absolute',
                              right: 8,
                              top: 8,
                              color: (theme) => theme.palette.grey[500],
                        }}
                  >
                        <CloseIcon />
                  </IconButton>
            </DialogTitle>

            <DialogContent dividers="paper">
                  <TextField
                        required
                        value={change.subheader}
                        onChange={(e) => {

                              setChange({ ...change, subheader: e.target.value, date: props.date })
                        }}
                        style={{
                              width: "100%"
                        }}
                        id="edit-subheader"
                        name="edit-subheader"
                        label="รายละเอียด"
                        variant="standard"
                        placeholder="รายละเอียด"
                        multiline
                  />
                  {/* <DialogContentText
                        id="scroll-dialog-description"
                        //     ref={descriptionElementRef}
                        tabIndex={-1}
                  >
                        {props.subheader}
                  </DialogContentText> */}
            </DialogContent>
            <DialogActions>
                  <Button onClick={() => {


                        console.log(change)
                        newAssignedReports.push(change)
                        dispatch({ type: 'ASSIGNEDREPORTS_CHANGE', payload: newAssignedReports });
                        setChange({
                              title: "",
                              subheader: ""
                        })
                        props.onClose()
                  }}>{"บันทึก"}</Button>
                  {/* <Button onClick={props.onClose}>Subscribe</Button> */}
            </DialogActions>
      </Dialog>)
}


DialogAdd.propTypes = {
      onClose: PropTypes.func,
      open: PropTypes.bool,
      /**
       * Injected by the documentation to work in an iframe.
       * You won't need it on your project.
       */
};

function DialogEdit(props) {
      const [change, setChange] = React.useState({
            title: "",
            subheader: ""
      })

      const dispatch = useDispatch();

      return (<Dialog
            open={props.open}
            onClose={props.onClose}
            fullWidth={true}
            maxWidth="md"
            scroll="paper"
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
      >
            <DialogTitle id="scroll-dialog-title">

                  <TextField
                        required
                        value={!change.title ? props.title : change.title}
                        onChange={(e) => {
                              setChange({ ...change, title: e.target.value })

                        }}
                        style={{
                              width: "100%"
                        }}
                        id="edit-title" name="edit-title" label="งานที่ได้รับมอบหมาย" variant="standard" />

                  <IconButton
                        aria-label="close"
                        onClick={props.onClose}
                        sx={{
                              position: 'absolute',
                              right: 8,
                              top: 8,
                              color: (theme) => theme.palette.grey[500],
                        }}
                  >
                        <CloseIcon />
                  </IconButton>
            </DialogTitle>

            <DialogContent dividers="paper">
                  <TextField
                        required
                        value={!change.subheader ? props.subheader : change.subheader}
                        onChange={(e) => {
                              setChange({ ...change, subheader: e.target.value })
                        }}
                        style={{
                              width: "100%"
                        }}
                        id="edit-subheader"
                        name="edit-subheader"
                        label="รายละเอียด"
                        variant="standard"
                        placeholder="รายละเอียด"
                        multiline
                  />
                  {/* <DialogContentText
                        id="scroll-dialog-description"
                        //     ref={descriptionElementRef}
                        tabIndex={-1}
                  >
                        {props.subheader}
                  </DialogContentText> */}
            </DialogContent>
            <DialogActions>
                  <Button onClick={() => {
                        // setChange({ ...change })
                        const newArray = props.array
                        console.log(newArray);
                        newArray["0"] = {
                              title: props.title,
                              subheader: props.subheader,
                              ...change
                        };
                        console.log(newArray);
                        dispatch({ type: "ASSIGNEDREPORTS_CHANGE", payload: newArray })
                        props.onClose();
                  }}>{"บันทึก"}</Button>
                  {/* <Button onClick={props.onClose}>Subscribe</Button> */}
            </DialogActions>
      </Dialog>)
}


DialogEdit.propTypes = {
      onClose: PropTypes.func,
      open: PropTypes.bool,
      title: PropTypes.string,
      subheader: PropTypes.string
      /**
       * Injected by the documentation to work in an iframe.
       * You won't need it on your project.
       */
};

function DialogDelete(props) {
      const dispatch = useDispatch();

      return (<Dialog
            open={props.open}
            onClose={props.onClose}
            fullWidth={true}
            maxWidth="xs"
            scroll="paper"
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
      >
            <DialogTitle id="scroll-dialog-title">
                  <Typography> {props.title}</Typography>

                  <IconButton
                        aria-label="close"
                        onClick={props.onClose}
                        sx={{
                              position: 'absolute',
                              right: 8,
                              top: 8,
                              color: (theme) => theme.palette.grey[500],
                        }}
                  >
                        <CloseIcon />
                  </IconButton>
            </DialogTitle>

            <DialogContent dividers="paper">
                  <DialogContentText
                        id="scroll-dialog-description"
                        //     ref={descriptionElementRef}
                        tabIndex={-1}
                  >
                        {"คุณต้องการจะลบรายงานนี้ใช่หรือไม่"}
                  </DialogContentText>
            </DialogContent>
            <DialogActions>
                  <Button onClick={() => {
                        const removeArray = props.array
                        delete removeArray[props.index]
                        console.log(removeArray);
                        dispatch({ type: "ASSIGNEDREPORTS_CHANGE", payload: removeArray })
                        props.onClose()
                  }}>{"ใช่"}</Button>
                  <Button onClick={props.onClose}>{"ไม่"}</Button>            </DialogActions>
      </Dialog>)
}


DialogDelete.propTypes = {
      onClose: PropTypes.func,
      open: PropTypes.bool,
      title: PropTypes.string,
      subheader: PropTypes.string,
      /**
       * Injected by the documentation to work in an iframe.
       * You won't need it on your project.
       */
};


function AssignedReportsCard(props) {
      const [open, setOpen] = React.useState({
            launch: false,
            edit: false,
            delete: false
      });

      return (<Card sx={{ margin: 1 }} variant="outlined" >
            <CardHeader

                  action={
                        <Stack direction="row">
                              <IconButton aria-label="launch" onClick={() => {
                                    setOpen({ ...open, launch: true })
                              }} >
                                    <LaunchIcon />
                              </IconButton>
                              <IconButton aria-label="edit" onClick={() => {
                                    setOpen({ ...open, edit: true })
                              }} >
                                    <EditIcon />
                              </IconButton>
                              <IconButton aria-label="delete" onClick={() => {
                                    setOpen({ ...open, delete: true })
                              }}>
                                    <DeleteIcon />
                              </IconButton>
                        </Stack>
                  }
                  title={props.title}
                  subheader={props.date}
            />

            <DialogLaunch
                  open={open.launch}
                  title={props.title}
                  subheader={props.subheader}
                  onClose={() => { setOpen({ ...open, launch: false }) }}></DialogLaunch>
            <DialogEdit
                  array={props.array}
                  index={props.index}
                  open={open.edit}
                  title={props.title}
                  subheader={props.subheader}
                  onClose={() => { setOpen({ ...open, edit: false }) }}></DialogEdit>
            <DialogDelete
                  array={props.array}
                  index={props.index}
                  open={open.delete}
                  title={props.title}
                  subheader={props.subheader}
                  onClose={() => { setOpen({ ...open, delete: false }) }}></DialogDelete>
      </Card>)
}

function AssignedReportsPrivateView(props) {
      const [data] = React.useState(true)
      const [open, setOpen] = React.useState({
            add: false,
      });

      const assignedReports = useSelector(state => state.assignedReports);



      return (
            <React.Fragment>
                  <CssBaseline />
                  <Container maxWidth="md">
                        <Box sx={{ flexGrow: 1 }}>
                              <ElevationScroll {...props}>
                                    <AppBar position="static" elevation={0} style={{
                                          backgroundColor: '#f0f8ff00',
                                          color: 'black',
                                          borderBottom: 'solid 1px #d1d1d1',
                                    }}>
                                          <Toolbar variant="dense">

                                                <Typography variant="h6" color="inherit" component="div"  >
                                                      {"รายงานที่ได้รับมอบหมาย"}
                                                </Typography>
                                                <Typography component="div" sx={{ flexGrow: 1 }} />
                                                <Button variant="outlined" startIcon={<AddIcon />} onClick={() => {
                                                      setOpen({ ...open, add: true })
                                                }}>
                                                      {"เพิ่ม"}
                                                </Button>

                                          </Toolbar>
                                    </AppBar>
                              </ElevationScroll>
                              {/* <Toolbar /> */}
                              <Container>
                                    <Box sx={{ my: 2 }} style={{
                                          overflowY: "auto",
                                          maxHeight: 500
                                    }}>
                                          {assignedReports.array.length ? (<React.Fragment>
                                                {assignedReports.array.map((val, index, array) => (
                                                      <React.Fragment key={index}>
                                                            <AssignedReportsCard {...val} index={index} key={index} array={array} />
                                                      </React.Fragment>))}
                                          </React.Fragment>) : (<React.Fragment>
                                                <Typography variant="h6" style={{
                                                      color: "gray"
                                                }} component="div"  >
                                                      {"ไม่พบ รายงานที่ได้รับมอบหมาย"}
                                                </Typography>
                                          </React.Fragment>)}
                                    </Box>
                              </Container>
                        </Box>
                  </Container>
                  <DialogAdd
                        open={open.add}
                        onClose={() => {
                              setOpen({ ...open, add: false })
                        }}>
                  </DialogAdd>
            </React.Fragment>
      );
}

export default AssignedReportsPrivateView