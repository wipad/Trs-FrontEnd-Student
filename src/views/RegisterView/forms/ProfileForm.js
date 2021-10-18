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


export default function ProfileForm(props) {
      const [birthday, setBirthday] = React.useState(null);
      const [genderDefault] = React.useState([
            {
                  value: 'default',
                  label: 'ระบุเพศ',
            },
            {
                  value: 'man',
                  label: 'ชาย',
            },
            {
                  value: 'woman',
                  label: 'หญิง',
            }
      ]);
      const [gender, setGender] = React.useState('default');



      const register = useSelector(state => state.register);
      const dispatch = useDispatch();

      const handleChange = (event) => {
            setGender(event.target.value);
      };

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
                              <Typography variant="h5">{"บันทึกข้อมูลนักศึกษา"}</Typography>
                        </Grid>
                        {/* Grid ชื่อ สุกล รหัสนักศึกษา */}

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
                                                value={register.firstName}
                                                onChange={(e) => {
                                                      dispatch({ type: "FIRSTNAME_CHANGE", payload: e.target.value })
                                                }}
                                                style={{
                                                      width: "100%"
                                                }}
                                                id="first-name" name="first-name" label="ชื่อ" variant="standard" />
                                    </Grid>
                                    <Grid item xs={4}>
                                          <TextField
                                                value={register.lastName}
                                                onChange={(e) => {
                                                      dispatch({ type: "LASTNAME_CHANGE", payload: e.target.value })
                                                }}
                                                style={{
                                                      width: "100%"
                                                }}
                                                id="last-name" name="last-name" label="นามสกุล" variant="standard" />
                                    </Grid>
                                    <Grid item xs={4}>
                                          <TextField
                                                value={register.studentId}
                                                onChange={(e) => {
                                                      dispatch({ type: "STUDENTID_CHANGE", payload: e.target.value })
                                                }}
                                                style={{
                                                      width: "100%"
                                                }}
                                                id="student-id" name="student-id" label="รหัสนักศึกษา" variant="standard" />
                                    </Grid>
                              </Grid>
                        </Grid>

                        {/* Grid วัน/ เดือน / ปีเกิด      อายุ   เพศ */}

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
                                          <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                <DatePicker
                                                      label="วัน/เดือน/ปีเกิด"
                                                      value={register.birthday}
                                                      onChange={(e) => {
                                                            dispatch({ type: "BIRTHDAY_CHANGE", payload: e })
                                                      }}

                                                      renderInput={(params) => (
                                                            <TextField style={{
                                                                  width: "100%"
                                                            }}
                                                                  variant="standard" {...params}
                                                            // helperText={params?.inputProps?.placeholder}
                                                            />
                                                      )}
                                                />
                                          </LocalizationProvider>
                                    </Grid>
                                    <Grid item xs={4}>
                                          <TextField
                                                value={register.age}
                                                onChange={(e) => {
                                                      dispatch({ type: "AGE_CHANGE", payload: e.target.value })
                                                }}

                                                style={{
                                                      width: "100%"
                                                }}
                                                id="age" name="age" type="number" label="อายุ" variant="standard" />
                                    </Grid>
                                    <Grid item xs={4}>
                                          <TextField

                                                style={{
                                                      width: "100%"
                                                }}
                                                id="select-gender"
                                                select
                                                label="เพศ"
                                                value={register.gender}
                                                onChange={(e) => {
                                                      dispatch({ type: "GENDER_CHANGE", payload: e.target.value })
                                                }}
                                                // helperText="กรุณาเลือกเพศของคุณ"
                                                variant="standard"
                                          >
                                                {genderDefault.map((option) => (
                                                      <MenuItem key={option.value} value={option.value}>
                                                            {option.label}
                                                      </MenuItem>
                                                ))}
                                          </TextField>
                                    </Grid>
                              </Grid>
                        </Grid>

                        {/* เลขบัตรประจำตัวบัตรประชาชน */}
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
                                                value={register.idCardNumber}
                                                onChange={(e) => {
                                                      dispatch({ type: "IDCARDNUMBER_CHANGE", payload: e.target.value })
                                                }}

                                                style={{
                                                      width: "100%"
                                                }}
                                                id="id-card-number" name="id-card-number" type="number" label="เลขบัตรประจำตัวบัตรประชาชน" variant="standard" />
                                    </Grid>

                              </Grid>
                        </Grid>

                        {/* Email    เบอร์โทรศัพท์ */}
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
                                    <Grid item xs={6}>
                                          <TextField
                                                value={register.email}
                                                onChange={(e) => {
                                                      dispatch({ type: "EMAIL_CHANGE", payload: e.target.value })
                                                }}
                                                style={{
                                                      width: "100%"
                                                }}
                                                id="email" name="email" label="อีเมล" variant="standard" />
                                    </Grid>
                                    <Grid item xs={6}>
                                          <TextField
                                                value={register.phoneNumber}
                                                onChange={(e) => {
                                                      dispatch({ type: "PHONENUMBER_CHANGE", payload: e.target.value })
                                                }}
                                                style={{
                                                      width: "100%"
                                                }}
                                                id="phone-number" name="phone-number" type="number" label="เบอร์โทรศัพท์" variant="standard" />
                                    </Grid>

                              </Grid>
                        </Grid>

                        {/* คณะ     สาขาวิชา   ชั้นปีที่ */}

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
                                                value={register.faculty}
                                                onChange={(e) => {
                                                      dispatch({ type: "FACULTY_CHANGE", payload: e.target.value })
                                                }}
                                                style={{
                                                      width: "100%"
                                                }}
                                                id="faculty" name="faculty" label="คณะ" variant="standard" />
                                    </Grid>
                                    <Grid item xs={4}>
                                          <TextField
                                                value={register.branch}
                                                onChange={(e) => {
                                                      dispatch({ type: "BRANCH_CHANGE", payload: e.target.value })
                                                }}
                                                style={{
                                                      width: "100%"
                                                }}
                                                id="branch" name="branch" label="สาขาวิชา" variant="standard" />
                                    </Grid>
                                    <Grid item xs={4}>
                                          <TextField
                                                value={register.studentClass}
                                                onChange={(e) => {
                                                      dispatch({ type: "STUDENTCLASS_CHANGE", payload: e.target.value })
                                                }}
                                                style={{
                                                      width: "100%"
                                                }}
                                                id="student-class" name="student-class" type="number" label="ชั้นปีที่" variant="standard" />
                                    </Grid>
                              </Grid>
                        </Grid>

                        {/* ที่อยู่ของนักศึกษา */}
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
                                                value={register.address}
                                                onChange={(e) => {
                                                      dispatch({ type: "ADDRESS_CHANGE", payload: e.target.value })
                                                }}
                                                style={{
                                                      width: "100%"
                                                }}
                                                id="address"
                                                name="address"
                                                label="ที่อยู่ของนักศึกษา"
                                                variant="standard"
                                                placeholder="ที่อยู่ของนักศึกษา"
                                                multiline
                                          />
                                    </Grid>

                              </Grid>
                        </Grid>

                  </Grid>

            </Box >
      )
}