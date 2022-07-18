import { useTheme } from "@emotion/react";
import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  Grid,
  Button,
} from "@mui/material";
import React from "react";

const Destaques = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div className="teste">
      <Grid container pt={5} pb={5}>
        <Typography sx={{ color: "white", textTransform: "uppercase" }} pb={2}>
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
            md={4}
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
              variant="h2"
              sx={{
                textTransform: "uppercase",
                fontFamily: "Times New Roman",
                color: "white",
              }}
            >
              NOME
            </Typography>
            <Typography variant="body1" pb={2}>
              DESCRIÇÃO
            </Typography>
            <Button variant="contained" color="success" fullWidth>
              Saber mais
            </Button>
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
            md={4}
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
              variant="h2"
              sx={{
                textTransform: "uppercase",
                fontFamily: "Times New Roman",
                color: "white",
              }}
            >
              NOME
            </Typography>
            <Typography variant="body1" pb={2}>
              DESCRIÇÃO
            </Typography>
            <Button variant="contained" color="success" fullWidth>
              Saber mais
            </Button>
          </Grid>
        </Box>
      </Grid>
    </div>
  );
};

export default Destaques;