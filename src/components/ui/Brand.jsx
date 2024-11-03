import { Box } from "@mui/material";
import React from "react";

export default function Brand({ imgSrc }) {
  return <Box component="img" width="auto" src={imgSrc} height="47px" />;
}
