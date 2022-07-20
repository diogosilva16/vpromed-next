import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import dynamic from "next/dynamic";
const PanoComp = dynamic(() => import("./PanoComp"), { ssr: false });

const Panorama = () => {
  return <PanoComp />;
};

export default Panorama;
