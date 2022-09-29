import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { Button, Typography } from '@mui/material';

export const RecuperarClave=()=>{

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
          Reecuperacion de Contraseña
</Typography>
<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
        <TextField
            InputLabelProps={{ shrink: true }}
            placeholder="********"
            margin="normal"
            fullWidth
            id="nuevaClave"
            label="Ingrese su nueva clave"
            name="nuevaClave"
            autoComplete="nuevaClave"
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Actualizar Clave
          </Button>
        </Box>
</Box>
</Container>)
}