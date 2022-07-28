import React, { useState } from "react";
import { Grid, Container, Typography, Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Loader from "../../components/Loader";
import ButtonComp from "../../components/ButtonComp";

const Destaque = () => {
  const router = useRouter();
  let { id } = router.query;

  const [trendInfo, setTrendInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const getTrendInfo = async () => {
    try {
      if (!id) return;
      const response = await fetch(
        `https://www.critecnow.com/promed/api/article/t8rAzpkJR8O3kDZdw63h85GDrV86VOeX/${id}/1`
      );
      const data = await response.json();
      setTrendInfo(data);
      setIsLoading(false);
    } catch (error) {
      setHasError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTrendInfo();
  }, [id, isLoading]);

  const goToContact = () => {
    router.push("/contactos");
  };

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && !hasError && (
        <Container maxWidth="xl">
          <Grid container pt={20}>
            <Box sx={{ width: "100vw" }}>
              <Grid item xs={12}>
                <Typography variant="h5" style={{ color: "white", textTransform: "uppercase" }}>
                  Tendência
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
                  {trendInfo.NAME_SEO}
                </Typography>
              </Grid>
            </Box>
            <Box sx={{ width: "100vw", height: "200px", background: "black" }}>
              <Grid item xs={12}></Grid>
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
                    fontSize: "1.25rem"
                  }}
                >
                  Conheça as características do {trendInfo.NAME_SEO}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{ color: "white", fontSize: "1.25rem" }} variant="body1">
                  {trendInfo.TEXT_SEO}
                </Typography>
              </Grid>
              {/* <Grid item xs={12} pt={5}>
                <Typography
                  sx={{ color: "#CEC568", textTransform: "uppercase" }}
                >
                  SED ALIQUAM
                </Typography>
              </Grid>
              <Grid item xs={12} pt={5}>
                <Typography sx={{ color: "white" }} variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Fermentum et sollicitudin ac orci phasellus egestas tellus
                  rutrum. Massa tincidunt dui ut ornare lectus sit. Nunc congue
                  nisi vitae suscipit. Eu ultrices vitae auctor eu. Quis blandit
                  turpis cursus in hac habitasse. Quam lacus suspendisse
                  faucibus interdum posuere lorem ipsum dolor sit. Auctor neque
                  vitae tempus quam pellentesque nec nam aliquam. Commodo
                  viverra maecenas accumsan lacus vel facilisis volutpat est
                  velit.
                </Typography>
              </Grid> */}
            </Box>
            <Grid item xs={12} pt={5} textAlign="center">
              <ButtonComp text={"Contacte-nos"} goTo={goToContact} />
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
};

export default Destaque;
