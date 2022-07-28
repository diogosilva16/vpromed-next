import React from "react";
import dynamic from "next/dynamic";
const PanoComp = dynamic(() => import("./PanoComp"), { ssr: false });

const Panorama = () => {
  return <PanoComp />;
};

export default Panorama;
