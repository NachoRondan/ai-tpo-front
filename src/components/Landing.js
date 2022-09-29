import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, Typography } from '@mui/material';

export const Landing=()=>{


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
<Typography sx={{color:'black',fontSize:40}}>
    Bienvenido
</Typography>
<Typography sx={{color:'black',fontSize:24}}>
    Bienvenido a la web de Sitio Institucional! En esta web podra registrarse como alumno o profesor. Una vez registrados, los profesores podran crear clases de distintos tipos de modalidades y costos y los alumnos podran inscribirse a ellas. La plataforma tambien tiene un sistema de califcacion de clases y comentarios.
</Typography>
<Button variant="outlined" sx={{marginTop:"1rem",maringBottom:"1rem",padding:"1rem",borderRadius:"12px",backgroundColor:"white",width:"200px"}}>
Continuar
</Button>
</Box>
</Container>)
}