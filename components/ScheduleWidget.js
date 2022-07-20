import {
    Typography,
    Box,
    Grid,
    useMediaQuery,
  } from "@mui/material";
  import { useTheme } from "@emotion/react";
  import EventAvailableIcon from "@mui/icons-material/EventAvailable";
  import React, { useState } from "react";
  import Form from "./Form";
  import MobileForm from "./MobileForm";
  
  const ScheduleWidget = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.down("md"));
    const isXL = useMediaQuery(theme.breakpoints.up("xl"));
    const isLG = useMediaQuery(theme.breakpoints.up("lg"));
  
    const [open, setOpen] = useState(false);
  
    const openSchedule = () => {
      setOpen(true);
    };
  
    const closeSchedule = () => {
      setOpen(false);
    };
  
    return (
      <>
        <Box
          sx={{
            position: "fixed",
            right:
              isMobile && open
                ? "80vw"
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
            borderTopLeftRadius: "20px",
            borderBottomLeftRadius: "20px",
            height: isMobile ? "25vh" : isTablet || isXL ? "17vh" : "25vh",
            width: isMobile ? "15vw" : isTablet ? "10vw" : "5vw",
            background:
              "linear-gradient(180deg, hsla(160, 34%, 29%, 1) 0%, hsla(158, 43%, 18%, 1) 100%)",
            color: "white",
          }}
          display="flex"
          onClick={openSchedule}
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
              <EventAvailableIcon fontSize="large" />
            </Grid>
          </Grid>
        </Box>
  
        {open && (
          <Box
            sx={{
              position: "fixed",
              right: 0,
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
            onClick={closeSchedule}
          >
            <Grid container p={4}>
              {isMobile ? <MobileForm /> : <Form />}
            </Grid>
          </Box>
        )}
      </>
    );
  };
  
  export default ScheduleWidget;
  