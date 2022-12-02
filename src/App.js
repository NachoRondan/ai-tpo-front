import { useState } from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from "./pages/Home";
import Login from "./pages/Login";
import Course from './pages/Course'
import Error from './pages/Error'
import ProtectedRoute from "./tools/ProtectedRoute";
import Contratacion from './pages/Contratacion';
import Profile from "./pages/Profile";
import { Box, } from "@mui/material"
import { Registro } from "./components/Registro";
import { RegistroAlumno } from "./components/RegistroAlumno";
import { RegistroProfesor } from "./components/RegistroProfesor";
import { Landing } from "./components/Landing";
import { RecuperarClave } from "./components/RecuperarClave";
import MyCourses from "./pages/MyCourses";
import EditCourse from "./pages/EditCourse";
import NewCourse from "./pages/NewCourse";
import MyCoursesStudent from "./pages/MyCoursesStudent";

function App() {
  const [user, setUser] = useState(null)
  return (
    <BrowserRouter>
      <Navbar user={user}/>
      <Box bgcolor='#ebebeb' sx={{width:1, height:1}}>
        <Routes>
          <Route path="/" >
            <Route index element={<Landing  />}/>
            <Route path="home" element={<Home user={user}/>}/>
            <Route path="login" element={<Login setUser={setUser}/>}/>
            <Route path="registro" element={<Registro  />}/>
            <Route path="registroAlumno" element={<RegistroAlumno  />}/>
            <Route path="registroProfesor" element={<RegistroProfesor  />}/>
            <Route path="recuperarClave" element={<RecuperarClave  />}/>
            <Route path="profile" element={<Profile user={user} setUser={setUser}/>}/>
            <Route path="my-courses" element={<MyCourses user={user}/>}/>
            <Route path="my-courses-student" element={<MyCoursesStudent user={user}/>}/>
            <Route path="new-course" element={<NewCourse user={user}/>}/>
            <Route path="edit-course">
              <Route path=':courseId' element={<EditCourse user={user} />}/>
            </Route>
            <Route path="clase">
              <Route path=':courseId' element={<Course user={user} />}/>
            </Route>
            <Route path="contrataciones" element={<Contratacion user={user}/>}>
              <Route path=':contratacionId' element={<Course user={user} />}/>
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
