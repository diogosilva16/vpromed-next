import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import Link from "next/link";
import React, { useContext } from "react";
import { MenuData } from "./MenuData";
import { CompanyInfoContext } from "../../context/CompanyInfoContext";
import { CompanySpecialitiesContext } from "../../context/CompanySpecialitiesContext";

export const DrawerComponent = ({ openDrawer, setOpenDrawer }) => {
  const listItemStyle = { paddingTop: 0, paddingBottom: 0, textAlign: "right" };
  const alignText = { textAlign: "right", paddingBottom: 0 };

  const { dest, destHasError, destIsLoading } = useContext(CompanyInfoContext);

  const { espec, especIsLoading, especHasError } = useContext(
    CompanySpecialitiesContext
  );

  const renderMenu = () => {
    return (
      /* TO DO: Replace this with a dynamic list of menu items -> NEXT JS ROUTING IS GIVING LOADS OF TROUBLE WITH THIS NEED TO REVIEW LATER */
      <>
        <Link href="/sobre">
          <ListItem sx={alignText} onClick={() => setOpenDrawer(false)}>
            <ListItemText>V-PROMED</ListItemText>
          </ListItem>
        </Link>
        <ListItem sx={alignText} onClick={() => setOpenDrawer(false)}>
          <ListItemText sx={{color: "#CEC568"}}>TENDÊNCIAS</ListItemText>
        </ListItem>
        <List
          sx={{
            fontWeight: "200",
            color: "rgba(255,255,255,0.5)",
            textTransform: "uppercase",
          }}
        >
          {renderDestData()}
        </List>
        <ListItem sx={alignText} onClick={() => setOpenDrawer(false)}>
          <ListItemText>ESPECIALIDADES</ListItemText>
        </ListItem>
        <List
          sx={{
            fontWeight: "200",
            color: "rgba(255,255,255,0.5)",
            textTransform: "uppercase",
          }}
        >
          {renderEspecData()}
        </List>
        <Link href="/contactos">
          <ListItem sx={alignText} onClick={() => setOpenDrawer(false)}>
            <ListItemText>CONTACTOS</ListItemText>
          </ListItem>
        </Link>
      </>
    );
  };

  const renderEspecData = () => {
    return espec.map((item, key) => (
      <Link href={`/especialidade/${item.ARTICLE_ID}`} key={key}>
        <a>
          <ListItem sx={listItemStyle} onClick={() => setOpenDrawer(false)}>
            <ListItemText>{item.NAME_SEO}</ListItemText>
          </ListItem>
        </a>
      </Link>
    ));
  };

  const renderDestData = () => {
    return dest.map((item, key) => (
      <Link href={`/tendencia/${item.ARTICLE_ID}`} key={key}>
        <a>
          <ListItem
            key={key}
            sx={listItemStyle}
            onClick={() => setOpenDrawer(false)}
          >
            <ListItemText>{item.NAME_SEO}</ListItemText>
          </ListItem>
        </a>
      </Link>
    ));
  };

  return (
    <Drawer
      PaperProps={{
        sx: {
          backgroundColor: "#000",
          color: "#fff",
          minWidth: "200px",
          paddingTop: "20%",
        },
      }}
      anchor="right"
      open={openDrawer}
      onClose={() => setOpenDrawer(false)}
    >
      <List>{renderMenu()}</List>
    </Drawer>
  );
};
