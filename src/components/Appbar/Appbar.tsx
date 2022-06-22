import { AppBar, Box, Toolbar } from "@mui/material";

import { styles } from "./styles";
import Logo from "../../assets/img/logo.png";

export const Appbar = () => (
  <Box sx={styles.Appbar}>
    <AppBar position="static">
      <Toolbar sx={styles.Appbar_toolbar}>
        <img src={Logo} alt="Logo" style={styles.Appbar_logo} />
      </Toolbar>
    </AppBar>
  </Box>
);
