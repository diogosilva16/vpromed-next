import React, { useState, useEffect } from "react";
import { Box, Grid, Paper, Typography, useMediaQuery } from "@mui/material";
import Loader from "./utils/Loader";
import { useTheme } from "@emotion/react";
import Spacer from "./Spacer";

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
        `https://www.vmedapi.criteclx.com/api/articlebycat/${API_KEY}/6/1`
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
        <>
          <Grid item xs={12} sm={6} md={6} key={index}>
            <Box
              display="flex"
              justifyContent="center"
              // className="animate__animated animate__fadeInLeft"
            >
              <img
                src={`${item.IMAGES[0].FILE}`}
                width="100%"
                style={{ maxWidth: "70%" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} key={index+1}>
            <Typography
              // className="animate__animated animate__fadeInRight"
              sx={{
                fontFamily: "Times New Roman",
                textTransform: "uppercase",
                color: "#CEC568",
                fontSize: "2.25rem",
              }}
            >
              Vitor Henriques
            </Typography>

            <Typography
              textAlign="justify"
              variant="body1"
              // className="animate__animated animate__fadeInRight"
              sx={{
                wordWrap: "break-word",
                // textTransform: "uppercase",
                fontFamily: "Manrope",
              }}
            >
              {item.TEXT_SEO}
            </Typography>
          </Grid>
        </>
      );
    });
  };

  return (
    <>
      {teamInfoIsLoading && <Loader />}
      {!teamInfoIsLoading && !teamInfoHasError && (
        <Grid container sx={{ color: "white" }}>
          <Grid
            container
            // spacing={isMobile ? 0 : 5}
            columnSpacing={isMobile ? 0 : 5}
            pt={5}
          >
            {_renderTeamInfo()}
          </Grid>
          <Spacer size={"100"} />
        </Grid>
      )}
    </>
  );
};

export default Team;
