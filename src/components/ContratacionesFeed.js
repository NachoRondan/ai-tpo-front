import { Stack, Box, Typography, Divider, Button, TextField } from "@mui/material";
import getContrataciones from "../assets/MockUpVariables/MockUpContrataciones";


export default function ContratacionesFeed({user}){
    const contrataciones = getContrataciones()
    
    return(
        <Stack divider={<Divider  />} spacing={2} >
            {contrataciones.map((contratacion, index) => (
                <Box>
                    <Stack alignContent='center' justifyContent='flex-start'> 
                        <Typography marginBottom={2} variant="h5">{contratacion.userName}</Typography>
                        <TextField 
                            value={contratacion.comment}
                            multiline
                            disabled
                        />
                    <Box marginTop={2} felx={12} sx={{display:'flex', justifyContent:'center'}}>
                        <Button variant="contained" color="secondary">Datos de Contacto</Button>
                    </Box>
                    </Stack>
                </Box>
            ))}
        </Stack>
    )
}