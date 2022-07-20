import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#FFD700",
    },
  },
  typography: {
    h1: {},
    h2: {
      color: "#CEC568",
      fontFamily: "Times New Roman",
    },
    h3: {},
    h4: { color: "#CEC568", fontFamily: "Times New Roman" },
    body1: {},
    body2: {},
    subtitle1: {
      color: "#fff",
      textTransform: 'uppercase',
      fontSize: "1.5rem"
    },
    subtitle2: {},
    caption: {},
    button: {},
  },
});

export default theme;
