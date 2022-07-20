import React from "react";
import {
  Box,
  FormGroup,
  Grid,
  TextField,
  Typography,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@emotion/react";

const MobileForm = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box>
      <Grid container>
        <Grid item xs={12} sx={{ textTransform: "uppercase" }}>
          <Typography sx={{ color: "white" }} fontSize={10}>
            Os nossos especialistas cuidam de si
          </Typography>
          <Typography
            fontSize={25}
            sx={{ color: "#CEC568", fontFamily: "Times New Roman" }}
            pt={1}
          >
            Agende a sua consulta
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <form>
            <FormGroup>
              <Grid container spacing={2} direction="row">
                <Grid item>
                  <TextField
                    variant="filled"
                    label="Nome"
                    required
                    sx={{
                      width: "200px",
                      background: "white",
                      borderRadius: "5px",
                    }}
                  ></TextField>
                </Grid>
                <Grid item>
                  <TextField
                    variant="filled"
                    label="Contacto"
                    required
                    sx={{
                      width: "200px",
                      background: "white",
                      borderRadius: "5px",
                    }}
                  ></TextField>
                </Grid>
              </Grid>
              <Grid container spacing={2} direction="row" pt={2}>
                <Grid item>
                  <Button
                    sx={{
                      color: "white",
                      textTransform: "uppercase",
                      border: "1px solid white",
                      width: "200px",
                    }}
                  >
                    Marcar uma consulta
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    sx={{
                      color: "white",
                      textTransform: "uppercase",
                      border: "1px solid white",
                      width: "200px",
                    }}
                  >
                    Pedir informações
                  </Button>
                </Grid>
              </Grid>
              <Grid item pt={2}>
                <FormControlLabel
                  sx={{ color: "white" }}
                  control={
                    <Checkbox
                      required
                      sx={{
                        color: "white",
                      }}
                    />
                  }
                  label="Li e aceito os termos e condições e a política de privacidade"
                />
              </Grid>
              <Grid item pt={2} textAlign="center">
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    background:
                      "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(50,50,50,1) 85%, rgba(62,62,62,1) 100%)",
                    border: "1px solid #CEC568",
                    width: isMobile || isTablet ? "90%" : "10%",
                  }}
                >
                  Enviar
                </Button>
              </Grid>
            </FormGroup>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MobileForm;
