import React, { useState, useEffect } from "react";
import { Box, Grid, Paper, Typography, useMediaQuery } from "@mui/material";
import Loader from "./Loader";
import { useTheme } from "@emotion/react";

const Team = () => {
  const API_KEY = process.env.API_KEY;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  // const isDesktop = useMediaQuery(theme.breakpoints.up("md"));



  const [teamInfo, setTeamInfo] = useState([]);
  const [teamInfoIsLoading, setTeamInfoIsLoading] = useState(true);
  const [teamInfoHasError, setTeamInfoHasError] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [selected, setSelected] = useState(null);

  const getTeamInfo = async () => {
    try {
      const response = await fetch(
        `https://www.critecnow.com/promed/api/articlebycat/${API_KEY}/6/1`
      );
      const data = await response.json();
      setTeamInfo(data);
      setTeamInfoIsLoading(false);
    } catch (error) {
      setTeamInfoHasError(true);
      setTeamInfoIsLoading(false);
    }
  };

  useEffect(() => {
    getTeamInfo();
  }, []);

  const uIsHovering = (id) => {
    setSelected(id);
    setIsHovering(true);
  };

  const uIsNotHovering = () => {
    setIsHovering(false);
  };

  const _renderTeamInfo = () => {
    return teamInfo.map((item, index) => {
      return (
        <Grid item xs={6} sm={4} md={3} key={index}>
          <Paper
            sx={{
              backgroundImage: `url(${item.IMAGES[0].FILE})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              // background: "#000",
              width: "100%",
              paddingTop: "66.64%",
            }}
            onMouseEnter={() => uIsHovering(index)}
            onMouseLeave={uIsNotHovering}
            className="animate__animated animate__fadeInUp"
          >
            <Box
              visibility={
                isHovering && selected === index ? "visible" : "hidden"
              }
              pl={2}
              pb={2}
            >
              <Typography
                sx={{
                  fontFamily: "Times New Roman",
                  color: "#CEC568",
                  fontSize: (isMobile || isTablet) ? "1rem" : "2rem",
                }}
              >
                {item.NAME_SEO}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#fff",
                  fontSize: isMobile ? "0.8rem" : "1.2rem",
                  textTransform: "uppercase",
                }}
              >
                {item.TEXT_SEO}
              </Typography>
            </Box>
          </Paper>
        </Grid>
      );
    });
  };

  return (
    <>
      {teamInfoIsLoading && <Loader />}
      {!teamInfoIsLoading && !teamInfoHasError && (
        <Grid container pt={1} sx={{ color: "white" }}>
          <Grid item xs={12}>
            <Typography
              sx={{
                fontFamily: "Times New Roman",
                textTransform: "uppercase",
                fontSize: "2.25rem",
              }}
            >
              A Equipa
            </Typography>
          </Grid>
          <Grid item xs={12} pt={2}>
            <Typography
              variant="body1"
              sx={{
                textTransform: "uppercase",
                color: "#CEC568",
                fontFamily: "Times New Roman",
              }}
            >
              Cuidar de si está no nosso adn
            </Typography>
          </Grid>
          <Grid
            container
            spacing={isMobile ? 0 : 5}
            columnSpacing={isMobile ? 0 : 5}
            pb={10}
            pt={5}
          >
            {_renderTeamInfo()}
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Team;
