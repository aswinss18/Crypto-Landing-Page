import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import React from "react";

export default function Button({ children, type }) {
  const theme = useTheme();

  if (type === "primary") {
    return (
      <Box
        component="button"
        sx={{
          width: "212px",
          height: "65px",
          border: "2px solid #ffffff",
          backgroundColor: theme.palette.primary.main,
          color: "#ffffff",
          fontSize: "21px",
          fontWeight: 600,
          "&:hover": {
            backgroundColor: "#ffffff",
            transition: "all 300ms ease-in-out",
            color: theme.palette.primary.main,
          },
        }}
      >
        {children}
      </Box>
    );
  } else if ((type = "secondary")) {
    return (
      <Box
        component="button"
        sx={{
          width: "146px",
          height: "50px",
          border: "2px solid #ffffff",
          backgroundColor: theme.palette.primary.main,
          color: "#ffffff",
          fontSize: "20px",
          fontWeight: 500,
          "&:hover": {
            backgroundColor: "#ffffff",
            transition: "all 300ms ease-in-out",
            color: theme.palette.primary.main,
          },
        }}
      >
        {children}
      </Box>
    );
  }
}
