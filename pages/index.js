import styles from '../styles/Home.module.css'
import React, { useState } from 'react'
import {Container, Grid, Typography, Button, Box } from '@mui/material'
import Link from 'next/link'

export default function Home() {
  const [clicked, setClicked] = useState(false);

  return (
    <Container
      maxWidth="xxl"
      sx={{
        width: "100vw",
        background: "black",
        color: "white",
        overflow: "hidden",
      }}
      onClick={() => setClicked(true)}
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
            top: "0",
            visibility: clicked ? "hidden" : "visible",
          }}
        >
          {/* visibility because just removing the element was not placing the other elements in the right spot :)*/}
          <Typography
            sx={{
              fontFamily: "Times New Roman",
              backgroundImage:
                "linear-gradient(135deg, hsla(55, 51%, 61%, 1) 0%, hsla(0, 0%, 0%, 1) 100%)",
              backgroundClip: "text",
              color: "transparent",
              fontSize: "40rem",
            }}
          >
            V
          </Typography>
        </Grid>
        <Grid item sx={{ zIndex: "2" }}>
          <Typography
            variant="h5"
            sx={{ textTransform: "uppercase", fontFamily: "Times New Roman" }}
          >
            Dentárias <span style={{ color: "#CEC568" }}>V</span>-Promed
          </Typography>
        </Grid>
        {/* visibility because just removing the element was not placing this in the right spot :)*/}
        <Box style={{ visibility: clicked ? "visible" : "hidden" }}>
          <Grid item pt={5}>
            <Typography
              variant="h5"
              sx={{
                textTransform: "uppercase",
                fontFamily: "Times New Roman",
                color: "#CEC568",
              }}
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
              >
                Entrar
              </Button>
            </Link>
          </Grid>
        </Box>
      </Grid>
    </Container>
  )
}
