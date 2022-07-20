import { Box, Container } from "@mui/material";
import React from "react";
import Tendencias from "../../components/Tendencias";
import Especialidades from "../../components/Especialidades";
import Form from "../../components/Form";
import Panorama from "../../components/Panorama";
import Sweet from "../../components/Sweet";

const Inicio = () => {
  return (
    <Box pt={10} sx={{ background: "#2A2A2A" }}>
      <Panorama />
      <Container maxWidth="xl">
        <Tendencias />
        <Especialidades />
        <Sweet />
        <Form />
      </Container>
    </Box>
  );
};

export default Inicio;
