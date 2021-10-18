import * as React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import MenuItem from '@mui/material/MenuItem';
import {
      useSelector,
      useDispatch
} from 'react-redux';


export default function InternshipPlaceForm(props) {


      const register = useSelector(state => state.register);
      const dispatch = useDispatch();

      return (
            <Box sx={{ flexGrow: 1 }} style={{
                  margin: 100
            }}>

                  <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={3}
                  >
                        <Grid item xs={12}>
                              <Typography variant="h5">{"บันทึกข้อมูลที่ฝึกงาน"}</Typography>
                        </Grid>
                        {/* ชื่อสถานที่ประกอบการ ตำแหน่งที่ฝึกงาน */}

                        <Grid item xs={12}
                              style={{
                                    width: "100%"
                              }}>
                              <Grid
                                    container
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    spacing={3}
                              >

                                    <Grid item xs={8}>
                                          <TextField
                                                value={register.internshipName}
                                                onChange={(e) => {
                                                      dispatch({ type: "INTERNSHIPNAME_CHANGE", payload: e.target.value })
                                                }}
                                                style={{
                                                      width: "100%"
                                                }}
                                                id="internship-name" name="internship-name" label="ชื่อสถานที่ฝึกงาน" variant="standard" />
                                    </Grid>
                                    <Grid item xs={4}>
                                          <TextField
                                                value={register.internshipPosition}
                                                onChange={(e) => {
                                                      dispatch({ type: "INTERNSHIPPOSITION_CHANGE", payload: e.target.value })
                                                }}
                                                style={{
                                                      width: "100%"
                                                }}
                                                id="internship-position" name="internship-position" label="ตำแหน่งที่ฝึกงาน" variant="standard" />
                                    </Grid>

                              </Grid>
                        </Grid>

                        {/* ที่อยู่สถานที่ประกอบการ */}
                        <Grid item xs={12}
                              style={{
                                    width: "100%"
                              }}>
                              <Grid
                                    container
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    spacing={3}
                              >
                                    <Grid item xs={12}>
                                          <TextField
                                                value={register.internshipAddress}
                                                onChange={(e) => {
                                                      dispatch({ type: "INTERNSHIPADDRESS_CHANGE", payload: e.target.value })
                                                }}
                                                style={{
                                                      width: "100%"
                                                }}
                                                id="business-address"
                                                name="business-address"
                                                label="ที่อยู่สถานที่ประกอบการ"
                                                variant="standard"
                                                placeholder="ที่อยู่สถานที่ประกอบการ"
                                                multiline
                                          />
                                    </Grid>

                              </Grid>
                        </Grid>

                        {/* ชื่อผู้ดูแล Email    เบอร์โทรศัพท์ */}
                        <Grid item xs={12}
                              style={{
                                    width: "100%"
                              }}>
                              <Grid
                                    container
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    spacing={3}
                              >
                                    <Grid item xs={4}>
                                          <TextField
                                                value={register.caretakerName}
                                                onChange={(e) => {
                                                      dispatch({ type: "CARETAKERNAME_CHANGE", payload: e.target.value })
                                                }}
                                                style={{
                                                      width: "100%"
                                                }}
                                                id="caretaker-name" name="caretaker-name" label="ชื่อผู้ดูแล" variant="standard" />
                                    </Grid>
                                    <Grid item xs={4}>
                                          <TextField
                                                value={register.caretakerEmail}
                                                onChange={(e) => {
                                                      dispatch({ type: "CARETAKEREMAIL_CHANGE", payload: e.target.value })
                                                }}
                                                style={{
                                                      width: "100%"
                                                }}
                                                id="email" name="email" label="อีเมล" variant="standard" />
                                    </Grid>
                                    <Grid item xs={4}>
                                          <TextField
                                                value={register.caretakerPhoneNumber}
                                                onChange={(e) => {
                                                      dispatch({ type: "CARETAKERPHONENUMBER_CHANGE", payload: e.target.value })
                                                }}
                                                style={{
                                                      width: "100%"
                                                }}
                                                id="phone-number" name="phone-number" type="number" label="เบอร์โทรศัพท์" variant="standard" />
                                    </Grid>

                              </Grid>
                        </Grid>


                  </Grid>



            </Box >
      )
}