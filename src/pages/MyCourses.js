import { Stack, Box, Container, Divider } from "@mui/material"
import getCourses from "../assets/MockUpVariables/MockUpCourses"
import EditCourse from "../components/EditCourse"

const courses = getCourses()


export default function MyCourses({user}) {

    return (
        <Box flex={12} >
            <Container>
                <Stack padding={2} spacing={2} divider={<Divider/>}>
                    {courses.filter(course => course.profesorId === user.userId).map((course) => {
                        return(
                            <EditCourse course={course} />
                        )
                    })}
                </Stack>
            </Container>
        </Box>
        
    )
}