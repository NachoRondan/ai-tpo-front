import { Stack, Box, Paper, Typography, Container, Divider } from "@mui/material"
import ContratacionesFeed from "../components/ContratacionesFeed"
import UserProfileSideBar from "../components/SidebarProfileTitles"

export default function Contratacion({user}) {
    return (
        <Box >
            <Container>
               
      <Stack direction='row' justifyContent='space-between' spacing={1}>
        <UserProfileSideBar/>
        <Box flex={12} py={2}>
            <Container>
                <Paper elevation={3}>
                    <Stack padding={2} spacing={2} divider={<Divider/>}>
                    <Box marginBottom={1} sx={{ display:'flex', flexDirection:{ xs:'column',sm:'row'}, justifyContent:'space-between'}}>
                        <Typography variant="h4">Contrataciones</Typography>
                        <Typography variant="h4">Filtro Curso</Typography>
                        <Typography variant="h4">Filtro Estado</Typography>
                    </Box>
                        <Paper style={{ padding: "40px 20px" }}>
                            <ContratacionesFeed user={user}/>
                        </Paper>
                    </Stack>
                    
                </Paper>
            </Container>
        </Box> 
      </Stack>
      </Container>
      </Box>
    )
}