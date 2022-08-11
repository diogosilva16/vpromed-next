import React, { useEffect, useState } from "react";
import { Grid, Typography, Box, useMediaQuery } from "@mui/material";
import Loader from "./Loader";
import ButtonComp from "./ButtonComp";
import { useRouter } from "next/router";
import Observer from "@researchgate/react-intersection-observer";
import { useTheme } from "@emotion/react";

const Sweet = () => {
  const API_KEY = process.env.API_KEY;

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
        `https://www.critecnow.com/promed/api/articlebycat/${API_KEY}/5/1`
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

  const getCardImg = (code) => {
    return (cardInfo[0]?.IMAGES)?.find(x => x.CODE === code)?.FILE ?? ""
  }

  const router = useRouter();
  let { id } = router.query;

  const goToPage = () => {
    router.push(`/dentalwork`);
  };

  const cardImgMobGreen = getCardImg("mobileComp");
  const cardImgDeskGreen = getCardImg("desktopComp");

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && !hasError && (
        <>
          <Grid container direction="row" pb={5}>
            <Observer onChange={playLeftAnim}>
              <Grid
                position="relative"
                item
                md={6}
                className={`${isMobile || isTablet ? "" : leftAnim}`}
                sx={{ zIndex: isMobile || isTablet ? 1 : 0 }}
              >
                <Box>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontSize: isMobile && "0.8125rem" }}
                  >
                    {cardInfo[0].NAME_SEO}
                  </Typography>
                </Box>
                <Box pt={2} pb={2}>
                  <Typography
                    variant="h2"
                    sx={{
                      textTransform: "uppercase",
                      color: "white",
                      fontSize: "2.125rem",
                    }}
                  >
                    {JSON.parse(cardInfo[0].CUSTOMCAMPS).main_description}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Mulish",
                      fontWeight: "regular",
                      fontSize: isMobile && "1rem",
                    }}
                  >
                    {JSON.parse(cardInfo[0].CUSTOMCAMPS).small_description}.
                  </Typography>
                </Box>
                <Box
                  pt={2}
                  pb={2}
                  sx={{
                    textAlign: isMobile && "center",
                  }}
                >
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
                sx={{ display: (isMobile || isTablet) && "none" }}
              >
                <img
                  src={cardImgDeskGreen || ""}
                  alt="Especialidade"
                  width="100%"
                />
              </Grid>
            </Observer>
            {(isMobile || isTablet) && (
              <Box
                xs={12}
                sx={{
                  zIndex: 0,
                  backgroundImage: `url(${cardImgMobGreen})`,
                  width: "60%",
                  height: "30%",
                  left: "40%",
                  backgroundSize: "contain",
                  position: "absolute",
                  backgroundRepeat: "no-repeat",
                }}
              ></Box>
            )}
          </Grid>
        </>
      )}
    </>
  );
};

export default Sweet;
