import { Stack, TextField, Paper, Box, Container, Typography, Card, CardActionArea, CardMedia, Avatar, CardHeader, Divider } from "@mui/material"
import { useParams } from "react-router-dom"
import getCourses from "../assets/MockUpVariables/MockUpCourses"
import getUsers from "../assets/MockUpVariables/MockUpUsers"
import Calification from '../components/Calification'
import CommentsFeed from '../components/CommentsFeed'
import HireClassButton from "../components/HireClassButton"

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

export default function EditCourse({user}) {

    const {courseId} = useParams()
    const course = findCourse(courseId)
    const profesor = findProfesor(course.profesorId)
    return (
        <Box flex={12} >
            <Container>
                <Stack padding={2} spacing={2} divider={<Divider/>}>
                    <Paper elevation={3}>
                        <Box marginBottom={2} sx={{ display:'flex', flexDirection: 'column'}}>
                            <Box p={2} marginRight={1} marginBottom={1} sx={{ display:'flex', flexDirection:{ xs:'column',sm:'row'}, justifyContent:'space-between'}}>
                                <Typography variant="h3">{course.courseTitle}</Typography>
                                <HireClassButton/>
                            </Box>
                            <Container ><Divider/></Container>
                            <Box marginTop={2} px={2} sx={{ display:'flex', flexDirection: 'row'}}>
                                <Card sx={{ maxWidth: 345, display:{xs:'none', sm:'none', md:'block'} }}>
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
                                        <Box flex={12} p={2} sx={{display:'flex', justifyContent:'space-around',}}>
                                            <Box flex={6}>
                                                <Typography variant="h5" display='flex' flex={8} sx={{display:{xs:'none',sm:'block'}}}>Calificacion</Typography>
                                                <Typography variant="h6" display='flex' flex={8} sx={{display:{xs:'block',sm:'none'}}}>Calificacion</Typography>
                                            </Box>
                                            <Box flex={6}>
                                                <Calification calification={course.calification}/>
                                            </Box>
                                        </Box>
                                        <Box p={2} sx={{display:'flex', justifyContent:'space-around',  alignContent:'center'}}>
                                            <Box flex={6}>
                                                <Typography variant="h5" display='flex' flex={8} sx={{display:{xs:'none',sm:'block'}}}>Materia</Typography>
                                                <Typography variant="h6" display='flex' flex={8} sx={{display:{xs:'block',sm:'none'}}}>Materia</Typography>
                                            </Box>
                                            <Box flex={6}>
                                                <Typography variant="h5" display='flex' flex={8} sx={{display:{xs:'none',sm:'block'}}}>{course.subjects[0]}</Typography>
                                                <Typography variant="h6" display='flex' flex={8} sx={{display:{xs:'block',sm:'none'}}}>{course.subjects[0]}</Typography>
                                            </Box>
                                        </Box>
                                        <Box p={2} sx={{display:'flex', justifyContent:'space-around',  alignContent:'center'}}>
                                            <Box flex={6}>
                                                <Typography variant="h5" display='flex' flex={8} sx={{display:{xs:'none',sm:'block'}}}>Duracion</Typography>
                                                <Typography variant="h6" display='flex' flex={8} sx={{display:{xs:'block',sm:'none'}}}>Duracion</Typography>
                                            </Box>
                                            <Box flex={6}>
                                                <Typography variant="h5" display='flex' flex={8} sx={{display:{xs:'none',sm:'block'}}}>{course.frecuency}</Typography>
                                                <Typography variant="h6" display='flex' flex={8} sx={{display:{xs:'block',sm:'none'}}}>{course.frecuency}</Typography>
                                            </Box>
                                        </Box>
                                        <Box p={2} sx={{display:'flex', justifyContent:'space-around',  alignContent:'center'}}>
                                            <Box flex={6}>
                                                <Typography variant="h5" display='flex' flex={8} sx={{display:{xs:'none',sm:'block'}}}>Tipo de Clase</Typography>
                                                <Typography variant="h6" display='flex' flex={8} sx={{display:{xs:'block',sm:'none'}}}>Tipo de Clase</Typography>
                                            </Box>
                                            <Box flex={6}>
                                                <Typography variant="h5" display='flex' flex={8} sx={{display:{xs:'none',sm:'block'}}}>{course.classType}</Typography>
                                                <Typography variant="h6" display='flex' flex={8} sx={{display:{xs:'block',sm:'none'}}}>{course.classType}</Typography>
                                            </Box>
                                        </Box>
                                        <Box p={2} sx={{display:'flex', justifyContent:'space-around',  alignContent:'center'}}>
                                            <Box flex={6}>
                                                <Typography variant="h5" display='flex' flex={8} sx={{display:{xs:'none',sm:'block'}}}>Costo</Typography>
                                                <Typography variant="h6" display='flex' flex={8} sx={{display:{xs:'block',sm:'none'}}}>Costo</Typography>
                                            </Box>
                                            <Box flex={6}>
                                                <Typography variant="h5" display='flex' flex={8} sx={{display:{xs:'none',sm:'block'}}}>{'$' + course.price}</Typography>
                                                <Typography variant="h6" display='flex' flex={8} sx={{display:{xs:'block',sm:'none'}}}>{'$' + course.price}</Typography>
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
                                    <Typography marginBottom={2} variant="h5" display='flex' flex={8} >
                                        Descripción del Curso
                                    </Typography>
                                    <TextField
                                        id="outlined-multiline-static"
                                        fullWidth 
                                        disabled 
                                        multiline
                                        rows={4}
                                        defaultValue={course.description}
                                    />
                                </Box>
                            </Container>
                        </Box>
                    </Paper>
                    <Paper elevation={3}>
                    <Box p={2}>
                        <CommentsFeed/>
                    </Box> 
                    </Paper>
                </Stack>
            </Container>
        </Box>
        
    )
}