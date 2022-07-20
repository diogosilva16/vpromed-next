import { ListItem, ListItemText, Popover,   useMediaQuery, List
} from "@mui/material";
import React, {useState, useContext} from "react";
import { MenuData } from "./MenuData";
import Link from 'next/link'
import { useTheme } from "@emotion/react";
import { CompanySpecialitiesContext } from "../../context/CompanySpecialitiesContext";
import { CompanyInfoContext } from "../../context/CompanyInfoContext";



const PopoverList = () => {
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

  const renderPopoverItems = () => {
    return MenuData.map((page, key) => (
      <>
        <ListItem
          key={key}
          sx={{ my: 2, color: "white", display: "block" }}
          aria-describedby={id}
        >
          <ListItemText>{page.title}</ListItemText>
        </ListItem>
        <Popover
          id={id}
          open={openedPopoverId === page.id}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <List sx={{ backgroundColor: "#000", color: "#fff" }}>
            {page.id === 2
              ? espec.map((item, key) => (
                  <Link
                    href={
                      page.title === "ESPECIALIDADES"
                        ? `/especialidade/${item.ARTICLE_ID}`
                        : `/destaque/${item.ARTICLE_ID}`
                    }
                  >
                    <ListItem key={key}>
                      <ListItemText sx={{ textTransform: "uppercase" }}>
                        {item.NAME_SEO}
                      </ListItemText>
                    </ListItem>
                  </Link>
                ))
              : dest.map((item, key) => (
                  <Link
                    href={
                      page.title === "ESPECIALIDADES"
                        ? `/especialidade/${item.ARTICLE_ID}`
                        : `/destaque/${item.ARTICLE_ID}`
                    }
                  >
                    <ListItem key={key}>
                      <ListItemText sx={{ textTransform: "uppercase" }}>
                        {item.NAME_SEO}
                      </ListItemText>
                    </ListItem>
                  </Link>
                ))}
          </List>
        </Popover>
      </>
    ));
  };
  return renderPopoverItems();
};
export default PopoverList;
