import { Box, Grid, Typography, Container, useMediaQuery } from "@mui/material";
import React, { useContext, useState, useEffect } from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { useTheme } from "@emotion/react";
import { CompanyInfoContext } from "../context/CompanyInfoContext";
import Loader from "./utils/Loader";
import DOMPurify from "dompurify";

const Footer = () => {
  const API_KEY = process.env.API_KEY;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const { companyInfo, isLoading, hasError } = useContext(CompanyInfoContext);

  const [twitter, setTwitter] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [error, setError] = useState("");

  const getIcons = async () => {
    try {
      const twResponse = await fetch(
        `https://www.vmedapi.criteclx.com/api/filebyid/${API_KEY}/34/1`
      );
      const twData = await twResponse.json();
      setTwitter(twData);
      const fbResponse = await fetch(
        `https://www.vmedapi.criteclx.com/api/filebyid/${API_KEY}/35/1`
      );
      const fbData = await fbResponse.json();
      setFacebook(fbData);
      const igResponse = await fetch(
        `https://www.vmedapi.criteclx.com/api/filebyid/${API_KEY}/32/1`
      );
      const igData = await igResponse.json();
      setInstagram(igData);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    getIcons();
  }, []);

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
              {(isMobile || isTablet) && (
                <Grid item xs={12} pt={3}>
                  <Typography
                    sx={{
                      fontSize: "1.25rem",
                      fontFamily: "Times New Roman",
                      textTransform: "uppercase",
                      color: "#CEC568",
                    }}
                  >
                    Pode contar connosco
                  </Typography>
                </Grid>
              )}
              <Grid item xs={12} md={3} pt={(isMobile || isTablet) && 3}>
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
                    fontFamily: "Manrope",
                    fontSize: isMobile && "0.8125rem",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(companyInfo[8].VALUE),
                  }}
                />
              </Grid>
              <Grid item xs={12} md={3} pt={(isMobile || isTablet) && 3}>
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
                    fontFamily: "Manrope",
                    fontSize: isMobile && "0.8125rem",
                  }}
                >
                  <a
                    style={{ textDecoration: "underline" }}
                    href={`tel: ${companyInfo[10].VALUE}`}
                  >
                    {companyInfo[10].VALUE}
                  </a>
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    fontFamily: "Manrope",
                    fontSize: isMobile && "0.8125rem",
                  }}
                >
                  <a
                    style={{ textDecoration: "underline" }}
                    href={`tel: ${companyInfo[16].VALUE}`}
                  >
                    {companyInfo[16].VALUE}
                  </a>
                </Typography>
              </Grid>
              <Grid item xs={12} md={3} pt={(isMobile || isTablet) && 3}>
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
                    fontFamily: "Manrope",
                    fontSize: isMobile && "0.8125rem",
                  }}
                >
                  <a
                    style={{ textDecoration: "underline" }}
                    href={`tel: ${companyInfo[10].VALUE}`}
                  >
                    {companyInfo[11].VALUE}
                  </a>
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    fontFamily: "Manrope",
                    fontSize: isMobile && "0.8125rem",
                  }}
                >
                  <a
                    style={{ textDecoration: "underline" }}
                    href={`tel: ${companyInfo[17].VALUE}`}
                  >
                    {companyInfo[17].VALUE}
                  </a>
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
                    fontFamily: "Manrope",
                    fontSize: isMobile && "1rem",
                  }}
                >
                  Siga-nos online
                </Typography>
                <Box
                  justifyContent={(isMobile || isTablet) && "center"}
                  display="flex"
                  color={"white"}
                  pt={1}
                >
                  <Box p={1.5}>
                    <a href="#" target="_blank" rel="noreferrer">
                      <img src={facebook.FILE} width={30} alt="facebook icon" />
                    </a>
                  </Box>
                  <Box p={1.5}>
                    <a href="#" target="_blank" rel="noreferrer">
                      <img
                        src={instagram.FILE}
                        width={30}
                        alt="instagram icon"
                      />
                    </a>
                  </Box>
                  {/* <Box p={1.5}>
                    <a href="#" target="_blank" rel="noreferrer">
                      <img src={twitter.FILE} width={30} alt="twitter icon" />
                    </a>
                  </Box> */}
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
                    sx={{ color: "white", fontSize: "0.8rem" }}
                  >
                    Política de Privacidade
                  </Typography>
                </Grid>
                <Grid item xs={12} md={3} pb={isMobile || (isTablet && 2)}>
                  <Typography
                    sx={{ color: "white", fontSize:"0.8rem" }}
                  >
                    Livro de reclamações
                  </Typography>
                </Grid>
                <Grid item xs={12} md={3} pb={isMobile || (isTablet && 2)}>
                  <Typography
                    sx={{ color: "white", fontSize: "0.8rem" }}
                  >
                    Copyright 2022
                  </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Typography
                    sx={{ color: "white", fontSize: "0.8rem" }}
                  >
                    Developed by{" "}
                    <span
                      style={{
                        textTransform: "lowercase",
                        fontWeight: "900",
                      }}
                    >
                      <a
                        href="https://www.critec.pt/inicio"
                        target="_blank"
                        rel="noreferrer"
                      >
                        critec
                      </a>
                    </span>
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
