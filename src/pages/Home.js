import { Container, Stack } from "@mui/material"
import SidebarFilter from "../components/SidebarFilter"
import Feed from "../components/Feed"
import getCourses from "../assets/MockUpVariables/MockUpCourses"

const courses = getCourses()

export default function Home({user}) {
    return (
      <Container>
        <Stack direction='row' justifyContent='space-between' spacing={1}>
          <SidebarFilter/>
          <Feed courses={courses}/>
        </Stack>
      </Container>
    )
  }