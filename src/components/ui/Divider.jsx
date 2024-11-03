import { Container } from "@mui/material";
import React from "react";
import Brand from "./Brand";

const brands = [
  "images/waverio.png",
  "images/logoipsum.png",
  "images/alterbone.png",
  "images/ridoria.png",
  "images/tinygone.png",
];

export default function Divider() {
  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundColor: "#162446",
        height: "132px",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      {brands.map((brands, i) => (
        <Brand imgSrc={brands} key={i} />
      ))}
    </Container>
  );
}
