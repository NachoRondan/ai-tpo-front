import { Stack, FormControl, Input, InputAdornment, TextField, Paper, Box, Container, Typography, Card, CardActionArea, CardMedia, Avatar, CardHeader, Divider, Button, CardActions } from "@mui/material"
import { useParams } from "react-router-dom"
import getCourses from "../assets/MockUpVariables/MockUpCourses"
import getUsers from "../assets/MockUpVariables/MockUpUsers"
import getSubjects from "../assets/MockUpVariables/MockUpSubjects"
import MenuSelect from "../components/MenuSelect"
import { useState } from "react"
import EditCourseTitleButton from "../components/EditCourseTitleButton"
import PhotoCamera from '@mui/icons-material/PhotoCamera';


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
    const subjects = getSubjects()

    const [price, setPrice] = useState(course.price)
    
    return (
        <Box flex={12} >
            <Container>
                <Stack padding={2} spacing={2} divider={<Divider/>}>
                    <Paper elevation={3}>
                        <Box marginBottom={2} sx={{ display:'flex', flexDirection: 'column'}}>
                            <Box p={2} marginRight={1} marginBottom={1} sx={{ display:'flex', flexDirection:{ xs:'column',sm:'row'}, justifyContent:'space-between'}}>
                                <Typography variant="h3">{course.courseTitle}</Typography>
                                <EditCourseTitleButton/>
                            </Box>
                            <Container ><Divider/></Container>
                            <Box marginTop={2} px={2} sx={{ display:'flex', flexDirection: 'row'}}>
                            <Stack>
                                <Card sx={{ width: 380, display:{xs:'none', sm:'none', md:'block'} }}>
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
                                    <CardActions >
                                    
                                    </CardActions>
                                </Card>
                                <Box  marginTop={2} flex={12} sx={{display:{xs:'none',md:'flex'}, justifyContent:'center'}}>
                                    <Button color='secondary' variant="contained"  component="label" endIcon={<PhotoCamera />}>
                                        Cargar Nueva
                                        <input hidden accept="image/*" multiple type="file" />
                                    </Button>
                                    </Box>
                                    </Stack>
                                <Container >
                                    <Stack divider={<Divider/>}>
                                        <Box p={2} sx={{display:'flex', justifyContent:'space-around',  alignContent:'center'}}>
                                            <Box flex={6}>
                                                <Typography variant="h5" display='flex' flex={8} sx={{display:{xs:'none',sm:'block'}}}>Materia</Typography>
                                                <Typography variant="h6" display='flex' flex={8} sx={{display:{xs:'block',sm:'none'}}}>Materia</Typography>
                                            </Box>
                                            <Box flex={6}>
                                                <MenuSelect options={subjects} value={course.subjects[0]}/>
                                            </Box>
                                        </Box>
                                        <Box p={2} sx={{display:'flex', justifyContent:'space-around',  alignContent:'center'}}>
                                            <Box flex={6}>
                                                <Typography variant="h5" display='flex' flex={8} sx={{display:{xs:'none',sm:'block'}}}>Duracion</Typography>
                                                <Typography variant="h6" display='flex' flex={8} sx={{display:{xs:'block',sm:'none'}}}>Duracion</Typography>
                                            </Box>
                                            <Box flex={6}>
                                                <MenuSelect options={['Unica','Semanal','Mensual']} value={course.frecuency}/>
                                            </Box>
                                        </Box>
                                        <Box p={2} sx={{display:'flex', justifyContent:'space-around',  alignContent:'center'}}>
                                            <Box flex={6}>
                                                <Typography variant="h5" display='flex' flex={8} sx={{display:{xs:'none',sm:'block'}}}>Tipo de Clase</Typography>
                                                <Typography variant="h6" display='flex' flex={8} sx={{display:{xs:'block',sm:'none'}}}>Tipo de Clase</Typography>
                                            </Box>
                                            <Box flex={6}>
                                                <MenuSelect options={['Individual','Grupal']} value={course.classType}/>
                                            </Box>
                                        </Box>
                                        <Box p={2} sx={{display:'flex', justifyContent:'space-around',  alignContent:'center'}}>
                                            <Box flex={6}>
                                                <Typography variant="h5" display='flex' flex={8} sx={{display:{xs:'none',sm:'block'}}}>Costo</Typography>
                                                <Typography variant="h6" display='flex' flex={8} sx={{display:{xs:'block',sm:'none'}}}>Costo</Typography>
                                            </Box>
                                            <Box flex={6}>
                                                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                                                    <Input
                                                        id="standard-adornment-amount"
                                                        value={price}
                                                        onChange={(e) => setPrice(e.target.value)}
                                                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                                    />
                                                </FormControl>
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
                                        label="Editar descripcion"
                                        id="outlined-multiline-static"
                                        fullWidth  
                                        multiline
                                        rows={4}
                                        defaultValue={course.description}
                                    />
                                </Box>
                            </Container>
                        </Box>
                        <Box p={2} sx={{display:'flex', justifyContent:'space-around',  alignContent:'center'}}>
                            <Button color='success' variant="contained">Confirmar Modificaciones</Button>
                        </Box>
                    </Paper>
                </Stack>
            </Container>
        </Box>
        
    )
}