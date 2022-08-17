import React, { useState, useEffect } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";

const Separator = () => {
  const API_KEY = process.env.API_KEY;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const [separadorImg, setSeparadorImg] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const getSectionInfo = async () => {
    try {
      const response = await fetch(
        `https://www.vmedapi.criteclx.com/api/section/${API_KEY}/3/1`
      );
      const data = await response.json();
      setSeparadorImg(data.IMAGES);
      setIsLoading(false);
    } catch (error) {
      setHasError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getSectionInfo();
  }, []);

  const getSectionImg = (code) => {
    return separadorImg?.find((x) => x.CODE === code)?.FILE ?? "";
  };

  const desktopSep = getSectionImg("desktop");
  const mobileSep = getSectionImg("mobile");

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
        <img src={mobileSep} width="100%" alt="separador mobile" />
      ) : (
        <img src={desktopSep} width="100%" alt="separador" />
      )}
    </Box>
  );
};
export default Separator;
