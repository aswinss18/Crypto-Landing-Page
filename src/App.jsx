import { Container } from "@mui/material"
import Navbar from "./components/ui/Navbar"
import Home from "./components/pages/Home"
import Divider from "./components/ui/Divider"
import Services from "./components/pages/Services"
import Features from "./components/pages/Features"
import Working from "./components/ui/Working"
import TestimonialSection from "./components/ui/TestimonialSection"


function App() {


  return (
    <Container sx={{ backgroundColor: 'primary.main', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} maxWidth={false}  >
      <Navbar />
      <Home />
      <Divider />
      <Services />
      <Features />
      <Working />
      <TestimonialSection />
    </Container>
  )
}

export default App
