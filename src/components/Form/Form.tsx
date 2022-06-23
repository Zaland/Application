import { Box, Grid, Typography, Paper, ThemeProvider } from "@mui/material";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

import { checkIfSpacesAround, checkIfSymbols } from "../../helper/utilities";
import { styles, buttonTheme } from "./styles";
import { Label } from "./Label";
import { Input } from "./Input";
import { Button } from "./Button";

interface FormInput {
  fullName: string;
}

export const Form = () => {
  const { handleSubmit, control } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = (data) => console.log({ data });

  return (
    <Grid
      container
      alignContent="center"
      justifyContent="center"
      sx={styles.Container}
    >
      <Grid item sm={3}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography sx={styles.Container_title}>
            Create User Account
          </Typography>
          <Paper sx={styles.Container_form}>
            <Label>Full Name</Label>
            <Controller
              name="fullName"
              control={control}
              defaultValue=""
              rules={{
                required: "Full name required",
                validate: {
                  checkSpaces: (value) =>
                    !checkIfSpacesAround(value) || "Remove spaces around field",
                  checkSymbols: (value) =>
                    !checkIfSymbols(value) || "Remove symbols",
                },
              }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <Input
                  label="Full Name"
                  marginTop="10px"
                  marginBottom="25px"
                  fullWidth
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
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
              <Button
                color="secondary"
                variant="contained"
                marginLeft="15px"
                type="submit"
              >
                Submit
              </Button>
            </ThemeProvider>
          </Box>
        </form>
      </Grid>
    </Grid>
  );
};
