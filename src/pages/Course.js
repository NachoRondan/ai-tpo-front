import { Stack, TextField, Paper, Box, Container, Typography, Card, CardActionArea, CardMedia, Avatar, CardHeader, Divider } from "@mui/material"
import { useParams } from "react-router-dom"
import getCourses from "../assets/MockUpVariables/MockUpCourses"
import getUsers from "../assets/MockUpVariables/MockUpUsers"
import Calification from '../components/Calification'

function findCourse(courseId) {
    return getCourses().find((element) => {
      return element.courseId === parseInt(courseId)
    })
}

function findProfesor(profesorId) {
    return getUsers().find((element) => {
      return element.userId === profesorId;
    })
}

export default function Course({user}) {

    const {courseId} = useParams()
    const course = findCourse(courseId)
    const profesor = findProfesor(course.profesorId)
    return (
        <Box flex={12} >
            <Container>
                <Stack padding={2} spacing={2} divider={<Divider/>}>
                    <Paper elevation={3}>
                        <Box marginBottom={2} sx={{ display:'flex', flexDirection: 'column'}}>
                            <Box p={2} marginBottom={1}>
                                <Typography variant="h3">{course.courseTitle}</Typography>
                            </Box>
                            <Container ><Divider/></Container>
                            <Box marginTop={2} px={2} sx={{ display:'flex', flexDirection: 'row'}}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardHeader
                                        avatar={
                                            <Avatar src={profesor.picture}/>
                                        }
                                        title={<Typography variant="h6">{profesor.name + ' ' + profesor.lastname}</Typography>}
                                    />
                                    <CardActionArea>
                                        <CardMedia 
                                            component='img'
                                            image={course.picture}
                                        />
                                    </CardActionArea>
                                </Card>
                                <Container >
                                    <Stack divider={<Divider/>}>
                                        <Box p={2} sx={{display:'flex', justifyContent:'space-around', }}>
                                            <Box sx={{display:'flex', justifyContent:'center', }}>
                                                <Typography variant="h5" display='flex' flex={8} >Calificacion</Typography>
                                            </Box>
                                            <Box sx={{display:'flex', justifyContent:'center', }}>
                                                <Calification calification={course.calification}/>
                                            </Box>
                                        </Box>
                                        <Box p={2} sx={{display:'flex', justifyContent:'space-around',  alignContent:'center'}}>
                                            <Box sx={{display:'flex', justifyContent:'center', }}>
                                                <Typography variant="h5" display='flex' flex={8} >Materia</Typography>
                                            </Box>
                                            <Box sx={{display:'flex', justifyContent:'center',}}>
                                            <Typography variant="h5" display='flex' flex={8} >{course.subjects[0]}</Typography>
                                            </Box>
                                        </Box>
                                        <Box p={2} sx={{display:'flex', justifyContent:'space-around',  alignContent:'center'}}>
                                            <Box sx={{display:'flex', justifyContent:'center', }}>
                                                <Typography variant="h5" display='flex' flex={8} >Duracion</Typography>
                                            </Box>
                                            <Box sx={{display:'flex', justifyContent:'center',}}>
                                            <Typography variant="h5" display='flex' flex={8} >{course.frecuency}</Typography>
                                            </Box>
                                        </Box>
                                        <Box p={2} sx={{display:'flex', justifyContent:'space-around',  alignContent:'center'}}>
                                            <Box sx={{display:'flex', justifyContent:'center', }}>
                                                <Typography variant="h5" display='flex' flex={8} >Tipo de Clase</Typography>
                                            </Box>
                                            <Box sx={{display:'flex', justifyContent:'center',}}>
                                            <Typography variant="h5" display='flex' flex={8} >{course.classType}</Typography>
                                            </Box>
                                        </Box>
                                        <Box p={2} sx={{display:'flex', justifyContent:'space-around',  alignContent:'center'}}>
                                            <Box sx={{display:'flex', justifyContent:'center', }}>
                                                <Typography variant="h5" display='flex' flex={8} >Costo</Typography>
                                            </Box>
                                            <Box sx={{display:'flex', justifyContent:'center',}}>
                                            <Typography variant="h5" display='flex' flex={8} >{'$' + course.price}</Typography>
                                            </Box>
                                        </Box>
                                    </Stack>
                                </Container>
                            </Box>
                        </Box>
                            <Container ><Divider/></Container>
                        <Box>
                            <Container>
                                <Box py={2}>
                                    <Typography variant="h5" display='flex' flex={8} >
                                        Descripción del Curso
                                    </Typography>
                                    <TextField
                                        id="outlined-multiline-static"
                                        label="Multiline"
                                        fullWidth 
                                        disabled 
                                        multiline
                                        rows={4}
                                        defaultValue="Default Value"
                                    />
                                </Box>
                            </Container>
                        </Box>
                    </Paper>
                    <Paper elevation={3}>
                    <Box p={2}>
                    <Box>
                    Comentarios
                    </Box>
                    </Box> 
                    </Paper>
                </Stack>
            </Container>
        </Box>
        
    )
}