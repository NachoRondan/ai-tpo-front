import { Stack, FormControl, Input, InputAdornment, TextField, Paper, Box, Container, Typography, Card, CardActionArea, CardMedia, Avatar, CardHeader, Divider, Button, CardActions, } from "@mui/material"
import getSubjects from "../assets/MockUpVariables/MockUpSubjects"
import MenuSelect from "../components/MenuSelect"
import { useState } from "react"
import EditCourseTitleButton from "../components/EditCourseTitleButton"
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import DefaultPicture from '../assets/default_class.jpg'
import { createCourse } from '../controllers/courseController';
import { useNavigate } from "react-router-dom"


export default function NewCourse({user}) {
    const navigate = useNavigate()

    const handleSubmitClass = ()=>{
        var course = {
            title : title,
            subject: subject,
            price : price,
            frequency : frequency,
            duration : duration,
            description : description,
            classType : classType
        }
        getCreatedCourse(course)
    }
    
    const getCreatedCourse = async function(course){
        var response = await createCourse(course)

        if(response.rdo === 0){
            alert(response.mensaje)
            navigate('/my-courses')
        }
        else{
            alert(response.mensaje)
            navigate('/my-courses')
        }
    }

    const subjects = getSubjects()
    
    const [title, setTitle] = useState('Titulo del Curso')
    const [picture, setPicture] = useState(DefaultPicture)
    const [price, setPrice] = useState(15000)
    const [subject, setSubject] = useState('Bases de Datos')
    const [frequency, setFrequency] = useState('Mensual')
    const [duration, setDuration] = useState('Unica')
    const [description, setDescription] = useState('Ingrese una descripcion')
    const [classType, setClassType] = useState('Grupal')

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
                                                <MenuSelect options={subjects} value={subject}/>
                                            </Box>
                                        </Box>
                                        <Box p={2} sx={{display:'flex', justifyContent:'space-around',  alignContent:'center'}}>
                                            <Box flex={6}>
                                                <Typography variant="h5" display='flex' flex={8} sx={{display:{xs:'none',sm:'block'}}}>Duracion</Typography>
                                                <Typography variant="h6" display='flex' flex={8} sx={{display:{xs:'block',sm:'none'}}}>Duracion</Typography>
                                            </Box>
                                            <Box flex={6}>
                                                <MenuSelect options={['Unica','Semanal','Mensual']} value={duration}/>
                                            </Box>
                                        </Box>
                                        <Box p={2} sx={{display:'flex', justifyContent:'space-around',  alignContent:'center'}}>
                                            <Box flex={6}>
                                                <Typography variant="h5" display='flex' flex={8} sx={{display:{xs:'none',sm:'block'}}}>Tipo de Clase</Typography>
                                                <Typography variant="h6" display='flex' flex={8} sx={{display:{xs:'block',sm:'none'}}}>Tipo de Clase</Typography>
                                            </Box>
                                            <Box flex={6}>
                                                <MenuSelect options={['Individual','Grupal']} value={classType}/>
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
                                        defaultValue={description}
                                    />
                                </Box>
                            </Container>
                        </Box>
                        <Box p={2} sx={{display:'flex', justifyContent:'space-around',  alignContent:'center'}}>
                            <Button color='primary' variant="contained">Cancelar</Button>
                            <Button onClick={handleSubmitClass} color='success' variant="contained">Confirmar</Button>
                        </Box>
                    </Paper>
                </Stack>
            </Container>
        </Box>
        
    )
}