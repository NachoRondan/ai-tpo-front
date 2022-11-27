import { Stack, Box, Container, Paper, Divider, } from "@mui/material";
import { useState } from "react";
import UserData from "./UserData";
import { UploadPictureButton } from "./UploadProfileButton";

export default function UserProfile({user, setUser}) {
    const [name, setName] = useState(user.name)
    const [lastname, setLastname] = useState(user.lastname)
    const [birthday, setBirthday] = useState(user.birthday.substring(0, 10))
    const [email, setEmail] = useState(user.email)
    const [finishedStudies, setFinishedStudies] = useState(user.finishedStudies)
    const [onGoingStudies, setOnGoingStudies] = useState(user.onGoingStudies)
    const [workExperience, setWorkExperience] = useState(user.workExperience ? user.workExperience : [])
    const [educationTitles, setEducationTitles] = useState(user.educationTitles ? user.educationTitles : [])
    
    var data_list = [
        {title:'Nombre', value: name, function: setName, options: ''},
        {title:'Apellido', value: lastname, function: setLastname, options: ''},
        {title:'Fecha de Nacimiento', value: birthday, function: setBirthday, options: ''},
        {title:'Email', value: email, function: setEmail, options: ''},
        {title:'Estudios Finalizados', value: finishedStudies, function: setFinishedStudies, options: ['Primario', 'Secundario', 'Terciario', 'Universitario']},
        {title:'Estudios En Curso', value: onGoingStudies, function: setOnGoingStudies, options: ['Primario', 'Secundario', 'Terciario', 'Universitario']},
        {title:'Experiencia', value: workExperience, function: setWorkExperience, options: ['Primario', 'Secundario', 'Terciario', 'Universitario']},
        {title:'Titulos', value: educationTitles, function:setEducationTitles, options: ['Primario', 'Secundario', 'Terciario', 'Universitario']},
    ]

    return (
      <Box flex={12} py={2}>
        <Container>
            <Paper elevation={3}>
                <Stack padding={2} spacing={2} divider={<Divider/>}>
                    <UploadPictureButton user={user} setUser={setUser}/>
                    {data_list.map((data_item, index)=>(
                        <UserData 
                            data={data_item}
                            value={data_item.value}
                            key={index}
                        />
                    ))}
                </Stack>
            </Paper>
        </Container>
      </Box> 
    )
}
