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

const MobileForm = () => {
  const API_KEY = process.env.API_KEY;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [choice, setChoice] = useState();
  const [buttonText, setButtonText] = useState("Enviar");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [checked, setChecked] = useState(false);

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
      `https://www.critecnow.com/promed/api/formSend/${API_KEY}`,
      requestOptions
    )
      .then((response) => response.text())
      .then(
        (result) => setFormSubmitted(true),
        setName(""),
        setContact(""),
        setChoice(),
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

  const handleButtonText = () => {
    setButtonText("Enviado com sucesso");
    setTimeout(() => {
      setButtonText("Enviar");
    }, 2000);
  };

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
          <form onSubmit={submitForm}>
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
                      width: "200px",
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
                      width: "200px",
                      "&:focus": {
                        background: "black",
                      },
                      backgroundColor: choice === 1 ? "black" : "transparent",
                      fontFamily: "Mulish",
                      fontWeight: "regular",
                      fontSize: isMobile && "0.8125rem",
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
                      width: "200px",
                      "&:focus": {
                        background: "black",
                      },
                      backgroundColor: choice === 2 ? "black" : "transparent",
                      fontFamily: "Mulish",
                      fontWeight: "regular",
                      fontSize: isMobile && "0.8125rem",
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
                    width: isMobile || isTablet ? "90%" : "10%",
                    "&:disabled": {
                      color: "white",
                      background: "transparent",
                    },
                  }}
                  onClick={handleButtonText}
                  disabled={
                    name === "" || contact === "" || choice === ""
                      ? true
                      : false
                  }
                >
                  {buttonText}
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
