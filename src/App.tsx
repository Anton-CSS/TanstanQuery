import { Container } from '@mui/material';
import {Outlet} from "react-router-dom";
import NavBar from "./components/NavBar.tsx";


function App() {


  return (
      <Container sx={{width: '100vw'}} >
          <NavBar />
          <Outlet/>
      </Container>
  )
}

export default App
