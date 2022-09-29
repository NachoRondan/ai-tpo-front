import { useState } from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from "./pages/Home";
import Login from "./pages/Login";
import Course from './pages/Course'
import Error from './pages/Error'
import ProtectedRoute from "./tools/ProtectedRoute";
import Contratacion from './pages/Contratacion'
import { Box, } from "@mui/material"


function App() {
  const [user, setUser] = useState(null)
  return (
    <BrowserRouter>
      <Navbar user={user}/>
      <Box bgcolor='#ebebeb' sx={{width:1, height:1}}>
        <Routes>
          <Route path="/" >
            <Route index element={<Home user={user}/>}/>
            <Route path="login" element={<Login setUser={setUser}/>}/>
            <Route path="clase">
              <Route path=':courseId' element={<Course user={user} />}>
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
