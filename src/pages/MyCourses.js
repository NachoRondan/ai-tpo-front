import { Stack, Box, Container, Divider } from "@mui/material"
import getCourses from "../assets/MockUpVariables/MockUpCourses"
import EditCoursesHome from "../components/EditCoursesHome"
import UserProfileSideBar from "../components/SidebarProfileTitles"

const courses = getCourses()


export default function MyCourses({user}) {

    return (
        <Box >
            <Container>
                <Stack direction='row' justifyContent='space-between' spacing={1}>
                    <UserProfileSideBar/>
                    <Box flex={12}>
                        <Stack padding={2} spacing={2} divider={<Divider/>}>
                            {courses.filter(course => course.profesorId === user.userId).map((course) => {
                                return(
                                    <EditCoursesHome course={course} />
                                )
                            })}
                        </Stack>
                    </Box>
                </Stack>
            </Container>
        </Box>
        
    )
}