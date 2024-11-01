import { Container } from "@mui/material"
import Navbar from "./components/ui/Navbar"


function App() {


  return (
    <Container sx={{ backgroundColor: 'primary.main' }} maxWidth={false}  >
      <Navbar />
    </Container>
  )
}

export default App
