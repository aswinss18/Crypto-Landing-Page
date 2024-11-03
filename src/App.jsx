import { Container } from "@mui/material";
import Navbar from "./components/ui/Navbar";
import Home from "./components/pages/Home";
import Divider from "./components/ui/Divider";
import Services from "./components/pages/Services";
import Features from "./components/pages/Features";
import Working from "./components/ui/Working";
import TestimonialSection from "./components/ui/TestimonialSection";
import About from "./components/pages/About";
import Footer from "./components/ui/Footer";
import { useTheme } from "@emotion/react";

function App() {
  const theme = useTheme();
  return (
    <Container
      disableGutters
      sx={{
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
      maxWidth={false}
    >
      <Navbar />
      <Home />
      <Divider />
      <Services />
      <Features />
      <Working />
      <TestimonialSection />
      <About />
      <Footer />
    </Container>
  );
}

export default App;
