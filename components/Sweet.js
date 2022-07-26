import React, { useEffect, useState } from "react";
import { Grid, Typography, Box, useMediaQuery } from "@mui/material";
import Loader from "./Loader";
import ButtonComp from "./ButtonComp";
import { useRouter } from "next/router";
import Observer from "@researchgate/react-intersection-observer";
import { useTheme } from "@emotion/react";

const Sweet = () => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const [cardInfo, setCardInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [rightAnim, setRightAnim] = useState("");
  const [leftAnim, setLeftAnim] = useState("");

  const playRightAnim = (event, unobserve) => {
    if (event.isIntersecting) {
      unobserve();
    }
    setRightAnim(
      event.isIntersecting ? "animate__animated animate__fadeInRight" : ""
    );
  };
  const playLeftAnim = (event, unobserve) => {
    if (event.isIntersecting) {
      unobserve();
    }
    setLeftAnim(
      event.isIntersecting ? "animate__animated animate__fadeInLeft" : ""
    );
  };

  const getCardInfo = async () => {
    try {
      const response = await fetch(
        `https://www.critecnow.com/promed/api/articlebycat/t8rAzpkJR8O3kDZdw63h85GDrV86VOeX/5/1`
      );
      const data = await response.json();
      setCardInfo(data);
      setIsLoading(false);
    } catch (error) {
      setHasError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCardInfo();
  }, []);

  const router = useRouter();
  let { id } = router.query;

  const goToPage = (id) => {
    console.log("yes");
    // router.push(`/tendencia/${id}`);
  };

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && !hasError && (
        <Grid container direction="row" pt={5} pb={5}>
          <Observer onChange={playLeftAnim}>
            <Grid
              item
              md={6}
              className={`${isMobile || isTablet ? "" : leftAnim}`}
            >
              <Box>
                <Typography variant="subtitle1">
                  {cardInfo[0].NAME_SEO}
                </Typography>
              </Box>
              <Box pt={2} pb={2}>
                <Typography
                  variant="h2"
                  sx={{ textTransform: "uppercase", color: "white" }}
                >
                  {JSON.parse(cardInfo[0].CUSTOMCAMPS).main_description}
                </Typography>
              </Box>
              <Box>
                <Typography>
                  {JSON.parse(cardInfo[0].CUSTOMCAMPS).small_description}.
                </Typography>
              </Box>
              <Box pt={2} pb={2}>
                <ButtonComp
                  text={"Saber Mais"}
                  goTo={() => goToPage(cardInfo[0].ARTICLE_ID)}
                />
              </Box>
            </Grid>
          </Observer>
          <Observer onChange={playRightAnim}>
            <Grid
              item
              md={6}
              className={`${isMobile || isTablet ? "" : rightAnim}`}
            >
              <img
                src="https://via.placeholder.com/600x300"
                alt="Especialidade"
                width="100%"
              />
            </Grid>
          </Observer>
        </Grid>
      )}
    </>
  );
};

export default Sweet;
