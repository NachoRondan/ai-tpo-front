import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

export const Registro=()=>{

const history=useNavigate();


return (<Container component="main" maxWidth="xs">
<CssBaseline />
<Box
  sx={{
    marginTop: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    py:8,
    height:"80vh"
  }}
>
<Typography sx={{color:'black',fontSize:24}}>
    Que tipo de perfil deaseas usar?
</Typography>
<Button variant='outlined' onClick={()=>history("/registroAlumno")} sx={{marginTop:"1rem",maringBottom:"1rem",padding:"1rem",borderRadius:"12px",backgroundColor:"white",width:"200px"}}>
Alumno
</Button>
<Button variant='outlined' onClick={()=>history("/registroProfesor")} sx={{marginTop:"1rem",maringBottom:"1rem",padding:"1rem",borderRadius:"12px",backgroundColor:"white",width:"200px"}}>
Profesor
</Button>
</Box>
</Container>)
}