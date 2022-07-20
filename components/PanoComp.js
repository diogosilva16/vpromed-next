import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import { Pannellum } from "@georgedrpg/pannellum-react-next";

const PanoComp = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Pannellum
      autoLoad
      width="100vw"
      height={isMobile ? "70vh" : "100vh"}
      image="https://www.critecnow.com/promed/storage/files/original/pano_62d58262901de.jpg"
      pitch={0}
      yaw={180}
      hfov={130}
      showControls={false}
      // hotspotDebug={true}
      disableKeyboardCtrl={true}
      mouseZoom={false}
    >
      <Pannellum.Hotspot
        type="custom"
        pitch={6.716376550525631}
        yaw={130.75239204883815}
        text="Hotspot com informação dramática e muito mais! Queres saber mais? Clica aqui ;)"
        handleClick={() => {
          handleClick(1);
        }}
      />
      <Pannellum.Hotspot
        type="custom"
        pitch={9.798938389637957}
        yaw={154.68298369503444}
        text="Hotspot com informação dramática"
        handleClick={() => {
          handleClick(2);
        }}
      />
    </Pannellum>
  );
};

export default PanoComp;
