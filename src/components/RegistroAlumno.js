import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { Button, Typography } from '@mui/material';

export const RegistroAlumno=()=>{

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
    height:"100vh"
  }}
>
<Typography component="h1" variant="h5">
          Creacion Usuario - Alumno
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
            InputLabelProps={{ shrink: true }}
            margin="normal"
            required
            fullWidth
            id="fechaNacimiento"
            label="Fecha de Nacimiento"
            name="fechaNacimiento"
            type='date'
            autoFocus
          />
          <TextField
            margin="normal"
            fullWidth
            id="estudios"
            label="Estudios en Curso"
            name="estudios"
            autoComplete="estudios"
            autoFocus
          />
          <TextField
            margin="normal"
            fullWidth
            id="estudiosFinalizados"
            label="Estudios Finalizados"
            name="estudiosFinalizados"
            autoComplete="estudiosFinalizados"
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