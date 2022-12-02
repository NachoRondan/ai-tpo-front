import { Stack, Box, Container, Divider, Typography, Paper, Button } from "@mui/material"
import { useEffect, useState } from "react";
import {useNavigate, } from 'react-router-dom';
import UserProfileSideBar from "../components/SidebarProfileTitles"
import { getAllMyClassesStudent } from '../controllers/courseController'
import ViewHiredCourse from "../components/ViewHiredCourseHome";



function render(courses, navigate){
    if(courses.length > 0){
            return(
                <Stack padding={2} spacing={2} divider={<Divider/>}>           
                    {courses.map((course, index) => {
                        return(<ViewHiredCourse key={'edit-course-' + index} course={course}/>)
                    })}   
                </Stack>
            )
    }
    else{
        return(
            <Box flex={12} py={2}>
                <Container>
                    <Paper elevation={3}>
                    <Stack padding={2} spacing={2} divider={<Divider/>}>
                        <Box sx={{display:'flex'}} justifyContent='center'>
                            <Typography variant="h4">Aun no has contratado ninguna clase!</Typography>
                        </Box>
                        <Box sx={{display:'flex'}} justifyContent='center'>
                            <Button onClick={()=>navigate('/home')} color='secondary' variant="contained" sx={{width:300}}>Buscar Clases</Button>
                        </Box>
                    </Stack>
                    </Paper>
               </Container>
            </Box>
        )
    }
}

export default function MyCoursesStudent({user}) {
    const navigate = useNavigate()

    const [courses, setCourses] = useState([])  
    useEffect(()=>{
        async function componentDidMount() 
        {
          //traer imagenes de User
          let rdo = await getAllMyClassesStudent();
          setCourses(rdo.courses); 
        }
        componentDidMount();
      },[]);

    return (
        <Box >
            <Container>
                <Stack direction='row' justifyContent='space-between' spacing={1}>
                    <UserProfileSideBar/>
                    <Box flex={12}>
                        <Stack padding={2} spacing={2} divider={<Divider/>}>
                            {render(courses, navigate)}
                        </Stack>
                    </Box>
                   
                </Stack>
            </Container>
        </Box>
        
    )
}