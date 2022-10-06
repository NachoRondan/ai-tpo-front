import { Stack, Box, Container, Paper, Divider } from "@mui/material";
import UserData from "./UserData";






export default function UserProfile({user}) {
    var data_list = [
        {title:'Nombre', value: user.name, function: ''},
        {title:'Apellido', value: user.lastname, function: ''},
        {title:'Fecha de Nacimiento', value: user.birthday, function: ''},
        {title:'Email', value: user.email, function: ''},
        {title:'Estudios Finalizados', value: user.finishedStudies, function: ''},
        {title:'Estudios En Curso', value: user.onGoingStudies, function: ''},
        {title:'Experiencia', value: user.workExperience, function: ''},
        {title:'Titulos', value: user.educationTitles, function: ''},
    ]

    return (
      <Box flex={12} py={2}>
        <Container>
            <Paper elevation={3}>
                <Stack padding={2} spacing={2} divider={<Divider/>}>
                    {data_list.map((data_item)=>(
                        <UserData 
                            title={data_item.title} 
                            value={data_item.value}
                            function={data_item.function}
                        />
                    ))}
                </Stack>
            </Paper>
        </Container>
      </Box> 
    )
}
