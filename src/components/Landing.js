import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Landing=()=>{

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
    height:"1"
  }}
>
<Typography sx={{color:'black',fontSize:40}}>
    Bienvenido
</Typography>
<Typography sx={{color:'black',fontSize:24}}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.
Suspendisse congue vulputate lobortis. Pellentesque at interdum
tortor. Quisque arcu quam, malesuada vel mauris et, posuere
sagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elit
metus, efficitur lobortis nisi quis, molestie porttitor metus.
Pellentesque et neque risus. Aliquam vulputate, mauris vitae
tincidunt interdum, mauris mi vehicula urna, nec feugiat quam
lectus vitae ex.
</Typography>
<Button variant='outlined' onClick={()=>history("/login")} sx={{marginTop:"1rem",maringBottom:"1rem",padding:"1rem",borderRadius:"12px",backgroundColor:"white",width:"200px"}}>
Continuar
</Button>
</Box>
</Container>)
}