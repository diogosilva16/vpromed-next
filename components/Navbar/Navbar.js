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
            sx={{ my: 2, color: "white", display: "block" }}
            aria-describedby={id}
          >
            <ListItemText>VPROMED</ListItemText>
          </ListItem>
        </Link>
        <ListItem>
          <ListItemText
            sx={{ my: 2, color: "white", display: "block" }}
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
                <a>
                  <ListItem>
                    <ListItemText sx={{ textTransform: "uppercase" }}>
                      {item.NAME_SEO}
                    </ListItemText>
                  </ListItem>
                </a>
              </Link>
            ))}
          </List>
        </Popover>
        <ListItem>
          <ListItemText
            sx={{ my: 2, color: "white", display: "block" }}
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
                <a>
                  <ListItem>
                    <ListItemText sx={{ textTransform: "uppercase" }}>
                      {item.NAME_SEO}
                    </ListItemText>
                  </ListItem>
                </a>
              </Link>
            ))}
          </List>
        </Popover>
        <Link href="/contactos">
          <ListItem
            sx={{ my: 2, color: "white", display: "block" }}
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
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar>
            <Link href="/inicio">
              <Typography>
                <img
                  src={companyInfo[0]?.VALUE || ""}
                  alt="v-promed"
                  width="150"
                />
              </Typography>
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
