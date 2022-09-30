import { Container, Grid, Box, Typography } from "@mui/material";

export default function Footer(){
    return(
        <Box px={{xs:3, sm:3}} py={{xs:3, sm:3}} 
            bgcolor="text.secondary" color='white'
            position='sticky'
            sx={{ zIndex: 'tooltip' }}
        >
            <Container>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>
                            <Typography>Contacto</Typography>
                        </Box>
                        <Box>
                            <Typography>Tel: 4444 9999</Typography>
                        </Box>
                        <Box>
                            <Typography>Direccion: Calle Falsa 123</Typography>
                        </Box>
                        <Box>
                            <Typography>Mail: mail@falso.com</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4} sx={{display:{xs:'none', sm:'block'}}}>
                        <Box borderBottom={1}>
                            <Typography>Contacto</Typography>
                        </Box>
                        <Box>
                            <Typography>Tel: 4444 9999</Typography>
                        </Box>
                        <Box>
                            <Typography>Direccion: Calle Falsa 123</Typography>
                        </Box>
                        <Box>
                            <Typography>Mail: mail@falso.com</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4} sx={{display:{xs:'none', sm:'block'}}}>
                        <Box borderBottom={1} justifyContent='center'>
                            <Typography>Contacto</Typography>
                        </Box>
                        <Box justifyContent='center'>
                            <Typography>Tel: 4444 9999</Typography>
                        </Box>
                        <Box>
                            <Typography>Direccion: Calle Falsa 123</Typography>
                        </Box>
                        <Box>
                            <Typography>Mail: mail@falso.com</Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Box textAlign='center' pt={{xs:5, sm:10}} pb={{xs:5, sm:0}}>
                    <Typography>Grupo 4 Aplicaciones Interactivas Tpo &reg; 2022</Typography>
                </Box>
            </Container>
        </Box>
    )
}