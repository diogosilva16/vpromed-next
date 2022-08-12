import React, { useState } from "react";
import {
  Grid,
  Container,
  Typography,
  Box,
  Button,
  useMediaQuery,
} from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Loader from "../../components/Loader";
import ButtonComp from "../../components/ButtonComp";
import { useTheme } from "@emotion/react";
import Head from "next/head";

const Destaque = () => {
  const API_KEY = process.env.API_KEY;

  const router = useRouter();
  let { id } = router.query;

  const theme = useTheme();

  const [trendInfo, setTrendInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const getTrendInfo = async () => {
    try {
      if (!id) return;
      const response = await fetch(
        `https://www.critecnow.com/promed/api/article/${API_KEY}/${id}/1`
      );
      const data = await response.json();
      setTrendInfo(data);
      setIsLoading(false);
    } catch (error) {
      setHasError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTrendInfo();
  }, [id, isLoading]);

  const goToContact = () => {
    router.push("/contactos");
  };

  const getTrendImg = (code) => {
    return trendInfo?.IMAGES?.find((x) => x.CODE === code)?.FILE ?? "";
  };

  console.log(getTrendImg("trendDesktop"));
  console.log(getTrendImg("trendMobile"));

  const desktopImg = getTrendImg("trendDesktop");
  const mobileImg = getTrendImg("trendMobile");

  return (
    <>
      <Head>
        <title>V-Promed Tendências</title>
        <meta name="description" content="V-Promed Tendências" />
        <meta charset="UTF-8" />
      </Head>
      {isLoading && <Loader />}
      {!isLoading && !hasError && (
        <Container maxWidth="xl">
          <Grid container pt={isMobile || isTablet ? 10 : 15}>
            <Box sx={{ width: "100vw" }}>
              <Grid item xs={12}>
                <Typography
                  variant={isMobile || isTablet ? "h5" : "h4"}
                  style={{ color: "white", textTransform: "uppercase" }}
                >
                  Tendência
                </Typography>
              </Grid>
              <Grid item xs={12} pt={2} pb={5}>
                <Typography
                  sx={{
                    color: "#CEC568",
                    fontFamily: "Times New Roman",
                    textTransform: "uppercase",
                  }}
                  variant="h3"
                >
                  {trendInfo.NAME_SEO}
                </Typography>
              </Grid>
            </Box>
            <Box sx={{ width: "100vw" }}>
              {isMobile ? (
                <Box
                  sx={{
                    zIndex: 0,
                    position: "absolute",
                    left: "calc(-50vw + 50%)",
                  }}
                >
                  <img src={mobileImg} width="100%" />
                </Box>
              ) : (
                <img src={desktopImg} width="100%" />
              )}
            </Box>
            <Box mt={isMobile && 30} sx={{ zIndex: 1, position: "relative"}}>
              <Grid item xs={12} p={5}>
                <Typography
                  pl={2}
                  sx={{
                    color: "#CEC568",
                    borderLeft: "1px solid #CEC568",
                    fontFamily: "Times New Roman",
                    textTransform: "uppercase",
                    fontSize: "1.25rem",
                  }}
                >
                  Conheça as características do {trendInfo.NAME_SEO}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  sx={{ color: "white", fontSize: "1.25rem" }}
                  variant="body1"
                >
                  {trendInfo.TEXT_SEO}
                </Typography>
              </Grid>
            </Box>
            <Grid item xs={12} pt={5} textAlign="center">
              <ButtonComp text={"Contacte-nos"} goTo={goToContact} />
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
};

export default Destaque;
