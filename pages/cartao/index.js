import React from "react";
import { Container, Grid, useMediaQuery, Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import ButtonComp from "../../components/ButtonComp";
import { useRouter } from "next/router";
import Head from "next/head";

const Cartao = ({ cardData }) => {
  const API_KEY = process.env.API_KEY;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  console.log(cardData);

  const goToContact = () => {
    router.push("/contactos");
  };

  return (
    <>
      <Head>
        <title>V-Promed Cartão</title>
        <meta name="description" content="V-Promed Cartão" />
        <meta charset="UTF-8" />
      </Head>
      <Container maxWidth="xl">
        <Grid container pt={isMobile || isTablet ? 10 : 15}>
          <Box sx={{ width: "100vw" }}>
            <Grid item xs={12}>
              <Typography
                variant="h5"
                style={{ color: "white", textTransform: "uppercase" }}
              >
                Para empresas
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
                {cardData[0].NAME_SEO}
              </Typography>
            </Grid>
          </Box>
          <Box sx={{ width: "100vw" }}>
            {isMobile || isTablet ? (
              <img src={cardData[0].IMAGES[1].FILE} width={"100%"} />
            ) : (
              <Box>
                <img
                  src={cardData[0].IMAGES[0].FILE}
                  height={"50%"}
                  width={"100%"}
                />
              </Box>
            )}
          </Box>
          <Box>
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
                Conheça as características do {cardData[0].NAME_SEO}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{ color: "white", fontSize: "1.25rem" }}
                variant="body1"
              >
                {cardData[0].TEXT_SEO}
              </Typography>
            </Grid>
          </Box>
          <Grid item xs={12} pt={5} textAlign="center">
            <ButtonComp text={"Contacte-nos"} goTo={goToContact} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Cartao;

export async function getStaticProps() {
  const cardResponse = await fetch(
    `https://www.critecnow.com/promed/api/articlebycat/${API_KEY}/5/1`
  );
  const cardData = await cardResponse.json();

  return {
    props: {
      cardData,
    },
  };
}
