import { Stack, TextField, Paper, Box, Container, Typography, Card, CardActionArea, CardMedia, Avatar, CardHeader, Divider } from "@mui/material"
import { useParams } from "react-router-dom"
import Calification from '../components/Calification'
import CommentsFeed from '../components/CommentsFeed'
import HireClassButton from "../components/HireClassButton"
import { useState, useEffect } from "react"
import { getClassById } from '../controllers/courseController'


export default function Course({user}) {

    const {courseId} = useParams()
    
    const [course, setCourse] = useState([])
    const [title, setTitle] = useState(course.courseTitle)
    const [picture, setPicture] = useState(course.picture)
    const [price, setPrice] = useState(course.price)
    const [subject, setSubject] = useState(course.subjects)
    const [frequency, setFrequency] = useState(course.frequency)
    const [calification, setCalification] = useState(course.calification)
    const [description, setDescription] = useState(course.description)
    const [classType, setClassType] = useState(course.classType)
    const [professorLastname, setProfessorLastname] = useState(course.professorLastname)
    const [professorName, setProfessorName] = useState(course.professorName)


    useEffect(()=>{
        async function componentDidMount() 
        {
          //traer imagenes de User
          let rdo = await getClassById(courseId);
          setCalification(rdo.course.calification)
          setCourse(rdo.course); 
          setTitle(rdo.course.courseTitle)
          setPicture(rdo.course.picture)
          setPrice(rdo.course.price)
          setSubject(rdo.course.subjects)
          setProfessorName(rdo.course.professorName)
          setCalification(rdo.course.calification)
          setProfessorLastname(rdo.course.professorLastname)
          setFrequency(rdo.course.frequency.charAt(0).toUpperCase() + rdo.course.frequency.slice(1).toLowerCase())
          setDescription(rdo.course.description)
          setClassType(rdo.course.classType.charAt(0).toUpperCase() + rdo.course.classType.slice(1).toLowerCase())
        }
        componentDidMount();
      },[]);

    return (
        <Box flex={12} >
            <Container>
                <Stack padding={2} spacing={2} divider={<Divider/>}>
                    <Paper elevation={3}>
                        <Box marginBottom={2} sx={{ display:'flex', flexDirection: 'column'}}>
                            <Box p={2} marginRight={1} marginBottom={1} sx={{ display:'flex', flexDirection:{ xs:'column',sm:'row'}, justifyContent:'space-between'}}>
                                <Typography variant="h3">{title}</Typography>
                                <HireClassButton user={user} courseId={courseId}/>
                            </Box>
                            <Container ><Divider/></Container>
                            <Box marginTop={2} px={2} sx={{ display:'flex', flexDirection: 'row'}}>
                                <Card sx={{ maxWidth: 345, display:{xs:'none', sm:'none', md:'block'} }}>
                                    <CardHeader
                                        avatar={
                                            <Avatar src={""}/>
                                        }
                                        title={<Typography variant="h6">{professorName + ' ' + professorLastname}</Typography>}
                                    />
                                    <CardActionArea>
                                        <CardMedia 
                                            component='img'
                                            image={picture}
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
                                                <Calification calification={calification}/>
                                            </Box>
                                        </Box>
                                        <Box p={2} sx={{display:'flex', justifyContent:'space-around',  alignContent:'center'}}>
                                            <Box flex={6}>
                                                <Typography variant="h5" display='flex' flex={8} sx={{display:{xs:'none',sm:'block'}}}>Materia</Typography>
                                                <Typography variant="h6" display='flex' flex={8} sx={{display:{xs:'block',sm:'none'}}}>Materia</Typography>
                                            </Box>
                                            <Box flex={6}>
                                                <Typography variant="h5" display='flex' flex={8} sx={{display:{xs:'none',sm:'block'}}}>{subject}</Typography>
                                                <Typography variant="h6" display='flex' flex={8} sx={{display:{xs:'block',sm:'none'}}}>{subject}</Typography>
                                            </Box>
                                        </Box>
                                        <Box p={2} sx={{display:'flex', justifyContent:'space-around',  alignContent:'center'}}>
                                            <Box flex={6}>
                                                <Typography variant="h5" display='flex' flex={8} sx={{display:{xs:'none',sm:'block'}}}>Frecuencia</Typography>
                                                <Typography variant="h6" display='flex' flex={8} sx={{display:{xs:'block',sm:'none'}}}>Frecuencia</Typography>
                                            </Box>
                                            <Box flex={6}>
                                                <Typography variant="h5" display='flex' flex={8} sx={{display:{xs:'none',sm:'block'}}}>{frequency}</Typography>
                                                <Typography variant="h6" display='flex' flex={8} sx={{display:{xs:'block',sm:'none'}}}>{frequency}</Typography>
                                            </Box>
                                        </Box>
                                        <Box p={2} sx={{display:'flex', justifyContent:'space-around',  alignContent:'center'}}>
                                            <Box flex={6}>
                                                <Typography variant="h5" display='flex' flex={8} sx={{display:{xs:'none',sm:'block'}}}>Tipo de Clase</Typography>
                                                <Typography variant="h6" display='flex' flex={8} sx={{display:{xs:'block',sm:'none'}}}>Tipo de Clase</Typography>
                                            </Box>
                                            <Box flex={6}>
                                                <Typography variant="h5" display='flex' flex={8} sx={{display:{xs:'none',sm:'block'}}}>{classType}</Typography>
                                                <Typography variant="h6" display='flex' flex={8} sx={{display:{xs:'block',sm:'none'}}}>{classType}</Typography>
                                            </Box>
                                        </Box>
                                        <Box p={2} sx={{display:'flex', justifyContent:'space-around',  alignContent:'center'}}>
                                            <Box flex={6}>
                                                <Typography variant="h5" display='flex' flex={8} sx={{display:{xs:'none',sm:'block'}}}>Costo</Typography>
                                                <Typography variant="h6" display='flex' flex={8} sx={{display:{xs:'block',sm:'none'}}}>Costo</Typography>
                                            </Box>
                                            <Box flex={6}>
                                                <Typography variant="h5" display='flex' flex={8} sx={{display:{xs:'none',sm:'block'}}}>{'$' + price}</Typography>
                                                <Typography variant="h6" display='flex' flex={8} sx={{display:{xs:'block',sm:'none'}}}>{'$' + price}</Typography>
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
                                        defaultValue={description}
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