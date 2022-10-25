import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#CEC568",
    },
    neutral: {
      main: '#fff',
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
      fontFamily: "Manrope",
      fontSize: "0.75rem",
    },
    h6: {
      fontFamily: "Manrope",
      fontSize: "1rem",
      fontWeight: "bold",
    },
    body1: {
      fontFamily: "Manrope",
      fontWeight: "regular",
      fontSize: "1rem",
    },
    body2: {},
    subtitle1: {
      color: "#fff",
      textTransform: "uppercase",
      fontSize: "1.5rem",
      fontFamily: "Manrope",
      fontWeight: "bold",
    },
    subtitle2: {
      fontFamily: "Manrope",
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
    MuiFilledInput: {
      styleOverrides: {
        input: {
          color: "#fff",
          "&::before": {
            borderBottom: "1px solid #fff" ,
          },
          "&::after": {
            borderBottom: "1px solid #fff",
          },
        },
      },
    },
  },
});

export default theme;
