import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Button, Typography, Paper, Box, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Landing=()=>{

const history=useNavigate(); 

return (
<Box flex={12} py={2}>
  <Container component="main" maxWidth="md" >
  <Paper>
  <Box
    sx={{
      marginTop: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      py:8,
      px:5,
      height:"1"
    }}
  >
    <Typography sx={{color:'black',fontSize:40}}>
        Bienvenido
    </Typography>
    <Typography sx={{color:'black',fontSize:24}}>
    En esta plataforma educativa podrá registrarse como alumno o profesor.

    Los usuarios profesores podran tener publicadas varias clases y administrarlas.

    Los usuarios alumnos tendran la posibilidad de calificar las clases y también escribir comentarios sobre su experiencia en las mismas. 
    </Typography>
    <Button variant='outlined' onClick={()=>history("/login")} sx={{marginTop:"1rem",maringBottom:"1rem",padding:"1rem",borderRadius:"12px",backgroundColor:"white",width:"200px"}}>
    Continuar
    </Button>
  </Box>
  </Paper>
  </Container>
</Box>
)
}