import { Stack, FormControl, Input, InputAdornment, TextField, Paper, Box, Container, Typography, Card, CardActionArea, CardMedia, Avatar, CardHeader, Divider, Button, CardActions } from "@mui/material"
import { useParams, useNavigate } from "react-router-dom"
import getSubjects from "../assets/MockUpVariables/MockUpSubjects"
import { useState, useEffect } from "react"
import EditCourseTitleButton from "../components/EditCourseTitleButton"
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { getClassById } from '../controllers/courseController'
import { updateCourse } from "../controllers/courseController"
import EditCourseProperty from '../components/EditCourseProperty'


export default function EditCourse({user}) {
    const {courseId} = useParams()
    const navigate = useNavigate()

    const handleSubmitClass = ()=>{
        var course = {
            courseTitle : title,
            subject: subject,
            price : price,
            frequency : frequency,
            published: paused,
            duration : duration,
            description : description,
            classType : classType,
            courseId : courseId,
        }
        getCreatedCourse(course)
    }
    
    const getCreatedCourse = async function(course){
        var response = await updateCourse(course)

        if(response.rdo === 0){
            alert(response.mensaje)
            navigate('/my-courses')
        }
        else{
            alert(response.mensaje)
            navigate('/my-courses')
        }
    }
    
    

    const [course, setCourse] = useState([])
    const subjects = getSubjects()
    const [title, setTitle] = useState(course.courseTitle)
    const [picture, setPicture] = useState(course.picture)
    const [price, setPrice] = useState(course.price)
    const [subject, setSubject] = useState(course.subjects)
    const [paused, setPaused] = useState(course.paused)
    const [frequency, setFrequency] = useState(course.frequency)
    const [duration, setDuration] = useState(course.duration)
    const [description, setDescription] = useState(course.description)
    const [classType, setClassType] = useState(course.classType)


    useEffect(()=>{
        async function componentDidMount() 
        {
          //traer imagenes de User
          let rdo = await getClassById(courseId);
          setCourse(rdo.course); 
          setTitle(rdo.course.courseTitle)
          setPicture(rdo.course.picture)
          setPrice(rdo.course.price)
          setSubject(rdo.course.subjects)
          setPaused(rdo.course.paused)
          setFrequency(rdo.course.frequency)
          setDuration(rdo.course.frequency.charAt(0).toUpperCase() + rdo.course.frequency.slice(1).toLowerCase())
          setDescription(rdo.course.description)
          setClassType(rdo.course.classType.charAt(0).toUpperCase() + rdo.course.classType.slice(1).toLowerCase())
        }
        componentDidMount();
      },[]);
    return (
        <Box flex={12} style={{zIndex:1250}}>
            <Container>
                <Stack padding={2} spacing={2} divider={<Divider/>}>
                    <Paper elevation={3}>
                        <Box marginBottom={2} sx={{ display:'flex', flexDirection: 'column'}}>
                            <Box p={2} marginRight={1} marginBottom={1} sx={{ display:'flex', flexDirection:{ xs:'column',sm:'row'}, justifyContent:'space-between'}}>
                                <Typography variant="h3">{title}</Typography>
                                <EditCourseTitleButton setTitle={setTitle}/>
                            </Box>
                            <Container ><Divider/></Container>
                            <Box marginTop={2} px={2} sx={{ display:'flex', flexDirection: 'row'}}>
                            <Stack>
                                <Card sx={{ width: 380, display:{xs:'none', sm:'none', md:'block'} }}>
                                    <CardHeader
                                        avatar={
                                            <Avatar src={user.picture}/>
                                        }
                                        title={<Typography variant="h6">{user.name + ' ' + user.lastname}</Typography>}
                                    />
                                    <CardActionArea>
                                        <CardMedia 
                                            component='img'
                                            image={picture}
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
                                    <Stack divider={<Divider/>} >
                                        <Box p={2} sx={{display:'flex', justifyContent:'space-around',  alignContent:'center'}}>
                                            <Box flex={6} >
                                                <Typography variant="h5" display='flex' flex={8} sx={{display:{xs:'none',sm:'block'}}}>Materia</Typography>
                                                <Typography variant="h6" display='flex' flex={8} sx={{display:{xs:'block',sm:'none'}}}>Materia</Typography>
                                            </Box>
                                            <Box flex={6} >
                                                <Stack direction='row' spacing={5} sx={{display:'flex', justifyContent:'space-around',  alignItems:'center', alignContent:'center'}}>
                                                    <Typography variant="h5">{subject}</Typography>
                                                    <EditCourseProperty options={subjects} value={subject} setValue={setSubject}/>
                                                </Stack>
                                            </Box>
                                        </Box>
                                        <Box p={2} sx={{display:'flex', justifyContent:'space-around',  alignContent:'center'}}>
                                            <Box flex={6}>
                                                <Typography variant="h5" display='flex' flex={8} sx={{display:{xs:'none',sm:'block'}}}>Duracion</Typography>
                                                <Typography variant="h6" display='flex' flex={8} sx={{display:{xs:'block',sm:'none'}}}>Duracion</Typography>
                                            </Box>
                                            <Box flex={6}>
                                            <Stack direction='row' spacing={5} sx={{display:'flex', justifyContent:'space-around',  alignItems:'center', alignContent:'center'}}>
                                                <Typography variant="h5">{duration}</Typography>
                                                <EditCourseProperty options={['Unica','Semanal','Mensual']} value={duration} setValue={setDuration}/>
                                            </Stack>
                                            </Box>
                                        </Box>
                                        <Box p={2} sx={{display:'flex', justifyContent:'space-around',  alignContent:'center'}}>
                                            <Box flex={6}>
                                                <Typography variant="h5" display='flex' flex={8} sx={{display:{xs:'none',sm:'block'}}}>Tipo de Clase</Typography>
                                                <Typography variant="h6" display='flex' flex={8} sx={{display:{xs:'block',sm:'none'}}}>Tipo de Clase</Typography>
                                            </Box>
                                            <Box flex={6}>
                                                <Stack direction='row' spacing={5} sx={{display:'flex', justifyContent:'space-around',  alignItems:'center', alignContent:'center'}}>
                                                    <Typography variant="h5">{classType}</Typography>
                                                    <EditCourseProperty options={['Individual','Grupal']} value={classType} setValue={setClassType}/>
                                                </Stack>
                                            </Box>
                                        </Box>
                                        <Box p={2} sx={{display:'flex', justifyContent:'space-around',  alignContent:'center', alignItems:'center'}}>
                                            <Box flex={6}>
                                                <Typography variant="h5" display='flex' flex={8} sx={{display:{xs:'none',sm:'block'}}}>Costo</Typography>
                                                <Typography variant="h6" display='flex' flex={8} sx={{display:{xs:'block',sm:'none'}}}>Costo</Typography>
                                            </Box>
                                            <Box flex={6}>
                                                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                                                    <Input
                                                        inputProps={{style: {fontSize: 24}}}
                                                        id="standard-adornment-amount"
                                                        value={price}
                                                        onChange={(e) => isNaN(e.target.value.slice(-1)) ? null : setPrice(e.target.value)}
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
                                        id="outlined-multiline-static"
                                        fullWidth  
                                        multiline
                                        rows={4}
                                        defaultValue={description}
                                    />
                                </Box>
                            </Container>
                        </Box>
                        <Box p={2} sx={{display:'flex', justifyContent:'space-around',  alignContent:'center'}}>
                            <Button onClick={()=>{navigate('/my-courses')}} color='primary' variant="contained">Cancelar</Button>
                            <Button onClick={handleSubmitClass} color='success' variant="contained">Confirmar</Button>
                        </Box>
                    </Paper>
                </Stack>
            </Container>
        </Box>
        
    )
}