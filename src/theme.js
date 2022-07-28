import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#CEC568",
    },
  },
  typography: {
    h1: {},
    h2: {
      color: "#CEC568",
      fontFamily: "Times New Roman",
    },
    h3: { fontFamily: "Times New Roman", fontSize: "2.25rem" },
    h4: {
      color: "#CEC568",
      fontFamily: "Times New Roman",
      fontSize: "2.25rem",
    },
    h5: {
      fontFamily: "Mulish",
      fontSize: "0.75rem",
    },
    h6: {
      fontFamily: "Mulish",
      fontSize: "1rem",
      fontWeight: "bold",
    },
    body1: {
      fontFamily: "Mulish",
      fontWeight: "regular",
      fontSize: "1rem",
    },
    body2: {},
    subtitle1: {
      color: "#fff",
      textTransform: "uppercase",
      fontSize: "1.5rem",
      fontFamily: "Mulish",
      fontWeight: "bold",
    },
    subtitle2: {
      fontFamily: "Mulish",
      fontWeight: "bold",
    },
    caption: {},
    button: {},
  },
  components: {
    MuiAccordionSummary: {
      styleOverrides: {
        content: {
          flexGrow: 0,
        },
      },
    },
  },
});

export default theme;
