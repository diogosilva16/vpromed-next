import React, { useState, useEffect, useContext } from "react";
import {
  Accordion,
  Box,
  Container,
  Grid,
  Typography,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
} from "@mui/material";
import Form from "../../components/Form";
import Loader from "../../components/Loader";
import { useTheme } from "@emotion/react";
import { CompanyInfoContext } from "../../context/CompanyInfoContext";
import Head from "next/head";

const Contactos = ({ mobData, horData, locData }) => {
  const API_KEY = process.env.API_KEY;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const { companyInfo, isLoading, hasError } = useContext(CompanyInfoContext);

  return (
    <>
      <Head>
        <title>V-Promed Contactos</title>
        <meta name="description" content="V-Promed Contactos" />
        <meta charset="UTF-8" />
      </Head>
      {isLoading && <Loader />}
      {!isLoading && !hasError && (
        <Container maxWidth="xl">
          <Grid container pt={isMobile ? 10 : 15}>
            <Box sx={{ width: "100%" }}>
              <Grid item xs={12}>
                <Typography
                  variant={isMobile || isTablet ? "h5" : "h4"}
                  style={{ color: "white", textTransform: "uppercase" }}
                >
                  Contactos
                </Typography>
              </Grid>
              <Box textAlign="center" pt={5}>
                <Container maxWidth="xs">
                  <Grid item xs={12}>
                    <Accordion
                      sx={{
                        background:
                          "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(50,50,50,1) 85%, rgba(62,62,62,1) 100%)",
                        color: "white",
                      }}
                    >
                      <AccordionSummary sx={{ flexGrow: 0 }}>
                        <Typography
                          variant={isMobile ? "h4" : "h2"}
                          sx={{
                            color: "white",
                            textTransform: "uppercase",
                            fontFamily: "Times New Roman",
                          }}
                        >
                          Águeda
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Box>
                          <img src={locData.FILE} width={40} />
                          <Typography>{companyInfo[6].VALUE}</Typography>
                        </Box>
                        <Box pt={3}>
                          <img src={mobData.FILE} width={40} />
                          <Typography>{companyInfo[10].VALUE}</Typography>
                        </Box>
                        <Box pt={3}>
                          <img src={horData.FILE} width={40} />
                          <Typography>{companyInfo[8].VALUE}</Typography>
                        </Box>
                      </AccordionDetails>
                    </Accordion>
                  </Grid>
                  <Grid item xs={12} pt={3}>
                    <Accordion
                      sx={{
                        background:
                          "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(50,50,50,1) 85%, rgba(62,62,62,1) 100%)",
                        color: "white",
                        // "&:hover": {
                        //   background:
                        //     "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(96,96,96,1) 85%, rgba(255,255,255,0) 100%)",
                        // },
                      }}
                    >
                      <AccordionSummary>
                        <Typography
                          variant={isMobile ? "h4" : "h2"}
                          sx={{
                            color: "white",
                            textTransform: "uppercase",
                            fontFamily: "Times New Roman",
                          }}
                        >
                          Barrô
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Box>
                          <img src={locData.FILE} width={40} />
                          <Typography>{companyInfo[7].VALUE}</Typography>
                        </Box>
                        <Box pt={3}>
                          <img src={mobData.FILE} width={40} />
                          <Typography>{companyInfo[11].VALUE}</Typography>
                        </Box>
                        <Box pt={3}>
                          <img src={horData.FILE} width={40} />
                          <Typography>{companyInfo[9].VALUE}</Typography>
                        </Box>
                      </AccordionDetails>
                    </Accordion>
                  </Grid>
                </Container>
              </Box>
              <Form />
            </Box>
          </Grid>
        </Container>
      )}
    </>
  );
};

export async function getStaticProps() {
  const mobileResponse = await fetch(
    `https://www.critecnow.com/promed/api/filebyid/${API_KEY}/33/1`
  );
  const mobData = await mobileResponse.json();
  const horarioResponse = await fetch(
    `https://www.critecnow.com/promed/api/filebyid/${API_KEY}/36/1`
  );
  const horData = await horarioResponse.json();
  const localResponse = await fetch(
    `https://www.critecnow.com/promed/api/filebyid/${API_KEY}/37/1`
  );
  const locData = await localResponse.json();

  return {
    props: {
      mobData,
      horData,
      locData,
    },
  };
}
export default Contactos;
