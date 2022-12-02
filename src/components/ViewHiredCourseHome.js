import { Paper, Box, List, ListItem, ListItemText, IconButton, Typography, Container, Divider, Card, CardActionArea, CardMedia, Button,} from "@mui/material"
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import AlertDeleteCourse from "./AlertDeleteCourse";
import AlertPausedCourse from "./AlertPausedCourse";
import { Link } from "react-router-dom";

export default function ViewHiredCourse({course}) {
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
                                            <AlertPausedCourse course={course}/>
                                        }
                                    >
                                    <ListItemText
                                        primary={<Typography variant="h5">Calificar</Typography>}
                                    />
                                </ListItem>
                                <Divider/>
                                <Box marginTop={4} sx={{display:'flex', justifyContent:'center'}}>
                                    <Button variant='contained' color='secondary' >Ver Informacion del Curso</Button>
                                </Box>
                            </List>
                    </Container>
                </Box>
            </Box>
        </Paper>
    )
}
        