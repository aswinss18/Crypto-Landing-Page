import { Box, Container, Typography } from "@mui/material";
import React from "react";
import TestimonialCard from "./TestimonialCard";
const testimonials = [
  {
    name: "Albert Flores",
    job: "Founder of GearUp",
    image: "images/profile1.png",
    play: false,
  },
  {
    name: "Leslie Alexander",
    job: "Co-Founder of Womenia",
    image: "images/profile2.png",
    play: true,
  },
  {
    name: "Courtney Henry",
    job: "Founder of CH Beauty",
    image: "images/profile3.png",
    play: false,
  },
];

export default function TestimonialSection() {
  return (
    <Container
      maxWidth={false}
      sx={{
        height: "884px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "60px",
        marginY: "100px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "55%",
        }}
      >
        <Typography
          variant="h1"
          sx={{ position: "relative", marginBottom: "20px" }}
        >
          <Box
            component="img"
            sx={{ position: "absolute", left: "-17%" }}
            src="images/quote1.svg"
          />
          Testimonials
          <Box
            sx={{ position: "absolute", right: "-17%" }}
            component="img"
            src="images/quote2.svg"
          />
        </Typography>
        <Typography variant="p" sx={{ textAlign: "center" }}>
          Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia
          et sint laboriosam sed ipsa sint ut voluptatum labore et.
        </Typography>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "space-evenly", width: "100%" }}
      >
        {testimonials.map((testimonial, i) => (
          <TestimonialCard data={testimonial} key={i} />
        ))}
      </Box>
    </Container>
  );
}
