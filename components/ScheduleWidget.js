import { Typography, Box, Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import React, { useState, useEffect } from "react";
import Form from "./Form";
import MobileForm from "./MobileForm";

const ScheduleWidget = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isXL = useMediaQuery(theme.breakpoints.up("xl"));
  const isLG = useMediaQuery(theme.breakpoints.up("lg"));

  const [open, setOpen] = useState(false);

  const [icon, setIcon] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const getIcon = async () => {
    try {
      const response = await fetch(
        `https://www.critecnow.com/promed/api/filebyid/t8rAzpkJR8O3kDZdw63h85GDrV86VOeX/12/1`
      );
      const data = await response.json();
      setIcon(data);
      setIsLoading(false);
    } catch (error) {
      setHasError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getIcon();
  }, []);

  console.log(icon);
  const openSchedule = () => {
    setOpen(true);
  };

  const closeSchedule = () => {
    setOpen(false);
  };

  const subtractValue1 = isMobile ? "15vw" : isTablet ? "10vw" : "5vw";
  const subtractValue2 =
    subtractValue1 - isMobile
      ? "80vw"
      : isTablet
      ? "70vw"
      : isXL
      ? "40vw"
      : isLG
      ? "70vw"
      : "60vw";

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          transition: "right 1s ease-in-out",
          right:
            isMobile && open
              ? "70vw"
              : isTablet && open
              ? "70vw"
              : isXL && open
              ? "40vw"
              : isLG && open
              ? "70vw"
              : open
              ? "60vw"
              : 0,
          bottom: 5,
          zIndex: 99,
          borderTopLeftRadius: "6px",
          borderBottomLeftRadius: "6px",
          height: isMobile ? "25vh" : isTablet || isXL ? "17vh" : "25vh",
          width: isMobile ? "15vw" : isTablet ? "10vw" : "3vw",
          background:
            "linear-gradient(180deg, hsla(160, 34%, 29%, 1) 0%, hsla(158, 43%, 18%, 1) 100%)",
          color: "white",
        }}
        display="flex"
        onClick={!open ? openSchedule : closeSchedule}
      >
        <Grid
          container
          pt={isMobile || isTablet ? 4 : 2}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Typography
              sx={{ transform: "rotate(270deg)", textTransform: "uppercase" }}
            >
              Agendar Consulta
            </Typography>
          </Grid>
          <Grid item pt={4}>
            <img src="https://www.critecnow.com/promed/storage/files/original/agendar_consulta_62e02504cb458.svg" />
          </Grid>
        </Grid>
      </Box>

      {/* {open && ( */}
      <Box
        sx={{
          position: "fixed",
          transition: "left 1s ease-in-out",
          left: !open ? "100%" : `calc(100% - ${subtractValue2})`,
          bottom: 5,
          zIndex: 99,
          height: isMobile
            ? "80vh"
            : isTablet
            ? "70vh"
            : isXL
            ? "60vh"
            : "75vh",
          width: isMobile
            ? "80vw"
            : isTablet
            ? "70vw"
            : isXL
            ? "40vw"
            : isLG
            ? "70vw"
            : "60vw",
          background:
            "linear-gradient(180deg, hsla(160, 34%, 29%, 1) 0%, hsla(158, 43%, 18%, 1) 100%)",
          color: "white",
        }}
      >
        <Grid container p={4}>
          {isMobile ? <MobileForm /> : <Form />}
        </Grid>
      </Box>
      {/* )} */}
    </>
  );
};

export default ScheduleWidget;
