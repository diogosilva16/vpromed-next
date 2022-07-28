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

  const { companyInfo, isLoading, hasError } = useContext(CompanyInfoContext);

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
          sx={{ paddingTop: "4rem", textAlign: { xs: "center", md: "left" } }}
        >
          <Box sx={{ borderTop: "solid 1px #CEC568" }}>
            <Grid container pt={5}>
              <Grid item xs={12} md={3}>
                <img src={companyInfo[0]?.VALUE || ""} width={200} alt="Logo" />
              </Grid>
              <Grid item xs={12} md={3} pt={isMobile || (isTablet && 3)}>
                <Typography
                  sx={{
                    color: "white",
                    textTransform: "uppercase",
                    fontFamily: "Times New Roman",
                    fontSize: isMobile && "1rem",
                  }}
                >
                  Horários
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    whiteSpace: "pre-wrap",
                    fontFamily: "Mulish",
                    fontSize: isMobile && "0.8125rem",
                  }}
                >
                  {companyInfo[8].VALUE}
                </Typography>
              </Grid>
              <Grid item xs={12} md={3} pt={isMobile || (isTablet && 3)}>
                <Typography
                  sx={{
                    color: "white",
                    textTransform: "uppercase",
                    fontFamily: "Times New Roman",
                    fontSize: isMobile && "1rem",
                  }}
                >
                  Águeda Clinic
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    fontFamily: "Mulish",
                    fontSize: isMobile && "0.8125rem",
                  }}
                >
                  {companyInfo[10].VALUE}
                </Typography>
              </Grid>
              <Grid item xs={12} md={3} pt={isMobile || (isTablet && 3)}>
                <Typography
                  sx={{
                    color: "white",
                    textTransform: "uppercase",
                    fontFamily: "Times New Roman",
                    fontSize: isMobile && "1rem",
                  }}
                >
                  Barrô Clinic
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    fontFamily: "Mulish",
                    fontSize: isMobile && "0.8125rem",
                  }}
                >
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
                <Typography
                  sx={{
                    color: "white",
                    textTransform: "uppercase",
                    fontFamily: "Mulish",
                    fontSize: isMobile && "1rem",
                  }}
                >
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
                pb={5}
                sx={{ textTransform: "uppercase" }}
              >
                <Grid item xs={12} md={3} pb={isMobile || (isTablet && 2)}>
                  <Typography
                    sx={{ color: "white", fontSize: isMobile && "1rem" }}
                  >
                    Política de Privacidade
                  </Typography>
                </Grid>
                <Grid item xs={12} md={3} pb={isMobile || (isTablet && 2)}>
                  <Typography
                    sx={{ color: "white", fontSize: isMobile && "1rem" }}
                  >
                    Livro de reclamações
                  </Typography>
                </Grid>
                <Grid item xs={12} md={3} pb={isMobile || (isTablet && 2)}>
                  <Typography
                    sx={{ color: "white", fontSize: isMobile && "1rem" }}
                  >
                    Copyright 2022
                  </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Typography
                    sx={{ color: "white", fontSize: isMobile && "1rem" }}
                  >
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
