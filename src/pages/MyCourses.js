import { Stack, Paper, Box, Container, Typography, Divider } from "@mui/material"
import getCourses from "../assets/MockUpVariables/MockUpCourses"
import HireClassButton from "../components/HireClassButton"


export default function MyCourses({user}) {

    return (
        <Box flex={12} >
            <Container>
                <Stack padding={2} spacing={2} divider={<Divider/>}>
                    <Paper elevation={3}>
                        <Box marginBottom={2} sx={{ display:'flex', flexDirection: 'column'}}>
                            <Box p={2} marginRight={1} marginBottom={1} sx={{ display:'flex', flexDirection:{ xs:'column',sm:'row'}, justifyContent:'space-between'}}>
                                <Typography variant="h3">Titulo</Typography>
                                <HireClassButton/>
                            </Box>
                        </Box>
                    </Paper>
                </Stack>
            </Container>
        </Box>
        
    )
}