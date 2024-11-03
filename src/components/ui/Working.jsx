import { useTheme } from "@emotion/react";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Button from "../ui/Button";

export default function Working() {
  const theme = useTheme();
  return (
    <Container
      sx={{
        display: "flex",
        marginY: "100px",
        justifyItems: "center",
        alignItems: "center",
        gap: "100px",
      }}
    >
      <Box sx={{ position: "relative" }}>
        {/* Background ellipse positioned behind the phone */}
        <Box
          component="img"
          src="images/Ellipse 175.png"
          sx={{
            position: "absolute",
            top: "-35%",
            left: "-10%",
            zIndex: 0,
          }}
        />

        <Box
          component="img"
          src="images/phones.png"
          sx={{ height: 699, width: 531, position: "relative", zIndex: 1 }}
        />

        <Box
          component="img"
          src="images/star.svg"
          sx={{
            height: 33,
            width: 33,
            position: "absolute",
            top: "8%",
            left: "30%",
          }}
        />
        <Box
          component="img"
          src="images/star.svg"
          sx={{
            height: 23,
            width: 23,
            position: "absolute",
            top: "97%",
            left: "2%",
          }}
        />
        <Box
          component="img"
          src="images/star.svg"
          sx={{
            height: 17,
            width: 17,
            position: "absolute",
            top: "94%",
            left: "18%",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          zIndex: 1,
          gap: "50px",
        }}
      >
        <Box>
          <Typography
            variant="h3"
            sx={{
              color: theme.palette.subHeadingColor.main,
              fontSize: "25px",
              fontWeight: 700,
            }}
          >
            How it works
          </Typography>
          <Typography variant="h1">
            Viewing long- term and short -term forcast
          </Typography>
        </Box>
        <Typography variant="p">
          Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia
          et sint laboriosam sed ipsa sint ut voluptatum labore et possimus
          voluptas.
        </Typography>
        <Button type="primary">Explore Now</Button>
      </Box>
    </Container>
  );
}
