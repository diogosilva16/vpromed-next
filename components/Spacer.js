import { Box } from "@mui/material";

const Spacer = (props) => {
  return (
    <Box
      sx={{
        height: `${props.size}px` ,
        width:"100%",
      }}
    >
    </Box>
  );
};

export default Spacer;
