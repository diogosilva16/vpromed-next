import { Box, Container, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import Tendencias from "../../components/Tendencias";
import Especialidades from "../../components/Especialidades";
import Form from "../../components/Form";
import Panorama from "../../components/Panorama";
import Sweet from "../../components/Sweet";
import Loader from "../../components/utils/Loader";
import Separator from "../../components/Separator";
import { useTheme } from "@emotion/react";
import Head from "next/head";

const Inicio = () => {
  const [wait, setWait] = useState(true);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const timer = setTimeout(() => setWait(false), 1000);

  useEffect(() => {
    return () => {
      clearTimeout(timer);
    };
  }, [timer]);

  return (
    <>
      <Head>
        <title>V-Promed</title>
        <meta name="description" content="V-Promed início" />
        <meta charset="UTF-8" />
      </Head>
      <Box pt={isMobile ? 7 : isTablet ? 8 : 10} sx={{ background: "#2A2A2A" }}>
        <Panorama />
        <Container maxWidth="xl">
          {wait && <Loader />}
          {!wait && (
            <>
              <Tendencias />
              <Especialidades />
              <Sweet />
              <Separator />
              <Form />
            </>
          )}
        </Container>
      </Box>
    </>
  );
};

export default Inicio;
