import { Box, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import Tendencias from "../../components/Tendencias";
import Especialidades from "../../components/Especialidades";
import Form from "../../components/Form";
import Panorama from "../../components/Panorama";
import Sweet from "../../components/Sweet";
import Loader from "../../components/Loader";

const Inicio = () => {
  const [wait, setWait] = useState(true);

  const timer = setTimeout(() => setWait(false), 1000);

  useEffect(() => {
    return () => {
      clearTimeout(timer);
    };
  }, [timer]);

  return (
    <Box pt={10} sx={{ background: "#2A2A2A" }}>
      <Panorama />
      <Container maxWidth="xl">
        {wait && <Loader />}
        {!wait && (
          <>
            <Tendencias />
            <Especialidades />
            <Sweet />
            <Form />
          </>
        )}
      </Container>
    </Box>
  );
};

export default Inicio;
