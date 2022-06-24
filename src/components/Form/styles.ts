import { createTheme } from "@mui/material";

export const styles = {
  Container: {
    marginTop: "100px",
    marginBottom: "100px",
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
  Container_buttons: {
    paddingTop: "45px",
    textAlign: "center",
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
