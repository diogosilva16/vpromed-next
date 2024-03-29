import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  IconButton,
  Box,
  useMediaQuery,
  useTheme,
  Stack,
  List,
  ListItem,
  ListItemText,
  Popover,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState, useContext } from "react";
import { DrawerComponent } from "./DrawerComponent";
import Link from "next/link";
import { MenuData } from "./MenuData";
import { CompanyInfoContext } from "../../context/CompanyInfoContext";
import { CompanySpecialitiesContext } from "../../context/CompanySpecialitiesContext";
import Loader from "../utils/Loader";
const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openedPopoverId, setOpenedPopoverId] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const {
    companyInfo,
    isLoading,
    hasError,
    dest,
    destHasError,
    destIsLoading,
  } = useContext(CompanyInfoContext);

  const { espec, especIsLoading, especHasError } = useContext(
    CompanySpecialitiesContext
  );

  const handleClick = (event, popoverId) => {
    setOpenedPopoverId(popoverId);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setOpenedPopoverId(null);
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const renderMenuItems = () => {
    /* TO DO: Replace this with a dynamic list of menu items -> NEXT JS ROUTING IS GIVING LOADS OF TROUBLE WITH THIS NEED TO REVIEW LATER */
    return (
      <>
        <Link href="/sobre">
          <ListItem
            sx={{ my: 2, color: "white", display: "block", cursor: "pointer" }}
            aria-describedby={id}
          >
            <ListItemText sx={{ fontFamily: "Times New Roman, sans-serif" }}>
              V-PROMED
            </ListItemText>
          </ListItem>
        </Link>
        <ListItem>
          <ListItemText
            sx={{
              my: 2,
              color: "#CEC568",
              display: "block",
              cursor: "pointer",
            }}
            aria-describedby={id}
            onMouseDown={(e) => handleClick(e, 3)}
          >
            TENDÊNCIAS
          </ListItemText>
        </ListItem>
        <Popover
          id={id}
          open={openedPopoverId === 3}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <List sx={{ backgroundColor: "#000", color: "#fff" }}>
            {dest.map((item, key) => (
              <Link href={`/tendencia/${item.ARTICLE_ID}`} key={key}>
                <ListItem onClick={handleClose}>
                  <ListItemText
                    sx={{ textTransform: "uppercase" }}
                    onClick={handleClose}
                  >
                    {item.NAME_SEO}
                  </ListItemText>
                </ListItem>
              </Link>
            ))}
          </List>
        </Popover>
        <ListItem>
          <ListItemText
            sx={{
              my: 2,
              color: "white",
              display: "block",
              "&:hover": { color: "#CEC568" },
              cursor: "pointer",
            }}
            aria-describedby={id}
            onMouseDown={(e) => handleClick(e, 2)}
          >
            ESPECIALIDADES
          </ListItemText>
        </ListItem>
        <Popover
          id={id}
          open={openedPopoverId === 2}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <List sx={{ backgroundColor: "#000", color: "#fff" }}>
            {espec.map((item, key) => (
              <Link href={`/especialidade/${item.ARTICLE_ID}`} key={key}>
                <ListItem onClick={handleClose}>
                  <ListItemText sx={{ textTransform: "uppercase" }}>
                    {item.NAME_SEO}
                  </ListItemText>
                </ListItem>
              </Link>
            ))}
          </List>
        </Popover>
        <Link href="/contactos">
          <ListItem
            sx={{ my: 2, color: "white", display: "block", cursor: "pointer" }}
            aria-describedby={id}
          >
            <ListItemText>CONTACTOS</ListItemText>
          </ListItem>
        </Link>
      </>
    );
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background:
            "linear-gradient(0deg,  rgba(62,62,62,1) 0%, rgba(50,50,50,1) 5%, rgba(0,0,0,1) 100%)",
        }}
      >
        <Container maxWidth="xxl">
          <Toolbar>
            <Link href="/inicio">
              {isLoading ? (
                <img
                  src="https://www.vmedapi.criteclx.com/storage/company/logo-menu_2022-08-04-12-20-58.svg"
                  alt="v-promed"
                  width={isMobile ? "150" : "300"}
                />
              ) : (
                <img
                  src={companyInfo[0]?.VALUE || ""}
                  alt="v-promed"
                  width={isMobile ? "150" : "300"}
                  style={{ cursor: "pointer" }}
                />
              )}
            </Link>
            {isMobile ? (
              <DrawerComponent
                openDrawer={openDrawer}
                setOpenDrawer={setOpenDrawer}
              />
            ) : (
              <Box
                justifyContent="flex-end"
                sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
              >
                <List sx={{ display: "flex" }}>{renderMenuItems()}</List>
              </Box>
            )}

            {isMobile && (
              <Stack
                direction="row"
                justifyContent="flex-end"
                sx={{ flexGrow: 1 }}
              >
                <IconButton onClick={() => setOpenDrawer(true)}>
                  <MenuIcon color="secondary" />
                </IconButton>
              </Stack>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
