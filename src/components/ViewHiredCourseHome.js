import { Paper, Box, List, ListItem, ListItemText, Typography, Container, Divider, Card, CardActionArea, CardMedia, Button,} from "@mui/material"
import { useNavigate } from "react-router-dom";
import CalificationButton from "./CalificationButton";


export default function ViewHiredCourse({course}) {
    const navigate = useNavigate()
    return (
        <Paper elevation={3}>
            <Box marginBottom={2} sx={{ display:'flex', flexDirection: 'column'}}>
                <Box p={2} marginRight={1} marginBottom={1} sx={{ display:'flex', flexDirection:{ xs:'column',sm:'row'}, justifyContent:'space-between'}}>
                    <Typography variant="h3">{course.courseTitle}</Typography>
                </Box>
                <Container ><Divider/></Container>
                <Box marginTop={2} px={2} sx={{ display:'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <Card sx={{ maxWidth: 345, display:{xs:'none', sm:'none', md:'block'} }}>
                        <CardActionArea>
                            <CardMedia 
                                component='img'
                                image={course.picture}
                            />
                        </CardActionArea>
                    </Card>
                    <Container >
                            <List >
                                <ListItem
                                        secondaryAction={
                                            <CalificationButton calification={course.calification} course={course}/>
                                        }
                                    >
                                    <ListItemText
                                        primary={
                                                <Typography variant="h5">Tu Calificacion</Typography>
                                        }
                                    />
                                </ListItem>
                                <Divider/>
                                <Box marginTop={4} sx={{display:'flex', justifyContent:'center'}}>
                                    <Button onClick={()=> navigate('/enrolled-course/'+course.courseId)} variant='contained' color='secondary'>Ver Informacion del Curso</Button>
                                </Box>
                            </List>
                    </Container>
                </Box>
            </Box>
        </Paper>
    )
}
        