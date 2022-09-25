import { useState } from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from "./pages/Home";
import Login from "./pages/Login";
import Clase from './pages/Clase'
import Error from './pages/Error'
import ProtectedRoute from "./tools/ProtectedRoute";
import Contratacion from './pages/Contratacion'
import { Box, } from "@mui/material"


function App() {
  const [user, setUser] = useState(null)
  return (
    <BrowserRouter>
      <Navbar/>
      <Box bgcolor='#ebebeb' sx={{width:1, height:1}}>
        <Routes>
          <Route path="/" >
            <Route index element={<Home user={user}/>}/>
            <Route path="login" element={<Login setUser={setUser}/>}/>
            <Route path="clase">
              <Route path=':claseId' element={<Clase user={user} />}>
                <Route path="contratacion" element={
                  <ProtectedRoute user={user}>
                    <Contratacion user={user}/>
                  </ProtectedRoute>
                }
                />
              </Route>
            </Route>
            <Route to='mis-clases' element={
              <ProtectedRoute user={user}>
                
              </ProtectedRoute>
            }
            />
            <Route path='*' element={<Error/>} />
          </Route>
        </Routes>
      </Box>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
