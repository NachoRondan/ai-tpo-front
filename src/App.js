import { useState } from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Clase from './pages/Clase'
import Error from './pages/Error'
import ProtectedRoute from "./tools/ProtectedRoute";
import Contratacion from './pages/Contratacion'


function App() {
  const [user, setUser] = useState(null)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Home user={user}/>}/>
          <Route path="login" element={<Login setUser={setUser}/>}/>
          <Route path=':claseId' element={<Clase user={user} />}>
            <Route path="contratacion" element={
              <ProtectedRoute user={user}>
                <Contratacion user={user}/>
              </ProtectedRoute>
            }
            />
          </Route>
          <Route to='mis-clases' element={
            <ProtectedRoute user={user}>
              
            </ProtectedRoute>
          }
          />
          <Route path='*' element={<Error/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
