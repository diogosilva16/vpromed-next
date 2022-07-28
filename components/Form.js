import React, { useState } from "react";
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
import Observer from "@researchgate/react-intersection-observer";

const Form = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [choice, setChoice] = useState(null);
  const [playAnim, setPlayAnim] = useState("");

  const playAnimation = (event, unobserve) => {
    if (event.isIntersecting) {
      unobserve();
    }
    setPlayAnim(
      event.isIntersecting ? "animate__animated animate__fadeInRight" : ""
    );
  };

  const submitForm = async (e) => {
    e.preventDefault();

    const formInfo = {
      name: name,
      contact: contact,
      choice: choice === 1 ? "Marcar uma consulta" : "Pedir informações",
    };

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formInfo),
    };

    let res = await fetch(
      `https://www.critecnow.com/promed/api/formSend/t8rAzpkJR8O3kDZdw63h85GDrV86VOeX`,
      requestOptions
    );
    let resJson = await res.json();
    if (res.status === 200) {
      console.log("WORKED");
    } else {
      console.log("Some error occured");
    }

    console.log(formInfo);
  };

  const updateName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const updateContact = (e) => {
    e.preventDefault();
    setContact(e.target.value);
  };

  return (
    <Box>
      <Observer onChange={playAnimation}>
        <Grid container className={`${isMobile || isTablet ? "" : playAnim}`}>
          <Grid item xs={12} pb={3} pt={5} sx={{ textTransform: "uppercase" }}>
            <Typography
              variant="subtitle1"
              sx={{ fontSize: isMobile && "0.8125rem" }}
            >
              Os nossos especialistas cuidam de si
            </Typography>
            <Typography variant={isMobile ? "h4" : "h2"}>
              Agende a sua consulta
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <form onSubmit={submitForm}>
              <FormGroup>
                <Grid container spacing={2} direction="row">
                  <Grid item>
                    <TextField
                      variant="filled"
                      label="Nome"
                      required
                      sx={{
                        width: "300px",
                        background: "white",
                        borderRadius: "5px",
                      }}
                      onChange={updateName}
                    ></TextField>
                  </Grid>
                  <Grid item>
                    <TextField
                      variant="filled"
                      label="Contacto"
                      required
                      sx={{
                        width: "300px",
                        background: "white",
                        borderRadius: "5px",
                      }}
                      onChange={updateContact}
                      type="number"
                      onInput={(e) => {
                        e.target.value = Math.max(0, parseInt(e.target.value))
                          .toString()
                          .slice(0, 9);
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
                        width: "300px",
                        fontFamily: "Mulish",
                        fontWeight: "regular",
                        fontSize: isMobile && "0.8125rem",
                        "&:focus": {
                          background: "black",
                        },
                      }}
                      onClick={() => {
                        setChoice(1);
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
                        width: "300px",
                        fontFamily: "Mulish",
                        fontWeight: "regular",
                        fontSize: isMobile && "0.8125rem",
                        "&:focus": {
                          background: "black",
                        },
                      }}
                      onClick={() => {
                        setChoice(2);
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
                          fontFamily: "Mulish",
                          fontWeight: "regular",
                          fontSize: isMobile && "1rem",
                        }}
                      />
                    }
                    label="Li e aceito os termos e condições e a política de privacidade"
                  />
                </Grid>
                <Grid item pt={2}>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      background:
                        "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(50,50,50,1) 85%, rgba(62,62,62,1) 100%)",
                      border: "1px solid #CEC568",
                      width: isMobile || isTablet ? "50%" : "10%",
                      "&:disabled": {
                        color: "white",
                        background: "transparent",
                      },
                    }}
                    disabled={
                      name === "" || contact === "" || choice === null
                        ? true
                        : false
                    }
                  >
                    Enviar
                  </Button>
                </Grid>
              </FormGroup>
            </form>
          </Grid>
        </Grid>
      </Observer>
    </Box>
  );
};

export default Form;
