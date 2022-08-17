import React, { useState, useEffect } from "react";
import { Container, Grid, Box, Typography, useMediaQuery } from "@mui/material";
import Loader from "../../components/utils/Loader";
import Team from "../../components/Team";
import Especialidades from "../../components/Especialidades";
import { useTheme } from "@emotion/react";
import Form from "../../components/Form";
import Separator from "../../components/Separator";
import Head from "next/head";
import DOMPurify from "dompurify";

const Sobre = () => {
  const API_KEY = process.env.API_KEY;

  const theme = useTheme();

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [companyAbout, setCompanyAbout] = useState([]);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const getCompanyAbout = async () => {
    try {
      const response = await fetch(
        `https://www.vmedapi.criteclx.com/api/section/t8rAzpkJR8O3kDZdw63h85GDrV86VOeX/1/1`
      );
      const data = await response.json();
      setCompanyAbout(data);
      setIsLoading(false);
    } catch (error) {
      setHasError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCompanyAbout();
  }, [isLoading]);

  console.log(companyAbout);
  return (
    <>
      <Head>
        <title>V-Promed Sobre</title>
        <meta name="description" content="V-Promed Sobre" />
        <meta charset="UTF-8" />
      </Head>
      {isLoading && <Loader />}
      {!isLoading && !hasError && (
        <Container maxWidth="xxl">
          <Grid container pt={isMobile ? 7 : isTablet ? 8 : 12} pb={5}>
            <Box
              sx={{
                zIndex: 0,
                position: "absolute",
                left: "calc(-50vw + 50%)",
              }}
            >
              {isMobile && (
                <img src={companyAbout.IMAGES[0]?.FILE} width="100%" alt="mobile image" />
              )}
            </Box>
            <Box
              sx={{
                zIndex: 1,
                width: "100%",
                height: !isMobile && "392px",
                position: "relative",
                backgroundImage:
                  !isMobile && `url(${companyAbout.IMAGES[1]?.FILE})`,
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
                >
                  <Typography
                    variant={isMobile || isTablet ? "h5" : "h4"}
                    style={{ color: "white", textTransform: "uppercase" }}
                  >
                    Dentárias V-Promed
                  </Typography>
                </Grid>
                <Grid item xs={12} pt={isMobile ? 2 : 5} pb={5}>
                  <Typography
                    sx={{
                      color: "white",
                      textTransform: "uppercase",
                      fontFamily: "Times New Roman",
                      fontSize: "1.15rem",
                    }}
                  >
                    {JSON.parse(companyAbout.CUSTOMCAMPS).small_description}
                  </Typography>
                </Grid>
              </Container>
            </Box>
            <Container maxWidth="xl">
              <Grid container pt={isMobile ? 2 : 3} sx={{ color: "white" }}>
                <Grid item xs={12}>
                  <Typography
                    sx={{
                      fontFamily: "Times New Roman",
                      textTransform: "uppercase",
                      fontSize: "2.25rem",
                    }}
                  >
                    Clínica
                  </Typography>
                </Grid>
                <Grid item xs={12} pt={2}>
                  <Typography
                    variant="body1"
                    sx={{
                      textTransform: "uppercase",
                      color: "#CEC568",
                      fontFamily: "Times New Roman",
                    }}
                  >
                    {JSON.parse(companyAbout.CUSTOMCAMPS).small_title}
                  </Typography>
                </Grid>
                <Grid item xs={12} pt={2}>
                  <Typography
                    sx={{
                      whiteSpace: "pre-line",
                      fontFamily: "Mulish",
                      fontSize: "1.125rem",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(companyAbout.TEXT_SEO),
                    }}
                  />
                </Grid>
                <Grid item xs={12} pt={10}>
                  <Typography
                    variant="body1"
                    sx={{
                      textTransform: "uppercase",
                      color: "#CEC568",
                      fontFamily: "Times New Roman",
                    }}
                  >
                    {JSON.parse(companyAbout.CUSTOMCAMPS).small_title2}
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
                    {JSON.parse(companyAbout.CUSTOMCAMPS).text_small_title2}
                  </Typography>
                </Grid>
                <Grid item xs={12} pt={2}>
                  <Typography
                    variant="body1"
                    sx={{
                      textTransform: "uppercase",
                      color: "#CEC568",
                      fontFamily: "Times New Roman",
                    }}
                  >
                    {JSON.parse(companyAbout.CUSTOMCAMPS).small_title3}
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
                    {JSON.parse(companyAbout.CUSTOMCAMPS).text_small_tittle3}
                  </Typography>
                </Grid>
                <Grid item xs={12} pt={2}>
                  <Typography
                    variant="body1"
                    sx={{
                      textTransform: "uppercase",
                      color: "#CEC568",
                      fontFamily: "Times New Roman",
                    }}
                  >
                    {JSON.parse(companyAbout.CUSTOMCAMPS).small_title_4}
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
                    {JSON.parse(companyAbout.CUSTOMCAMPS).text_small_title4}
                  </Typography>
                </Grid>
              </Grid>
            </Container>
          </Grid>
          <Container maxWidth="xl">
            <Team />
            <Especialidades />
          </Container>
          <Separator />
          <Container maxWidth="xl">
            <Form />
          </Container>
        </Container>
      )}
    </>
  );
};

export default Sobre;
