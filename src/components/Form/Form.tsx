import { Box, Grid, Typography, Paper, ThemeProvider } from "@mui/material";

import { styles, buttonTheme } from "./styles";
import { Label } from "./Label";
import { Input } from "./Input";
import { Button } from "./Button";

export const Form = () => (
  <Grid
    container
    alignContent="center"
    justifyContent="center"
    sx={styles.Container}
  >
    <Grid item sm={3}>
      <Typography sx={styles.Container_title}>Create User Account</Typography>
      <Paper sx={styles.Container_form}>
        <Label>Full Name</Label>
        <Input
          label="Full Name"
          marginTop="10px"
          marginBottom="16px"
          fullWidth
        />

        <Label>Email Address</Label>
        <Input
          label="Email Address"
          marginTop="10px"
          marginBottom="16px"
          fullWidth
        />

        <Label>Password</Label>
        <Input
          label="Create Password"
          marginTop="10px"
          marginBottom="16px"
          fullWidth
        />
      </Paper>

      <Box sx={{ paddingTop: "45px", textAlign: "center" }}>
        <ThemeProvider theme={buttonTheme}>
          <Button color="primary" variant="outlined">
            Cancel
          </Button>
          <Button color="secondary" variant="contained" marginLeft="15px">
            Submit
          </Button>
        </ThemeProvider>
      </Box>
    </Grid>
  </Grid>
);
