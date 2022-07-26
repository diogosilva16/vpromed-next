import { Grid, Typography, Paper, Box, useMediaQuery } from "@mui/material";
import React, { useContext, useState } from "react";
import { CompanySpecialitiesContext } from "../context/CompanySpecialitiesContext";
import Link from "next/link";
import Loader from "./Loader";
import Observer from "@researchgate/react-intersection-observer";
import { useTheme } from "@emotion/react";

const Especialidades = () => {
  const { espec, especIsLoading, especHasError } = useContext(
    CompanySpecialitiesContext
  );

  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const [especAnim, setEspecAnim] = useState("");

  const playEspecAnim = (event, unobserve) => {
    if (event.isIntersecting) {
      unobserve();
    }
    setEspecAnim(
      event.isIntersecting ? "animate__animated animate__fadeInLeft" : ""
    );
  };

  const renderEspecialidades = () => {
    return espec.map((especialidade, key) => (
      <Grid
        item
        xs={6}
        md={3}
        key={key}
        className={`${isMobile || isTablet ? "" : especAnim}`}
      >
        <Link href={`/especialidade/${especialidade.ARTICLE_ID}`}>
          <a>
            <Paper
              sx={{
                textAlign: "center",
                background:
                  "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(50,50,50,1) 85%, rgba(62,62,62,1) 100%)",
              }}
              elevation={24}
            >
              <img src="https://via.placeholder.com/150" alt="Especialidade" />
            </Paper>
            <Typography
              sx={{ color: "white", textAlign: "center" }}
              variant="subtitle2"
            >
              {especialidade.NAME_SEO}
            </Typography>
          </a>
        </Link>
      </Grid>
    ));
  };

  return (
    <Box>
      {especIsLoading && <Loader />}
      {!especIsLoading && !especHasError && (
        <Grid container>
          <Grid item xs={12} pb={10} pt={5} sx={{ textTransform: "uppercase" }}>
            <Typography variant="subtitle1">Especialidades</Typography>
            <Typography variant="h2">Conheça-nos</Typography>
          </Grid>
          <Observer onChange={playEspecAnim}>
            <Grid
              container
              spacing={5}
              columnSpacing={5}
              pb={10}
              sx={{ textTransform: "uppercase", wordWrap: "break-word" }}
            >
              {renderEspecialidades()}
            </Grid>
          </Observer>
        </Grid>
      )}
    </Box>
  );
};

export default Especialidades;
