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
import Loader from "../../components/utils/Loader";
import { useTheme } from "@emotion/react";
import { CompanyInfoContext } from "../../context/CompanyInfoContext";
import Head from "next/head";
import ContactCard from "../../components/ContactCard";
const API_KEY = process.env.API_KEY;

const Contactos = ({ mobData, horData, locData }) => {
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
        <meta property="og:title" content="V-Promed Contactos" />
        <meta property="og:description" content="Entre em contacto connosco!" />
      </Head>
      {isLoading && <Loader />}
      {!isLoading && !hasError && (
        <Container maxWidth="xl">
          <Grid container pt={isMobile ? 10 : 15}>
            <Box sx={{ width: "100%" }}>
              <Grid item xs={12} md={6} pb={3} className="borderEspecialidade">
                <Typography
                  variant={isMobile || isTablet ? "h5" : "h4"}
                  style={{ color: "white", textTransform: "uppercase" }}
                >
                  Contactos
                </Typography>
              </Grid>
              <Box textAlign="center" pt={5}>
                <Container maxWidth="xl">
                  <Grid
                    container
                    gap={5}
                    display="flex"
                    justifyContent="center"
                  >
                    <Grid item md={5} xs={12}>
                      <ContactCard
                        title={"Águeda"}
                        locData={locData}
                        mobData={mobData}
                        horData={horData}
                        localidade={companyInfo[6].VALUE}
                        mobile={companyInfo[10].VALUE}
                        phone={companyInfo[16].VALUE}
                        horario={companyInfo[8].VALUE}
                      />
                    </Grid>
                    <Grid item md={5} xs={12}>
                      <ContactCard
                        title={"Barrô"}
                        locData={locData}
                        mobData={mobData}
                        horData={horData}
                        localidade={companyInfo[7].VALUE}
                        mobile={companyInfo[11].VALUE}
                        phone={companyInfo[17].VALUE}
                        horario={companyInfo[9].VALUE}
                      />
                    </Grid>
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
    `https://www.vmedapi.criteclx.com/api/filebyid/${API_KEY}/33/1`
  );
  const mobData = await mobileResponse.json();
  const horarioResponse = await fetch(
    `https://www.vmedapi.criteclx.com/api/filebyid/${API_KEY}/36/1`
  );
  const horData = await horarioResponse.json();
  const localResponse = await fetch(
    `https://www.vmedapi.criteclx.com/api/filebyid/${API_KEY}/37/1`
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
