import React, { useState, useEffect } from "react";
import { Container, Grid, Box, Typography } from "@mui/material";
import Loader from "../../components/Loader";
import Team from "../../components/Team";

const Sobre = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [companyAbout, setCompanyAbout] = useState([]);

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

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && !hasError && (
        <Container maxWidth="xl">
          <Grid container pt={20} pb={5}>
            <Box sx={{ width: "100vw", background: "black" }}>
              <Grid item xs={12} pb={3} className="borderEspecialidade">
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
                  }}
                  variant="body1"
                >
                  {JSON.parse(companyAbout.CUSTOMCAMPS).small_description}
                </Typography>
              </Grid>
            </Box>
            <Grid container pt={3} sx={{ color: "white" }}>
              <Grid item xs={12}>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "Times New Roman",
                    textTransform: "uppercase",
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
                <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
                  {companyAbout.TEXT_SEO}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Team />
        </Container>
      )}
    </>
  );
};

export default Sobre;
