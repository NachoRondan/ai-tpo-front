import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { Button, Typography } from '@mui/material';
import {useNavigate, } from 'react-router-dom';
import { createUser, createProfessorProfile, } from '../controllers/userController';

export const RegistroProfesor=()=>{

  const navigate = useNavigate();

  const createProfessorProfileAsync = async function (userData){
    var user_response = await createUser(userData)    
    if(user_response.rdo === 0){
      let response = await createProfessorProfile(userData);
      console.log(response)
      if( response.status === 200)
      {
        alert(response.mensaje)
        navigate('/login')
      }
      else{
        alert(response.mensaje)
        navigate('/login')
      }
    }
    else{
      alert(user_response.mensaje)
      navigate('/login')
    }    
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    var userData = {
      name : data.get('nombre'),
      lastname : data.get('apellido'),
      email : data.get('correo'),
      phoneNumber : data.get('numero'),
      password : data.get('clave'),
      workExperience : data.get('experiencia'),
      titles : data.get('titulos'),
    }
    createProfessorProfileAsync(userData);
  }

return (<Container component="main" maxWidth="xs">
<CssBaseline />
<Box
  sx={{
    marginTop: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    py:8,
    height:"1"
  }}
>
<Typography component="h1" variant="h5">
          Creacion Usuario - Profesor
</Typography>
<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField margin="normal" required fullWidth id="nombre" label="Nombre" autoComplete="nombre" autoFocus
            name="nombre"
          />
          <TextField margin="normal" required fullWidth label="Apellido" type="apellido" id="apellido" autoComplete="apellido"
            name="apellido"
          />
          <TextField margin="normal" required fullWidth id="correo" label="Direccion de Correo Electronico" autoComplete="correo" autoFocus
            name="correo"
          />
          <TextField margin="normal" required fullWidth id="clave" label="Password" autoFocus
              name="clave"
            />
          <TextField margin="normal"required fullWidth id="confirmarClave" label="Confirmar Password" autoFocus
            name="confirmClave"
          />
          <TextField margin="normal" required fullWidth id="numero" label="Numero Telefonico" autoComplete="numero" autoFocus
            name="numero"
          />
          <TextField margin="normal" fullWidth id="experiencia" label="Experiencia"  autoComplete="experiencia" autoFocus 
            name="experiencia"
          />
          <TextField margin="normal" fullWidth id="titulos" label="Titulos" autoComplete="titulos" autoFocus
            name="titulos"
          />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Crear Cuenta
            </Button>
        </Box>
</Box>
</Container>)
}