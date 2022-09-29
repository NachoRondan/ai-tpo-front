import { Stack, CardContent, Paper, Box, Container, Divider, Typography, Card, CardActionArea, CardMedia, Avatar, CardHeader } from "@mui/material"
import { useParams } from "react-router-dom"
import getCourses from "../assets/MockUpVariables/MockUpCourses"
import getUsers from "../assets/MockUpVariables/MockUpUsers"

function findCourse(courseId) {
    return getCourses().find((element) => {
      return element.courseId == courseId;
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
                <Stack padding={2} spacing={2}>
                    <Paper elevation={3}>
                        <Box sx={{ display:'flex', flexDirection: 'column', alignContent: 'space-around'}}>
                            <Box p={2} marginBottom={1}>
                                <Typography variant="h3">{course.courseTitle}</Typography>
                            </Box>
                            <Box px={2} sx={{ display:'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
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
                                <Container>
                                    Datos Curso
                                </Container>
                            </Box>
                        </Box>
                        <Box>
                            <Container>
                                Descripcion
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