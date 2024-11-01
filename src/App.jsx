import { Container } from "@mui/material"
import Navbar from "./components/ui/Navbar"
import Home from "./components/pages/Home"


function App() {


  return (
    <Container sx={{ backgroundColor: 'primary.main', display: 'flex', justifyContent: 'center' }} maxWidth={false}  >
      <Navbar />
      <Home />
    </Container>
  )
}

export default App
