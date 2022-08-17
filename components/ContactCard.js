import React from "react";
import {
  Grid,
  Accordion,
  AccordionSummary,
  Typography,
  Box,
  useMediaQuery,
  AccordionDetails,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import DOMPurify from "dompurify";

const ContactCard = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid item xs={12} pt={3}>
      <Accordion
        sx={{
          background:
            "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(50,50,50,1) 85%, rgba(62,62,62,1) 100%)",
          color: "white",
        }}
      >
        <AccordionSummary sx={{ flexGrow: 0 }}>
          <Typography
            variant={isMobile ? "h4" : "h2"}
            sx={{
              color: "white",
              textTransform: "uppercase",
              fontFamily: "Times New Roman",
            }}
          >
            {props.title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <img src={props.locData.FILE} width={40} alt="localidade" />
            <Typography
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(props.localidade),
              }}
            />
          </Box>
          <Box pt={3}>
            <img src={props.mobData.FILE} width={40} alt="contacto" />
            <Typography>
              <a href={`tel:${props.mobile}`}>{props.mobile}</a>
            </Typography>
            <Typography>
              <a href={`tel:${props.phone}`}>{props.phone}</a>
            </Typography>
          </Box>
          <Box pt={3}>
            <img src={props.horData.FILE} width={40} allt="horário" />
            <Typography
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(props.horario),
              }}
            />
          </Box>
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
};

export default ContactCard;
