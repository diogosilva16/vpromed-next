import React, { useState, useContext } from "react";
import { useMediaQuery, useTheme, Box, Typography } from "@mui/material";
import { Pannellum } from "@georgedrpg/pannellum-react-next";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { CompanySpecialitiesContext } from "../context/CompanySpecialitiesContext";
import Loader from "./utils/Loader";

const PanoComp = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const { espec, especIsLoading, especHasError } = useContext(
    CompanySpecialitiesContext
  );
  const [showCatName, setShowCatName] = useState(null);
  const router = useRouter();

  const goToPage = (id) => {
    router.push(`/especialidade/${id}`);
  };

  const showCatNameOnHover = (id) => {
    setShowCatName(id);
  };

  const renderSpecInPano = () => {
    return espec?.map((item, key) => (
      <Link href={`/especialidade/${item.ARTICLE_ID}`} key={item.ARTICLE_ID}>
        <Box
          textAlign="center"
          position="relative"
          onMouseOver={() => showCatNameOnHover(item.ARTICLE_ID)}
          onMouseLeave={() => showCatNameOnHover(0)}
        >
          <img
            src={item.IMAGES?.find((x) => x.CODE === "panoIcon")?.FILE ?? ""}
            width="50%"
          />
          <Box
            className="iconHoverDesk"
            position="absolute"
            left="11vh"
            p={3}
            top="0"
            display={showCatName === item.ARTICLE_ID ? "flex" : "none"}
            alignItems="center"
            height="100%"
            width="fit-content"
          >
            <Typography>{item.NAME_SEO}</Typography>
          </Box>
        </Box>
      </Link>
    ));
  };

  return (
    <>
      <Pannellum
        autoLoad
        autoRotate={isMobile ? 0 : -2}
        width="100vw"
        height={isMobile ? "80vh" : "85vh"}
        image="https://www.vmedapi.criteclx.com/storage/files/original/final_f_6335b97ce662a.jpg"
        pitch={0}
        yaw={isMobile ? 50 : 55}
        hfov={isMobile ? 60 : 130}
        showControls={false}
        // hotspotDebug={true}
        disableKeyboardCtrl={true}
        mouseZoom={false}
      ></Pannellum>
      {!isMobile && (
        <Box
          mt={10}
          height="85vh"
          width="5vw"
          backgroundColor="rgba(0,0,0,0.5)"
          zIndex={2}
          pt={2}
          position="absolute"
          top="0"
          left="0"
          display="flex"
          flexDirection="column"
          justifyContent="space-evenly"
          alignItems="center"
          sx={{ cursor: "pointer" }}
        >
          {especIsLoading && (
            <Box background="red">
              <Loader />
            </Box>
          )}
          {renderSpecInPano()}
        </Box>
      )}
    </>
  );
};

export default PanoComp;
