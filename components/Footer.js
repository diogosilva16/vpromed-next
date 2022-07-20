import { Box, Grid, Typography, Container, useMediaQuery } from "@mui/material";
import React, { useContext } from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { useTheme } from "@emotion/react";
import { CompanyInfoContext } from "../context/CompanyInfoContext";
import Loader from "./Loader";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const {
    companyInfo,
    isLoading,
    hasError,
  } = useContext(CompanyInfoContext);

  return (
    <Box>
      {isLoading ? (
        <>
          {" "}
          <Loader />
        </>
      ) : (
        <Container
          maxWidth="xl"
          sx={{ paddingTop: "5rem", textAlign: { xs: "center", md: "left" } }}
        >
          <Box sx={{ borderTop: "solid 1px #CEC568" }}>
            <Grid container pt={5}>
              <Grid item xs={12} md={3}>
                <img src={companyInfo[0]?.VALUE || ""} width={200} alt="Logo" />
              </Grid>
              <Grid item xs={12} md={3} pt={isMobile || (isTablet && 3)}>
                <Typography sx={{ color: "white", textTransform: "uppercase" }}>
                  Horários
                </Typography>
                <Typography sx={{ color: "white", whiteSpace: "pre-wrap" }}>
                  {companyInfo[8].VALUE}
                </Typography>
              </Grid>
              <Grid item xs={12} md={3} pt={isMobile || (isTablet && 3)}>
                <Typography sx={{ color: "white", textTransform: "uppercase" }}>
                  Águeda Clinic
                </Typography>
                <Typography sx={{ color: "white" }}>
                  {companyInfo[10].VALUE}
                </Typography>
              </Grid>
              <Grid item xs={12} md={3} pt={isMobile || (isTablet && 3)}>
                <Typography sx={{ color: "white", textTransform: "uppercase" }}>
                  Barrô Clinic
                </Typography>
                <Typography sx={{ color: "white" }}>
                  {companyInfo[11].VALUE}
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={12}
                pt={5}
                sx={{ textAlign: { xs: "center", md: "left" } }}
              >
                <Typography sx={{ color: "white", textTransform: "uppercase" }}>
                  Siga-nos online
                </Typography>
                <Box sx={{ color: "white" }} pt={1}>
                  <FacebookRoundedIcon sx={{ paddingRight: "0.5rem" }} />
                  <FacebookRoundedIcon sx={{ paddingRight: "0.5rem" }} />
                  <FacebookRoundedIcon sx={{ paddingRight: "0.5rem" }} />
                </Box>
              </Grid>
              <Grid
                container
                pt={isMobile || isTablet ? 5 : 10}
                pb={10}
                sx={{ textTransform: "uppercase" }}
              >
                <Grid item xs={12} md={3} pb={isMobile || (isTablet && 2)}>
                  <Typography sx={{ color: "white" }}>
                    Política de Privacidade
                  </Typography>
                </Grid>
                <Grid item xs={12} md={3} pb={isMobile || (isTablet && 2)}>
                  <Typography sx={{ color: "white" }}>
                    Livro de reclamações
                  </Typography>
                </Grid>
                <Grid item xs={12} md={3} pb={isMobile || (isTablet && 2)}>
                  <Typography sx={{ color: "white" }}>
                    Copyright 2022
                  </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Typography sx={{ color: "white" }}>
                    Developed by critec
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>
      )}
    </Box>
  );
};

export default Footer;
