import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";

const Separator = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      pt={isMobile ? 0 : 10}
      sx={{
        width: "100vw",
        position: "relative",
        left: "calc(-50vw + 50%)",
      }}
    >
      {isMobile || isTablet ? (
        <img src="/separador.svg" width="100%" alt="separador mobile" />
      ) : (
        <img src="/sepDesktop.svg" width="100%" alt="separador" />
      )}
    </Box>
  );
};
export default Separator;
