import React from "react";
import { Container, Grid, CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <Container maxWidth="xl" sx={{ height: "100%", color: "red" }}>
      <Grid
        container
        pt={20}
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "100%" }}
      >
        <CircularProgress sx={{ color: "#CEC568" }} />
      </Grid>
    </Container>
  );
};

export default Loader;
