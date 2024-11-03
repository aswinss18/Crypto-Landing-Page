import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import React from "react";

export default function FeatureCard({ data }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid #ffffff",
        alignItems: "center",
        justifyContent: "space-evenly",
        border: `1px solid ${theme.palette.tertiary.main}`,
      }}
    >
      <Box
        component="img"
        src={data.icon}
        sx={{ height: "44px", width: "44px" }}
      />
      <Typography variant="h3" sx={{ fontSize: "21px", fontWeight: 700 }}>
        {data.title}
      </Typography>
      <Typography
        sx={{
          fontFamily: "Inter",
          fontSize: "16px",
          color: "#767799",
          textAlign: "center",
          width: "80%",
        }}
      >
        {data.desc}
      </Typography>
    </Box>
  );
}
