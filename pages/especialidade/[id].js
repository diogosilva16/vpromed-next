import React, { useState } from "react";
import { Grid, Container, Typography, Box, useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
import Form from "../../components/Form";
import { useEffect } from "react";
import Loader from "../../components/Loader";
import { useTheme } from "@emotion/react";
import Sweet from "../../components/Sweet";
import Separator from "../../components/Separator";
import Head from "next/head";

const Especialidade = () => {
  // const API_KEY = process.env.API_KEY;
  const theme = useTheme();

  const router = useRouter();
  let { id } = router.query;

  const [wait, setWait] = useState(true);

  const timer = setTimeout(() => setWait(false), 1500);

  useEffect(() => {
    return () => {
      clearTimeout(timer);
    };
  }, [timer]);

  const [especialidadeInfo, setEspecialidadeInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const getEspecialidadeInfo = async () => {
    try {
      if (!id) return;
      const response = await fetch(
        `https://www.critecnow.com/promed/api/article/t8rAzpkJR8O3kDZdw63h85GDrV86VOeX/${id}/1`
      );
      const data = await response.json();
      setEspecialidadeInfo(data);
      setIsLoading(false);
    } catch (error) {
      setHasError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getEspecialidadeInfo();
  }, [id, isLoading]);

  return (
    <>
     <Head>
        <title>V-Promed Especialidades</title>
        <meta name="description" content="V-Promed especialidades" />
        <meta charset="UTF-8" />
      </Head>
      {isLoading && <Loader />}
      {!isLoading && !hasError && (
        <Container maxWidth="xl">
          <Grid container pt={(isMobile ? 7 : isTablet) ? 10 : 15} pb={5}>
            <Box
              sx={{
                zIndex: 0,
                position: "absolute",
                left: "calc(-50vw + 50%)",
              }}
            >
              {isMobile && (
                <img src={especialidadeInfo.IMAGES[1]?.FILE} width="100%" />
              )}
            </Box>
            <Box
              sx={{
                zIndex: 1,
                position: "relative",
              }}
            >
              <Grid item xs={12} pt={1} pb={3} className="borderEspecialidade">
                <Typography
                  variant={(isMobile || isTablet) ? "h5" : "h4"}
                  style={{ color: "white", textTransform: "uppercase" }}
                >
                  Especialidades
                </Typography>
              </Grid>
              <Grid item xs={12} pt={5} pb={5}>
                <Typography
                  sx={{
                    color: "white",
                    textTransform: "uppercase",
                    fontFamily: "Times New Roman",
                    fontSize: "1.25rem",
                  }}
                >
                  <span style={{ color: "#CEC568" }}>
                    A {especialidadeInfo.NAME_SEO} divide-se em {""}
                  </span>
                  várias áreas de intervenção.
                </Typography>
              </Grid>
            </Box>
            <Grid container pt={3} pb={5} sx={{ color: "white" }}>
              <Grid item xs={12}>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "Times New Roman",
                    textTransform: "uppercase",
                    fontSize: "2.25rem",
                  }}
                >
                  {especialidadeInfo.NAME_SEO}
                </Typography>
              </Grid>
              <Grid item xs={12} pt={2}>
                <Typography
                  sx={{
                    whiteSpace: "pre-line",
                    fontFamily: "Mulish",
                    fontSize: "1.125rem",
                  }}
                >
                  {especialidadeInfo.TEXT_SEO}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Sweet />
          <Separator />
          {!wait && <Form />}
        </Container>
      )}
    </>
  );
};

export default Especialidade;
