import { useState, useEffect } from "react";
import { Box, Grid, Typography, Paper, ThemeProvider } from "@mui/material";

import {
  checkIfSpacesAround,
  checkIfEmpty,
  checkIfSymbols,
} from "../../helper/utilities";
import { styles, buttonTheme } from "./styles";
import { Label } from "./Label";
import { Input } from "./Input";
import { Button } from "./Button";

export const Form = () => {
  const [fullName, setFullName] = useState({
    value: "",
    error: false,
    errorMessage: "",
    touched: false,
  });

  console.log({ fullName });

  useEffect(() => {
    if (!fullName.touched) return;

    let error = false;
    let errorMessage = "";

    if (checkIfEmpty(fullName.value)) {
      error = true;
      errorMessage = "Please enter a value.";
    } else if (checkIfSpacesAround(fullName.value)) {
      error = true;
      errorMessage =
        "Please remove the spaces in the front and/or end of the field.";
    } else if (checkIfSymbols(fullName.value)) {
      error = true;
      errorMessage = "Please remove symbols from the field.";
    } else {
      error = false;
      errorMessage = "";
    }

    setFullName((fullName) => ({
      ...fullName,
      error,
      errorMessage,
    }));
  }, [fullName.value, fullName.touched]);

  return (
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
            marginBottom="25px"
            fullWidth
            error={fullName.error}
            helperText={fullName.errorMessage}
            value={fullName.value}
            onChange={(event) =>
              setFullName((fullName) => ({
                ...fullName,
                value: event.target.value,
                touched: true,
              }))
            }
          />

          <Label>Contact Number</Label>
          <Input
            label="Contact Number"
            marginTop="10px"
            marginBottom="25px"
            fullWidth
          />

          <Label>Email Address</Label>
          <Input
            label="Email Address"
            marginTop="10px"
            marginBottom="25px"
            fullWidth
          />

          <Label>Date of Birth</Label>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Input
                label="Day"
                marginTop="10px"
                marginBottom="25px"
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
              <Input
                label="Month"
                marginTop="10px"
                marginBottom="25px"
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
              <Input
                label="Year"
                marginTop="10px"
                marginBottom="25px"
                fullWidth
              />
            </Grid>
          </Grid>

          <Label>Password</Label>
          <Input
            label="Create Password"
            marginTop="10px"
            marginBottom="25px"
            fullWidth
          />

          <Label>Confirm Password</Label>
          <Input label="Confirm Password" marginTop="10px" fullWidth />
        </Paper>

        <Box sx={styles.Container_buttons}>
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
};
