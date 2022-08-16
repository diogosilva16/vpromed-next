import styles from "../styles/Home.module.css";
import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import "animate.css";
import { useTheme } from "@emotion/react";
import Head from "next/head";

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [clicked, setClicked] = useState(false);
  const [teste, setTeste] = useState("animate__animated animate__fadeIn");
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTeste("animate__animated animate__fadeOut");
      setClicked(true);
      setVisible(false);
    }, 3000);
  }, []);

  return (
    <>
      <Head>
        <title>Dentárias V-Promed</title>
        <meta name="description" content="Dentárias V-Promed" />
        <meta charset="UTF-8" />
      </Head>
      <Container
        maxWidth="xxl"
        sx={{
          width: "100vw",
          background: "black",
          color: "white",
          overflow: "hidden",
        }}
      >
        <Grid
          container
          pt={10}
          justifyContent="center"
          alignItems="center"
          direction="column"
          sx={{ height: "100vh", position: "relative" }}
        >
          <Grid
            item
            sx={{
              zIndex: "1",
              position: "absolute",
              top: isMobile ? "0" : "",
            }}
          >
            {/* visibility because just removing the element was not placing the other elements in the right spot :)*/}
            <Typography
              className={teste}
              sx={{
                fontFamily: "Times New Roman",
                backgroundImage:
                  "linear-gradient(135deg, hsla(55, 51%, 40%, 1) 0%,hsla(55, 50%, 10%, 1) 60%, hsla(0, 0%, 0%, 1) 100%)",
                backgroundClip: "text",
                color: "transparent",
                fontWeight: "bold",
                fontSize: isMobile ? "40rem" : "90vw",
              }}
            >
              V
            </Typography>
          </Grid>
          <Grid item sx={{ zIndex: "2" }}>
            <Typography
              sx={{ textTransform: "uppercase", fontFamily: "Times New Roman", fontSize: isMobile ? "1.6rem" : "3rem" }}
              className="animate__animated animate__zoomIn"
              letterSpacing={3}
            >
              Dentárias <span style={{ color: "#CEC568" }}>V</span>-Promed
            </Typography>
          </Grid>
          {/* visibility because just removing the element was not placing this in the right spot :)*/}
          <Box
            style={{
              visibility: clicked ? "visible" : "hidden",
              textAlign: "center",
              zIndex: 2,
            }}
          >
            <Grid item pt={5}>
              <Typography
              letterSpacing={3}
                sx={{
                  textTransform: "uppercase",
                  fontFamily: "Times New Roman",
                  color: "#CEC568",
                  fontSize: isMobile ? "1.875rem" : "3rem",
                }}
                className={clicked && "animate__animated animate__fadeIn"}
              >
                Bem vindo
              </Typography>
            </Grid>
            <Grid item pt={5}>
              <Link href="/inicio">
                <Button
                  variant="contained"
                  sx={{
                    background:
                      "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(50,50,50,1) 85%, rgba(62,62,62,1) 100%)",
                    border: "1px solid #CEC568",
                    width: "150px",
                    "&:hover": {
                      color: "#CEC568",
                    },
                  }}
                  className={clicked && "animate__animated animate__fadeIn"}
                >
                  Entrar
                </Button>
              </Link>
            </Grid>
          </Box>
        </Grid>
      </Container>
    </>
  );
}
