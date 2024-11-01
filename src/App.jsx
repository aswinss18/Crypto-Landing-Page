import { Container } from "@mui/material"
import Navbar from "./components/ui/Navbar"
import Home from "./components/pages/Home"
import Divider from "./components/ui/Divider"
import Services from "./components/pages/Services"


function App() {


  return (
    <Container sx={{ backgroundColor: 'primary.main', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} maxWidth={false}  >
      <Navbar />
      <Home />
      <Divider />
      <Services />
    </Container>
  )
}

export default App
