import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";
import { Appbar, Form } from "./components";

const theme = createTheme({
  typography: {
    fontFamily: "'Montserrat', sans-serif",
  },
});

export const App = () => (
  <>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Appbar />
      <Form />
    </ThemeProvider>
  </>
);
