import { Paper, Box, List, ListItem, ListItemText, IconButton, Typography, Container, Divider, Card, CardActionArea, CardMedia,} from "@mui/material"
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import AlertDeleteCourse from "./AlertDeleteCourse";
import AlertPausedCourse from "./AlertPausedCourse";
import { Link } from "react-router-dom";

export default function EditCoursesHome({course}) {
    console.log('here')
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
                                            <Link to={'/edit-course/'+ course.courseId} style={{ textDecoration: 'none', color: 'unset' }}>
                                                <IconButton size="large" edge="end" color='secondary'>
                                                    <EditOutlinedIcon />
                                                </IconButton>
                                            </Link>
                                        }
                                    >
                                    <ListItemText
                                        primary={<Typography variant="h5">Editar</Typography>}
                                    />
                                </ListItem>
                                <Divider/>
                                <ListItem
                                        secondaryAction={
                                            <AlertPausedCourse course={course}/>
                                        }
                                    >
                                    <ListItemText
                                        primary={<Typography variant="h5">Pausar</Typography>}
                                    />
                                </ListItem>
                                <Divider/>
                                <ListItem
                                    secondaryAction={
                                        <AlertDeleteCourse />
                                    }
                                >
                                <ListItemText
                                    primary={<Typography variant="h5">Eliminar</Typography>}
                                />
                                </ListItem>
                            </List>
                    </Container>
                </Box>
            </Box>
        </Paper>
    )
}
        