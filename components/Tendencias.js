import { useTheme } from "@emotion/react";
import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  Grid,
  Button,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { CompanyInfoContext } from "../context/CompanyInfoContext";
import ButtonComp from "./ButtonComp";
import Loader from "./Loader";
import { useRouter } from "next/router";
import Observer from "@researchgate/react-intersection-observer";

const Destaques = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.up("sm"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const [animation1, setAnimation1] = useState("");
  const [animation2, setAnimation2] = useState("");

  const handleAnim1 = (event, unobserve) => {
    if (event.isIntersecting) {
      unobserve();
    }
    setAnimation1(
      event.isIntersecting ? "animate__animated animate__fadeInRight" : ""
    );
  };

  const handleAnim2 = (event, unobserve) => {
    if (event.isIntersecting) {
      unobserve();
    }
    setAnimation2(
      event.isIntersecting ? "animate__animated animate__fadeInLeft" : ""
    );
  };

  const router = useRouter();
  let { id } = router.query;

  const { dest, destIsLoading, destHasError } = useContext(CompanyInfoContext);

  const goToPage = (id) => {
    router.push(`/tendencia/${id}`);
  };

  console.log(dest);
  return (
    <>
      {destIsLoading && <Loader />}
      {!destIsLoading && !destHasError && (
        <div className="teste">
          <Grid container pt={5} pb={5}>
            <Typography
              sx={{
                color: "#CEC568",
                textTransform: "uppercase",
                fontFamily: "Mulish",
                fontWeight: "bold",
                fontSize: "1rem",
              }}
              pb={2}
              className={
                isMobile || isTablet
                  ? ""
                  : "animate__animated animate__fadeInUp"
              }
            >
              Tendências
            </Typography>
            <Observer onChange={handleAnim1}>
              <Box
                className={`${
                  isMobile || (isTablet && !isDesktop)
                    ? "featureMobile"
                    : "feature1"
                } ${(isMobile || isTablet) && !isDesktop ? "" : animation1}`}
                justifyContent={
                  isMobile || (isTablet && !isDesktop)
                    ? "flex-start"
                    : "flex-end"
                }
                display="flex"
                position="relative"
                sx={{
                  backgroundImage:
                    isDesktop && `url(${dest[0].IMAGES[0]?.FILE})`,
                }}
              >
                <>
                  <Grid
                    item
                    md={5}
                    xs={12}
                    p={isMobile || (isTablet && !isDesktop) ? 0 : 10}
                    sx={{
                      zIndex: isMobile || (isTablet && !isDesktop) ? 1 : 0,
                      position: { md: "absolute" },
                      bottom: 0,
                      backgroundColor:
                        isMobile || (isTablet && !isDesktop) ? "" : "#2A2A2A",
                      color: "white",
                      height: { md: "60%", lg: "60%", xl: "40%" },
                      width: "80%",
                    }}
                  >
                    <Typography
                      variant="h6"
                      pt={isMobile || (isTablet && !isDesktop) ? 5 : 0}
                      sx={{ textTransform: "uppercase" }}
                    >
                      Implantologia
                    </Typography>
                    <Typography
                      variant={isMobile ? "h4" : "h2"}
                      sx={{
                        textTransform: "uppercase",
                        fontFamily: "Times New Roman",
                        color: "white",
                      }}
                    >
                      {dest[0].NAME_SEO}
                    </Typography>
                    <Typography
                      variant="body1"
                      pb={2}
                      pt={
                        (isMobile && !isDesktop) || (isTablet && !isDesktop)
                          ? 3
                          : 0
                      }
                    >
                      {JSON.parse(dest[0].CUSTOMCAMPS).small_description}
                    </Typography>
                    <Box
                      sx={{
                        textAlign:
                          (isMobile || isTablet) && !isDesktop && "center",
                      }}
                    >
                      <ButtonComp
                        text={"Saber Mais"}
                        goTo={() => goToPage(dest[0].ARTICLE_ID)}
                      />
                    </Box>
                  </Grid>
                  {isMobile && !isDesktop && (
                    <Box
                      xs={12}
                      sx={{
                        zIndex: 0,
                        backgroundImage: `url(${dest[0].IMAGES[1]?.FILE})`,
                        width: "70%",
                        height: "70%",
                        left: "30%",
                        backgroundSize: "cover",
                        position: "absolute",
                      }}
                    ></Box>
                  )}
                  {isTablet && !isDesktop && (
                    <Box
                      sx={{
                        backgroundImage: `url(${dest[0].IMAGES[1]?.FILE})`,
                        width: "80%",
                        height: "100%",
                        left: "20%",
                        backgroundSize: "cover",
                        position: "absolute",
                      }}
                    ></Box>
                  )}
                </>
              </Box>
            </Observer>

            <Observer onChange={handleAnim2}>
              <Box
                className={`${
                  (isMobile || isTablet) && !isDesktop
                    ? "featureMobile"
                    : "feature2"
                } ${(isMobile || isTablet) && !isDesktop ? "" : animation2}`}
                display="flex"
                position={!isMobile || (!isTablet && "relative")}
                justifyContent={
                  isMobile || (isTablet && !isDesktop)
                    ? "flex-end"
                    : "flex-start"
                }
                mt={10}
                sx={{
                  backgroundImage:
                    isDesktop && `url(${dest[1].IMAGES[0]?.FILE})`,
                }}
              >
                <Grid
                  item
                  md={4}
                  xs={12}
                  p={isMobile || (isTablet && !isDesktop) ? 0 : 10}
                  sx={{
                    zIndex: isMobile || (isTablet && !isDesktop) ? 1 : 0,
                    color: "white",
                    width: "100%",
                    height: { md: "60%", lg: "60%", xl: "45%" },
                    position: { md: "absolute" },
                    backgroundColor:
                      isMobile || (isTablet && !isDesktop) ? "" : "#2A2A2A",
                    paddingLeft:
                      isMobile || (isTablet && !isDesktop) ? "3rem" : 10,
                  }}
                >
                  <Typography
                    variant="h6"
                    pt={isMobile || (isTablet && !isDesktop) ? 5 : 0}
                    sx={{ textTransform: "uppercase" }}
                  >
                    Ortodontia
                  </Typography>
                  <Typography
                    variant={isMobile ? "h4" : "h2"}
                    sx={{
                      textTransform: "uppercase",
                      fontFamily: "Times New Roman",
                      color: "white",
                    }}
                  >
                    {dest[1].NAME_SEO}
                  </Typography>
                  <Typography variant="body1" pb={2}>
                    {JSON.parse(dest[1].CUSTOMCAMPS).small_description}
                  </Typography>
                  <ButtonComp
                    text={"Saber Mais"}
                    goTo={() => goToPage(dest[1].ARTICLE_ID)}
                  />
                </Grid>
                {isMobile && !isDesktop && (
                  <Box
                    xs={12}
                    sx={{
                      zIndex: 0,
                      backgroundImage: `url(${dest[1].IMAGES[1]?.FILE})`,
                      width: "70%",
                      height: "70%",
                      left: "0",
                      backgroundSize: "cover",
                      position: "absolute",
                    }}
                  ></Box>
                )}
                {isTablet && !isDesktop && (
                  <Box
                    sx={{
                      zIndex: 0,
                      backgroundImage: `url(${dest[1].IMAGES[1]?.FILE})`,
                      width: "60%",
                      height: "25%",
                      left: 0,
                      backgroundSize: "cover",
                      position: "absolute",
                    }}
                  ></Box>
                )}
              </Box>
            </Observer>
          </Grid>
        </div>
      )}
    </>
  );
};

export default Destaques;
