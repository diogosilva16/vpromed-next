import { useTheme } from "@emotion/react";
import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  Grid,
  Button,
} from "@mui/material";
import React, { useContext } from "react";
import { CompanyInfoContext } from "../context/CompanyInfoContext";
import ButtonComp from "./ButtonComp";
import Loader from "./Loader";
import { useRouter } from "next/router";

const Destaques = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const router = useRouter();
  let { id } = router.query;

  const { dest, destIsLoading, destHasError } = useContext(CompanyInfoContext);

  const goToPage = (id) => {
    router.push(`/tendencia/${id}`);
  }

  console.log(dest);

  return (
    <>
      {destIsLoading && <Loader />}
      {!destIsLoading && !destHasError && (
        <div className="teste">
          <Grid container pt={5} pb={5}>
            <Typography
              sx={{ color: "white", textTransform: "uppercase" }}
              pb={2}
            >
              Tendências
            </Typography>
            <Box
              className={isMobile || isTablet ? "featureNoBg" : "feature1"}
              justifyContent="flex-end"
              display="flex"
              position={isMobile || isTablet ? "" : "relative"}
            >
              <Grid
                item
                md={5}
                p={isMobile || isTablet ? 0 : 10}
                sx={{
                  position: { md: "absolute" },
                  bottom: 0,
                  backgroundColor: "#2A2A2A",
                  color: "white",
                  height: { md: "60%", lg: "60%", xl: "40%" },
                  width: "100%",
                }}
              >
                <Typography variant="h6" sx={{ textTransform: "uppercase" }}>
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
                <Typography variant="body1" pb={2}>
                  {JSON.parse(dest[0].CUSTOMCAMPS).small_description}
                </Typography>
                <ButtonComp text={"Saber Mais"} goTo={() => goToPage(dest[0].ARTICLE_ID)}/>
              </Grid>
            </Box>

            <Box
              className={isMobile || isTablet ? "featureNoBg" : "feature2"}
              display="flex"
              position={!isMobile || (!isTablet && "relative")}
              mt={10}
            >
              <Grid
                item
                md={5}
                p={isMobile || isTablet ? 0 : 10}
                sx={{
                  backgroundColor: "#2A2A2A",
                  color: "white",
                  width: "100%",
                  height: { md: "60%", lg: "60%", xl: "45%" },
                }}
              >
                <Typography variant="h6" sx={{ textTransform: "uppercase" }}>
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
                <ButtonComp text={"Saber Mais"} goTo={() => goToPage(dest[1].ARTICLE_ID)}/>
              </Grid>
            </Box>
          </Grid>
        </div>
      )}
    </>
  );
};

export default Destaques;
