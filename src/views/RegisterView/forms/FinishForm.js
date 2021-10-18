import * as React from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function FinishForm(props) {
      return (<Box sx={{ flexGrow: 1 }} style={{
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
                        <CheckCircleOutlineIcon sx={{ fontSize: 170,color: "green" }}></CheckCircleOutlineIcon>
                  </Grid>
                  <Grid item xs={12}>
                        <Typography variant="h5" >{"ลงทะเบียนสำเร็จแล้ว"}</Typography>
                  </Grid>
            </Grid>

      </Box>)
}