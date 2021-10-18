import * as React from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function GoToHomePageForm(props) {
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
                        <Typography variant="h5" >{"ไปหน้าแรก"}</Typography>
                  </Grid>
            </Grid>

      </Box>)
}