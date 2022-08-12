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
import DentalSweet from "../../components/DentalSweet";

const Especialidade = () => {
  const API_KEY = process.env.API_KEY;
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
        `https://www.critecnow.com/promed/api/article/${API_KEY}/${id}/1`
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

  const getCardImg = (code) => {
    return especialidadeInfo?.IMAGES?.find((x) => x.CODE === code)?.FILE ?? "";
  };

  const desktopImg = getCardImg("desktop");
  const mobileImg = getCardImg("mobile");

  return (
    <>
      <Head>
        <title>V-Promed Especialidades</title>
        <meta name="description" content="V-Promed especialidades" />
        <meta charset="UTF-8" />
      </Head>
      {isLoading && <Loader />}
      {!isLoading && !hasError && (
        <Container maxWidth="xxl">
          <Grid container pt={isMobile ? 7 : isTablet ? 8 : 12} pb={5}>
            {isMobile && (
              <Box
                sx={{
                  zIndex: 0,
                  position: "absolute",
                  left: "calc(-50vw + 50%)",
                }}
              >
                <img src={mobileImg} width="100%" />
              </Box>
            )}
            <Box
            justifyContent="center"
              display="flex"
              flexDirection="column"
              sx={{
                zIndex: 1,
                width: "100%",
                height: !isMobile && "392px",
                position: "relative",
                backgroundImage: !isMobile && `url(${desktopImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Container maxWidth="xl">
                <Grid
                  item
                  xs={12}
                  pt={1}
                  pb={3}
                  className="borderEspecialidade"
                  display={!isMobile && "flex"}
                  alignItems={!isMobile && "flex-end"}
                >
                  <Typography
                    variant={isMobile || isTablet ? "h5" : "h4"}
                    style={{
                      color: "white",
                      textTransform: "uppercase",
                      fontFamily: "Mulish, sans-serif",
                    }}
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
                    {JSON.parse(especialidadeInfo.CUSTOMCAMPS)?.title}
                  </Typography>
                </Grid>
              </Container>
            </Box>
            <Container maxWidth="xl">
              <Grid
                container
                pt={isMobile ? 10 : 5}
                pb={5}
                sx={{ color: "white" }}
              >
                <Grid item xs={12}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: "Times New Roman",
                      textTransform: "uppercase",
                      fontSize: "2.25rem",
                      color: "#CEC568",
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
            </Container>
          </Grid>
          <Container maxWidth="xl">
            {id != 3 ? <Sweet /> : <DentalSweet />}
          </Container>
          <Separator />
          <Container maxWidth="xl">{!wait && <Form />}</Container>
        </Container>
      )}
    </>
  );
};

export default Especialidade;
