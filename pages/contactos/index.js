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
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import Loader from "../../components/Loader";
import { useTheme } from "@emotion/react";
import { CompanyInfoContext } from "../../context/CompanyInfoContext";

const Contactos = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { companyInfo, isLoading, hasError } = useContext(CompanyInfoContext);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && !hasError && (
        <Container maxWidth="xl">
          <Grid container pt={20}>
            <Box sx={{ width: "100%" }}>
              <Grid item xs={12}>
                <Typography variant="h5" style={{ color: "white" }}>
                  Contactos
                </Typography>
              </Grid>
              <Box textAlign="center">
                <Container maxWidth="xs">
                  <Grid item xs={12}>
                    <Accordion
                      sx={{
                        background:
                          "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(50,50,50,1) 85%, rgba(62,62,62,1) 100%)",
                        color: "white",
                      }}
                    >
                      <AccordionSummary sx={{flexGrow: 0}}>
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
                          <EventAvailableIcon />
                          <Typography>{companyInfo[6].VALUE}</Typography>
                        </Box>
                        <Box pt={3}>
                          <EventAvailableIcon />
                          <Typography>{companyInfo[10].VALUE}</Typography>
                        </Box>
                        <Box pt={3}>
                          <EventAvailableIcon />
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
                          <EventAvailableIcon />
                          <Typography>{companyInfo[7].VALUE}</Typography>
                        </Box>
                        <Box pt={3}>
                          <EventAvailableIcon />
                          <Typography>{companyInfo[11].VALUE}</Typography>
                        </Box>
                        <Box pt={3}>
                          <EventAvailableIcon />
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

export default Contactos;
