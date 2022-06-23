import { createTheme } from "@mui/material";

export const styles = {
  Container: {
    marginTop: "100px",
  },
  Container_title: {
    fontWeight: 600,
    fontSize: 20,
    lineHeight: "150%",
    paddingBottom: "15px",
    color: "#2C3642",
  },
  Container_form: {
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.08)",
    borderRadius: "8px",
    padding: "40px",
  },
};

export const buttonTheme = createTheme({
  typography: {
    fontFamily: "'Montserrat', sans-serif",
  },
  palette: {
    primary: {
      main: "#4790A1",
    },
    secondary: {
      main: "#127C95",
    },
  },
});

// export const inputTheme = createTheme({
//   typography: {
//     fontFamily: "'Montserrat', sans-serif",
//   },
//   components: {
//     MuiTextField: {
//       styleOverrides: {
//         root: {
//           marginTop: "10px",

//           "& label": {
//             color: "#4D5C6F",
//           },
//           "& label.Mui-focused": {
//             color: "#4D5C6F",
//           },

//           "& .MuiInput-underline:after": {
//             borderBottomColor: "#A5B6CD",
//           },
//           "& .MuiOutlinedInput-root": {
//             "& fieldset": {
//               borderColor: "#A5B6CD",
//             },
//             "&:hover fieldset": {
//               borderColor: "#A5B6CD",
//             },
//             "&.Mui-focused fieldset": {
//               borderColor: "#A5B6CD",
//             },
//           },
//         },
//       },
//     },
//   },
// });
