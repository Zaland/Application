import { Box, Grid, Typography, Paper, ThemeProvider } from "@mui/material";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import validator from "validator";

import {
  checkIfSpacesAround,
  checkIfSymbols,
  checkIfPasswordValid,
} from "../../helper/utilities";
import { styles, buttonTheme } from "./styles";
import { Label } from "./Label";
import { Input } from "./Input";
import { Button } from "./Button";

interface FormInput {
  fullName: string;
  contactNumber: string;
  emailAddress: string;
  password: string;
  confirmPassword: string;
}

export const Form = () => {
  const { handleSubmit, control, getValues } = useForm<FormInput>();

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
                required: "Full name is required",
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
            <Controller
              name="contactNumber"
              control={control}
              defaultValue=""
              rules={{
                required: "Contact number is required",
                validate: {
                  checkPhone: (value) =>
                    validator.isMobilePhone(value, "en-CA") ||
                    "Invalid phone number",
                },
              }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <Input
                  label="Contact Number"
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

            <Controller
              name="emailAddress"
              control={control}
              defaultValue=""
              rules={{
                required: "Email address is required",
                validate: {
                  checkPhone: (value) =>
                    validator.isEmail(value) || "Invalid email address",
                },
              }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <Input
                  label="Email Address"
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
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Minimum of 8 characters required",
                },
                validate: {
                  checkPassword: (value) =>
                    checkIfPasswordValid(value) ||
                    "Password must contain at least one lower case letter, one upper case letter, and one number",
                },
              }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <Input
                  label="Create Password"
                  marginTop="10px"
                  marginBottom="25px"
                  fullWidth
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                  type="password"
                />
              )}
            />

            <Label>Confirm Password</Label>
            <Controller
              name="confirmPassword"
              control={control}
              defaultValue=""
              rules={{
                required: "Password doesn't match",
                validate: {
                  checkPassword: (value) =>
                    value === getValues("password") || "Password doesn't match",
                },
              }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <Input
                  label="Create Password"
                  marginTop="10px"
                  marginBottom="25px"
                  fullWidth
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                  type="password"
                />
              )}
            />
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
