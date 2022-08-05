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
  Alert,
  Collapse,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@emotion/react";
import Observer from "@researchgate/react-intersection-observer";

const Form = () => {
  const API_KEY = process.env.API_KEY;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [choice, setChoice] = useState(null);
  const [playAnim, setPlayAnim] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFeedback, setOpenFeedback] = useState(true);
  const [checked, setChecked] = useState(false);

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

    setFormSubmitted(false);

    var formdata = new FormData();
    formdata.append("name", name);
    formdata.append("contact", contact);
    formdata.append(
      "choice",
      choice === 1 ? "Marcar uma consulta" : "Pedir informações"
    );

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(
      `https://www.critecnow.com/promed/api/formSend/$API_KEY}`,
      requestOptions
    )
      .then((response) => response.text())
      .then(
        (result) => setFormSubmitted(true),
        setName(""),
        setContact(""),
        setChoice(),
        setOpenFeedback(true),
        setChecked(false)
      )
      .catch((error) => console.log("error", error));
  };

  const updateName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const updateContact = (e) => {
    e.preventDefault();
    setContact(e.target.value);
  };

  const handleChecked = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <>
      <Box>
        <Observer onChange={playAnimation}>
          <Grid container className={`${isMobile || isTablet ? "" : playAnim}`}>
            <Grid
              item
              xs={12}
              pb={3}
              pt={5}
              sx={{ textTransform: "uppercase" }}
            >
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
                        value={name}
                      ></TextField>
                    </Grid>
                    <Grid item>
                      <TextField
                        variant="filled"
                        label="Contacto"
                        required
                        value={contact}
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
                          backgroundColor:
                            choice === 1 ? "black" : "transparent",
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
                          backgroundColor:
                            choice === 2 ? "black" : "transparent",
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
                          checked={checked}
                          onChange={handleChecked}
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
                        name === "" || contact === "" || choice === ""
                          ? true
                          : false
                      }
                    >
                      Enviar
                    </Button>
                  </Grid>
                </FormGroup>
              </form>
              {formSubmitted && (
                <Box pt={2}>
                  <Collapse in={openFeedback}>
                    <Alert
                      variant="standard"
                      color="success"
                      action={
                        <IconButton
                          aria-label="close"
                          variant="filled"
                          onClick={() => {
                            setOpenFeedback(false);
                            setFormSubmitted(false);
                          }}
                          sx={{ color: "#fff" }}
                        >
                          <CloseIcon fontSize="inherit" w />
                        </IconButton>
                      }
                      sx={{
                        "& .MuiAlert-icon": {
                          color: "#fff",
                        },
                        width: isMobile || isTablet ? "80vw" : "40vw",
                        // backgroundColor: "#2a2a2a",
                        background:
                          "linear-gradient(180deg, hsla(160, 34%, 29%, 1) 0%, hsla(158, 43%, 18%, 1) 100%)",
                        boxShadow: " 0px 10px 15px -3px rgba(0,0,0,0.1)",
                        color: "#fff",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#fff",
                          textTransform: "uppercase",
                          fontFamily: "Mulish",
                        }}
                      >
                        Pedido de agendamento enviado com sucesso.
                      </Typography>
                    </Alert>
                  </Collapse>
                </Box>
              )}
            </Grid>
          </Grid>
        </Observer>
      </Box>
    </>
  );
};

export default Form;
