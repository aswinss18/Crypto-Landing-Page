import { Box, Container, Typography } from "@mui/material";
import React from "react";
import FeatureCard from "../ui/FeatureCard";

const features = [
  {
    icon: "images/feature1.png",
    title: "Support",
    desc: "Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.",
  },
  {
    icon: "images/feature2.png",
    title: "Sales",
    desc: "Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.",
  },
  {
    icon: "images/feature3.png",
    title: "Onboarding",
    desc: "Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.",
  },
  {
    icon: "images/feature4.png",
    title: "Product",
    desc: "Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.",
  },
  {
    icon: "images/feature5.png",
    title: "Quality",
    desc: "Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.",
  },
  {
    icon: "images/feature6.png",
    title: "Result",
    desc: "Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.",
  },
];

export default function Features() {
  return (
    <Container
      sx={{
        height: "778px",
        marginTop: "100px",
        display: "flex",
        zIndex: 10,
        flexDirection: "column",
        alignItems: "center",
        gap: "95px",
      }}
    >
      <Box
        sx={{
          height: "106px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "29px",
        }}
      >
        <Typography variant="h1">Make every step user-centric</Typography>
        <Typography variant="p">
          Lorem ipsum dolor sit amet, consectetur adipis elit
        </Typography>
      </Box>
      <Box
        sx={{
          height: "573px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateRows: "1fr 1fr",
        }}
      >
        {features.map((feature, i) => (
          <FeatureCard data={feature} key={i} />
        ))}
      </Box>
    </Container>
  );
}
