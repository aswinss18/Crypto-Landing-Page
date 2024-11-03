import { Box, Container, Typography } from "@mui/material";
import React from "react";
import ServiceCard from "../ui/ServiceCard";
import { useTheme } from "@emotion/react";
import Button from "../ui/Button";
import { styled } from "@mui/material/styles";

const servicesData = [
  {
    icon: "images/service1.png",
    heading: `Connect wallet & exchanges`,
    para: `Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut volup.`,
  },
  {
    icon: "images/service2.png",
    heading: `Connect wallet & exchanges`,
    para: `Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut volup.`,
  },
  {
    icon: "images/service3.png",
    heading: `Connect wallet & exchanges`,
    para: `Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut volup.`,
  },
];

export default function Services() {
  const theme = useTheme();
  return (
    <ContainerSec maxWidth={"xl"}>
      <Typography variant="h1" sx={{ textAlign: "center" }}>
        Automated portfolio tracking
      </Typography>
      <Typography variant="p" sx={{ width: "924px", textAlign: "center" }}>
        Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia
        et sint laboriosam sed ipsa sint ut voluptatum labore et possimus
        voluptas.
      </Typography>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        {servicesData.map((service, i) => (
          <ServiceCard data={service} key={i} index={i} />
        ))}
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: "100px" }}>
        <Box sx={{ position: "relative", height: "828px", width: "828px" }}>
          <Box
            component="img"
            src="images/Ellipse 175.png"
            sx={{ position: "absolute", top: "-30%", left: "-40%" }}
          />
          <Box
            component="img"
            src="images/ring.png"
            sx={{
              position: "absolute",
              height: "650px",
              width: "650px",
              top: "10%",
              left: "-15%",
            }}
          />
          <Box
            component="img"
            src="images/phone.png"
            sx={{
              position: "absolute",
              height: "450px",
              width: "230px",
              top: "22%",
              left: "27%",
            }}
          />
          <Box
            component="img"
            src="images/star.svg"
            sx={{
              position: "absolute",
              height: "23px",
              width: "23px",
              top: "67%",
              left: "10%",
            }}
          />
          <Box
            component="img"
            src="images/star.svg"
            sx={{
              position: "absolute",
              height: "33px",
              width: "33px",
              top: "18%",
              left: "80%",
            }}
          />
          <Box
            component="img"
            src="images/star.svg"
            sx={{
              position: "absolute",
              height: "17px",
              width: "17px",
              top: "70%",
              left: "95%",
            }}
          />
        </Box>
        <Box>
          <Box>
            <Typography
              variant="h3"
              sx={{ color: theme.palette.tertiary.main }}
            >
              FEATURES
            </Typography>
            <Typography variant="h1">Crypto Premium</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: "30px",
              gap: "20px",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Box component="img" src="images/starPink.png" />
              Budgeting Intervals
            </Typography>
            <Typography variant="p">
              Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem
              officia et sint laboriosam sed ipsa sint ut voluptatum labore et.
            </Typography>
            <Typography
              variant="h3"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Box component="img" src="images/cube1.png" />
              Budgeting Intervals
            </Typography>
            <Typography variant="p">
              Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem
              officia et sint laboriosam sed ipsa sint ut voluptatum labore et.
            </Typography>
            <Typography
              variant="h3"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Box component="img" src="images/cube2.png" />
              Budgeting Intervals
            </Typography>
            <Typography variant="p">
              Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem
              officia et sint laboriosam sed ipsa sint ut voluptatum labore et.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", gap: "50px", position: "relative" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            zIndex: 10,
          }}
        >
          <Typography variant="h1">
            Invite team members & enlarge your groups
          </Typography>
          <Typography variant="p">
            Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem
            officia et sint laboriosam sed ipsa sint ut voluptatum labore et
            possimus voluptas.
          </Typography>
          <Button type="primary">Explore Now</Button>
        </Box>
        <Box
          component="img"
          src="images/screen.png"
          sx={{ height: "440px", zIndex: 10 }}
        />
        <Box
          component="img"
          src="images/Ellipse 175.png"
          sx={{
            position: "absolute",
            top: "-90%",
            left: "20%",
            transform: "rotate(180deg)",
          }}
        />
      </Box>
    </ContainerSec>
  );
}

// const containerSec = {
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   gap: "40px",
//   marginTop: "64px",
// };

const ContainerSec = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "40px",
  marginTop: "64px",
  padding: "0px !important",
});
