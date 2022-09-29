import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const RegistroProfesor=()=>{

const handleSubmit=()=>{console.log("hola")}





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
          <TextField
            margin="normal"
            required
            fullWidth
            id="nombre"
            label="Nombre"
            name="nombre"
            autoComplete="nombre"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="apellido"
            label="Apellido"
            type="apellido"
            id="apellido"
            autoComplete="apellido"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="correo"
            label="Direccion de Correo Electronico"
            name="correo"
            autoComplete="correo"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="numero"
            label="Numero Telefonico"
            name="numero"
            autoComplete="numero"
            autoFocus
          />
          <TextField
            margin="normal"
            fullWidth
            id="experiencia"
            label="Experiencia"
            name="experiencia"
            autoComplete="experiencia"
            autoFocus
          />
          <TextField
            margin="normal"
            fullWidth
            id="titulos"
            label="Titulos"
            name="titulos"
            autoComplete="titulos"
            autoFocus
          />
        <TextField
            InputLabelProps={{ shrink: true }}
            placeholder="Cual fue el nombre de tu primera mascota?"
            margin="normal"
            fullWidth
            id="pregunta"
            label="Pregunta de Seguridad"
            name="pregunta"
            autoComplete="pregunta"
            autoFocus
          />
          <Link to={'/login'} style={{ textDecoration: 'none', color: 'unset' }}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Crear Cuenta
            </Button>
          </Link>
        </Box>
</Box>
</Container>)
}