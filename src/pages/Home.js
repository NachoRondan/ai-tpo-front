import { Container, Stack } from "@mui/material"
import SidebarFilter from "../components/SidebarFilter"
import Feed from "../components/Feed"
import getCourses from "../assets/MockUpVariables/MockUpCourses"
import { useState } from "react";


const total_courses = getCourses()

export default function Home({user}) {

  const [courses, setCourses] = useState(total_courses)
  

  return (
    <Container>
      <Stack direction='row' justifyContent='space-between' spacing={1}>
        <SidebarFilter setCourses={setCourses} courses={courses}/>
        <Feed courses={courses}/>
      </Stack>
    </Container>
  )
}

