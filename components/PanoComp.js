import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import { Pannellum } from "@georgedrpg/pannellum-react-next";
import { useRouter } from "next/router";

const PanoComp = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const router = useRouter();

  const goToPage = (id) => {
    router.push(`/especialidade/${id}`);
  };

  return (
    <Pannellum
      autoLoad
      width="100vw"
      height={isMobile ? "70vh" : "100vh"}
      image="https://www.critecnow.com/promed/storage/files/original/panorama_62e24e3ea860e.jpg"
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
        pitch={-23.49112645005752}
        yaw={-41.45522836845722}
        handleClick={() => {
          goToPage(6);
        }}
        tooltip={(hotSpotDiv, args) => {
          hotSpotDiv.setAttribute("id", "textInfo");
          const hDiv = document.createElement("div");
          hDiv.classList.add("hotspot");
          const imageDiv = document.createElement("div");
          imageDiv.classList.add("image");
          const image = document.createElement("img");
          image.src =
            "https://www.critecnow.com/promed/storage/files/original/360_branqueamento_62f4c3c5db174.svg";
          image.alt = "branqueamento";
          image.width = isMobile ? "35" : "75";
          hotSpotDiv.classList.add("custom-tooltip");
          const span = document.createElement("span");
          span.innerHTML = "Branqueamento/Estética";
          hotSpotDiv.appendChild(span);
          span.style.width = span.scrollWidth - 10 + "px";
          span.style.marginLeft =
            -(span.scrollWidth - hotSpotDiv.offsetWidth) / 3 + "px";
          span.style.marginTop = -span.scrollHeight - 12 + "px";
          // isMobile && hotSpotDiv.classList.remove("custom-tooltip");
          isMobile && hotSpotDiv.removeChild(span);
          imageDiv.appendChild(image);
          hotSpotDiv.appendChild(hDiv);
          hDiv.appendChild(imageDiv);
        }}
      />
      <Pannellum.Hotspot
        type="custom"
        pitch={-23.400719766801082}
        yaw={-64.4343838596642}
        handleClick={() => {
          goToPage(10);
        }}
        tooltip={(hotSpotDiv, args) => {
          hotSpotDiv.setAttribute("id", "textInfo");
          const hDiv = document.createElement("div");
          hDiv.classList.add("hotspot");
          const imageDiv = document.createElement("div");
          imageDiv.classList.add("image");
          const image = document.createElement("img");
          image.src =
            "https://www.critecnow.com/promed/storage/files/original/360_harmonizacaofacial_62f4c3c674f67.svg";
          image.alt = "harmonização facial";
          image.width = isMobile ? "35" : "75";
          hotSpotDiv.classList.add("custom-tooltip");
          const span = document.createElement("span");
          span.innerHTML = "Harmonização orofacial";
          hotSpotDiv.appendChild(span);
          span.style.width = span.scrollWidth - 10 + "px";
          span.style.marginLeft =
            -(span.scrollWidth - hotSpotDiv.offsetWidth) / 3 + "px";
          span.style.marginTop = -span.scrollHeight - 12 + "px";
          // isMobile && hotSpotDiv.classList.remove("custom-tooltip");
          isMobile && hotSpotDiv.removeChild(span);
          imageDiv.appendChild(image);
          hotSpotDiv.appendChild(hDiv);
          hDiv.appendChild(imageDiv);
        }}
      />
      <Pannellum.Hotspot
        type="custom"
        pitch={24.890208032673467}
        yaw={-38.19073062526138}
        handleClick={() => {
          goToPage(7);
        }}
        tooltip={(hotSpotDiv, args) => {
          hotSpotDiv.setAttribute("id", "textInfo");
          const hDiv = document.createElement("div");
          hDiv.classList.add("hotspot");
          const imageDiv = document.createElement("div");
          imageDiv.classList.add("image");
          const image = document.createElement("img");
          image.src =
            "https://www.critecnow.com/promed/storage/files/original/360_higiene_62f4c3c6dcf65.svg";
          image.alt = "higiene oral";
          image.width = isMobile ? "35" : "75";
          hotSpotDiv.classList.add("custom-tooltip");
          const span = document.createElement("span");
          span.innerHTML = "Higiene Oral";
          hotSpotDiv.appendChild(span);
          span.style.width = span.scrollWidth - 20 + "px";
          span.style.marginLeft =
            -(span.scrollWidth - hotSpotDiv.offsetWidth) / 4 + "px";
          span.style.marginTop = -span.scrollHeight - 12 + "px";
          // isMobile && hotSpotDiv.classList.remove("custom-tooltip");
          isMobile && hotSpotDiv.removeChild(span);
          imageDiv.appendChild(image);
          hotSpotDiv.appendChild(hDiv);
          hDiv.appendChild(imageDiv);
        }}
      />
      <Pannellum.Hotspot
        type="custom"
        pitch={24.890208032673467}
        yaw={-64.02409378382197}
        handleClick={() => {
          goToPage(4);
        }}
        tooltip={(hotSpotDiv, args) => {
          hotSpotDiv.setAttribute("id", "textInfo");
          const hDiv = document.createElement("div");
          hDiv.classList.add("hotspot");
          const imageDiv = document.createElement("div");
          imageDiv.classList.add("image");
          const image = document.createElement("img");
          image.src =
            "https://www.critecnow.com/promed/storage/files/original/360_implantologia_62f4c3c749098.svg";
          image.alt = "Implantologia";
          image.width = isMobile ? "35" : "75";
          hotSpotDiv.classList.add("custom-tooltip");
          const span = document.createElement("span");
          span.innerHTML = "Implantologia";
          hotSpotDiv.appendChild(span);
          span.style.width = span.scrollWidth - 20 + "px";
          span.style.marginLeft =
            -(span.scrollWidth - hotSpotDiv.offsetWidth) / 4 + "px";
          span.style.marginTop = -span.scrollHeight - 12 + "px";
          // isMobile && hotSpotDiv.classList.remove("custom-tooltip");
          isMobile && hotSpotDiv.removeChild(span);
          imageDiv.appendChild(image);
          hotSpotDiv.appendChild(hDiv);
          hDiv.appendChild(imageDiv);
        }}
      />
      <Pannellum.Hotspot
        type="custom"
        pitch={16.834606418066215}
        yaw={-114.10572033913462}
        handleClick={() => {
          goToPage(1);
        }}
        tooltip={(hotSpotDiv, args) => {
          hotSpotDiv.setAttribute("id", "textInfo");
          const hDiv = document.createElement("div");
          hDiv.classList.add("hotspot");
          const imageDiv = document.createElement("div");
          imageDiv.classList.add("image");
          const image = document.createElement("img");
          image.src =
            "https://www.critecnow.com/promed/storage/files/original/360_medicina_dentaria_62f4c3c7af8f0.svg";
          image.alt = "medicina dentária";
          image.width = isMobile ? "35" : "75";
          hotSpotDiv.classList.add("custom-tooltip");
          const span = document.createElement("span");
          span.innerHTML = "medicina dentária";
          hotSpotDiv.appendChild(span);
          span.style.width = span.scrollWidth - 10 + "px";
          span.style.marginLeft =
            -(span.scrollWidth - hotSpotDiv.offsetWidth) / 3 + "px";
          span.style.marginTop = -span.scrollHeight - 12 + "px";
          // isMobile && hotSpotDiv.classList.remove("custom-tooltip");
          isMobile && hotSpotDiv.removeChild(span);
          imageDiv.appendChild(image);
          hotSpotDiv.appendChild(hDiv);
          hDiv.appendChild(imageDiv);
        }}
      />
      <Pannellum.Hotspot
        type="custom"
        pitch={-12.63501071136652}
        yaw={-111.16678055219789}
        handleClick={() => {
          goToPage(11);
        }}
        tooltip={(hotSpotDiv, args) => {
          hotSpotDiv.setAttribute("id", "textInfo");
          const hDiv = document.createElement("div");
          hDiv.classList.add("hotspot");
          const imageDiv = document.createElement("div");
          imageDiv.classList.add("image");
          const image = document.createElement("img");
          image.src =
            "https://www.critecnow.com/promed/storage/files/original/360_odontopediatria_62f4c3c809409.svg";
          image.alt = "odontopediatria";
          image.width = isMobile ? "35" : "75";
          hotSpotDiv.classList.add("custom-tooltip");
          const span = document.createElement("span");
          span.innerHTML = "Odontopediatria";
          hotSpotDiv.appendChild(span);
          span.style.width = span.scrollWidth - 20 + "px";
          span.style.marginLeft =
            -(span.scrollWidth - hotSpotDiv.offsetWidth) / 3 + "px";
          span.style.marginTop = -span.scrollHeight - 12 + "px";
          // isMobile && hotSpotDiv.classList.remove("custom-tooltip");
          isMobile && hotSpotDiv.removeChild(span);
          imageDiv.appendChild(image);
          hotSpotDiv.appendChild(hDiv);
          hDiv.appendChild(imageDiv);
        }}
      />
      <Pannellum.Hotspot
        type="custom"
        pitch={10.454105876257755}
        yaw={-128.69434927503778}
        handleClick={() => {
          goToPage(5);
        }}
        tooltip={(hotSpotDiv, args) => {
          hotSpotDiv.setAttribute("id", "textInfo");
          const hDiv = document.createElement("div");
          hDiv.classList.add("hotspot");
          const imageDiv = document.createElement("div");
          imageDiv.classList.add("image");
          const image = document.createElement("img");
          image.src =
            "https://www.critecnow.com/promed/storage/files/original/360_ortodontia_62f4c3c851384.svg";
          image.alt = "ortodontia";
          image.width = isMobile ? "35" : "75";
          hotSpotDiv.classList.add("custom-tooltip");
          const span = document.createElement("span");
          span.innerHTML = "Ortodontia";
          hotSpotDiv.appendChild(span);
          span.style.width = span.scrollWidth - 20 + "px";
          span.style.marginLeft =
            -(span.scrollWidth - hotSpotDiv.offsetWidth) / 4 + "px";
          span.style.marginTop = -span.scrollHeight - 12 + "px";
          // isMobile && hotSpotDiv.classList.remove("custom-tooltip");
          isMobile && hotSpotDiv.removeChild(span);
          imageDiv.appendChild(image);
          hotSpotDiv.appendChild(hDiv);
          hDiv.appendChild(imageDiv);
        }}
      />
      <Pannellum.Hotspot
        type="custom"
        pitch={1.5957469773808655}
        yaw={-161.94453144975762}
        handleClick={() => {
          goToPage(2);
        }}
        tooltip={(hotSpotDiv, args) => {
          hotSpotDiv.setAttribute("id", "textInfo");
          const hDiv = document.createElement("div");
          hDiv.classList.add("hotspot");
          const imageDiv = document.createElement("div");
          imageDiv.classList.add("image");
          const image = document.createElement("img");
          image.src =
            "https://www.critecnow.com/promed/storage/files/original/360_periodontologia_62f4c3c91dfc1.svg";
          image.alt = "periodontologia";
          image.width = isMobile ? "35" : "75";
          hotSpotDiv.classList.add("custom-tooltip");
          const span = document.createElement("span");
          span.innerHTML = "Periodontologia";
          hotSpotDiv.appendChild(span);
          span.style.width = span.scrollWidth - 20 + "px";
          span.style.marginLeft =
            -(span.scrollWidth - hotSpotDiv.offsetWidth) / 4 + "px";
          span.style.marginTop = -span.scrollHeight - 12 + "px";
          // isMobile && hotSpotDiv.classList.remove("custom-tooltip");
          isMobile && hotSpotDiv.removeChild(span);
          imageDiv.appendChild(image);
          hotSpotDiv.appendChild(hDiv);
          hDiv.appendChild(imageDiv);
        }}
      />
      <Pannellum.Hotspot
        type="custom"
        pitch={4.7854652798840736}
        yaw={-171.85094223512897}
        handleClick={() => {
          goToPage(3);
        }}
        tooltip={(hotSpotDiv, args) => {
          hotSpotDiv.setAttribute("id", "textInfo");
          const hDiv = document.createElement("div");
          hDiv.classList.add("hotspot");
          const imageDiv = document.createElement("div");
          imageDiv.classList.add("image");
          const image = document.createElement("img");
          image.src =
            "https://www.critecnow.com/promed/storage/files/original/360_protese_62f4c3ccbb1ed.svg";
          image.alt = "prótese dentária";
          image.width = isMobile ? "35" : "75";
          hotSpotDiv.classList.add("custom-tooltip");
          const span = document.createElement("span");
          span.innerHTML = "Prótese dentária";
          hotSpotDiv.appendChild(span);
          span.style.width = span.scrollWidth - 10 + "px";
          span.style.marginLeft =
            -(span.scrollWidth - hotSpotDiv.offsetWidth) / 3 + "px";
          span.style.marginTop = -span.scrollHeight - 12 + "px";
          // isMobile && hotSpotDiv.classList.remove("custom-tooltip");
          isMobile && hotSpotDiv.removeChild(span);
          imageDiv.appendChild(image);
          hotSpotDiv.appendChild(hDiv);
          hDiv.appendChild(imageDiv);
        }}
      />
      <Pannellum.Hotspot
        type="custom"
        pitch={-0.5851848611137139}
        yaw={142.2294185544108}
        handleClick={() => {
          goToPage(15);
        }}
        cssClass="custom-hotspot"
        createTooltipArgs="teste"
        tooltip={(hotSpotDiv, args) => {
          hotSpotDiv.setAttribute("id", "textInfo");
          const hDiv = document.createElement("div");
          hDiv.classList.add("hotspot");
          const imageDiv = document.createElement("div");
          imageDiv.classList.add("image");
          const image = document.createElement("img");
          image.src =
            "https://www.critecnow.com/promed/storage/files/original/360_outras_especialidades_62f4c3c8b2618.svg";
          image.alt = "outras especialidades";
          image.width = isMobile ? "35" : "75";
          hotSpotDiv.classList.add("custom-tooltip");
          const span = document.createElement("span");
          span.innerHTML = "Outras especialidades";
          hotSpotDiv.appendChild(span);
          span.style.width = span.scrollWidth - 20 + "px";
          span.style.marginLeft =
            -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + "px";
          span.style.marginTop = -span.scrollHeight - 12 + "px";
          // isMobile && hotSpotDiv.classList.remove("custom-tooltip");
          isMobile && hotSpotDiv.removeChild(span);
          imageDiv.appendChild(image);
          hotSpotDiv.appendChild(hDiv);
          hDiv.appendChild(imageDiv);
        }}
      />
    </Pannellum>
  );
};

export default PanoComp;
