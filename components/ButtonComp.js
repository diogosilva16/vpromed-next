import React from "react";
import { Button } from "@mui/material";

const ButtonComp = (props) => {
  return (
    <Button
      variant="contained"
      sx={{
        background:
          "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(50,50,50,1) 85%, rgba(62,62,62,1) 100%)",
        border: "1px solid #CEC568",
        width: "250px",
        "&:hover": {
          color: "#CEC568",
        },
      }}
      onClick={props.goTo}
    >
      {props.text}
    </Button>
  );
};

export default ButtonComp;
