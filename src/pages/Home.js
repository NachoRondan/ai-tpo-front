import { Container, Stack } from "@mui/material"
import SidebarFilter from "../components/SidebarFilter"
import Feed from "../components/Feed"
import getCourses from "../assets/MockUpVariables/MockUpCourses"
import { useState } from "react";


const total_courses = getCourses()



export default function Home({user}) {

  const [courses, setCourses] = useState(total_courses)
  const [classTypeFilter, setClassTypeFilter] = useState([])
  const [classFrecuencyFilter, setClassFrecuencyFilter] = useState([])
  const [calificationFilter, setCalificationFilter] = useState([])


  function filterClassType(course){
    if(classTypeFilter.length === 0){
      return course
    }
    for (let index = 0; index < classTypeFilter.length; index++) {
      if(course.classType === classTypeFilter[index]){
        return course
      }
    }
  }

  function filterClassFrecuency(course){
    if(classFrecuencyFilter.length === 0){
      return course
    }
    for (let index = 0; index < classFrecuencyFilter.length; index++) {
      if(course.frecuency === classFrecuencyFilter[index]){
        return course
      }
    }
  }

  function filterClassCalification(course){
    console.log(calificationFilter)
    if(calificationFilter.length === 0){
      return course
    }
    for (let index = 0; index < calificationFilter.length; index++) {
      if(Math.round(course.calification) === parseInt(calificationFilter[index])){
        return course
      }
    }
  }
  
  function filterCourse(course){
    if(filterClassFrecuency(course) && filterClassType(course) && filterClassCalification(course)){
      return course
    }
  }

  function areFiltersEmpty(){
    if(classTypeFilter.length === 0 && filterClassType.length === 0 && filterClassCalification.length === 0 ){
      return true
    }
  }

  function filterCourses(){
    let aux = []
    if(areFiltersEmpty()){
      aux = total_courses
    }
    else{
      aux = total_courses.filter(course => filterCourse(course))
    }
    return aux
  }
  
  return (
    <Container>
      <Stack direction='row' justifyContent='space-between' spacing={1}>
        <SidebarFilter setCourses={setCourses} courses={courses}
          classTypeFilter={classTypeFilter} setClassTypeFilter={setClassTypeFilter}
          classFrecuencyFilter={classFrecuencyFilter} setClassFrecuencyFilter={setClassFrecuencyFilter}
          calificationFilter={calificationFilter} setCalificationFilter={setCalificationFilter}
        />
        <Feed courses={filterCourses()}/>
      </Stack>
    </Container>
  )
}

