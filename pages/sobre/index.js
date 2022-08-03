import React, { useState, useEffect } from "react";
import { Container, Grid, Box, Typography, useMediaQuery } from "@mui/material";
import Loader from "../../components/Loader";
import Team from "../../components/Team";
import Especialidades from "../../components/Especialidades";
import { useTheme } from "@emotion/react";
import Form from "../../components/Form";

const Sobre = () => {
  const theme = useTheme();

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [companyAbout, setCompanyAbout] = useState([]);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const getCompanyAbout = async () => {
    try {
      const response = await fetch(
        `https://www.critecnow.com/promed/api/section/t8rAzpkJR8O3kDZdw63h85GDrV86VOeX/1/1`
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
      {isLoading && <Loader />}
      {!isLoading && !hasError && (
        <Container maxWidth="xl">
          <Grid container pt={isMobile ? 7 : 20} pb={5}>
            <Box
              sx={{
                zIndex: 0,
                position: "absolute",
                left: "calc(-50vw + 50%)",
              }}
            >
              <img src={companyAbout.IMAGES[0]?.FILE} width="100%" />
            </Box>
            <Box
              sx={{
                zIndex: 1,
                position: "relative",
              }}
            >
              <Grid item xs={12} pt={1} pb={3} className="borderEspecialidade">
                <Typography
                  variant="h5"
                  style={{ color: "white", textTransform: "uppercase" }}
                >
                  Dentárias V-Promed
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
                  {JSON.parse(companyAbout.CUSTOMCAMPS).small_description}
                </Typography>
              </Grid>
            </Box>
            <Grid container pt={3} sx={{ color: "white" }}>
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
                >
                  {companyAbout.TEXT_SEO}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Team />
          <Especialidades />
          <Form />
        </Container>
      )}
    </>
  );
};

export default Sobre;
