import { Container, Stack } from "@mui/material"
import SidebarFilter from "../components/SidebarFilter"
import Feed from "../components/Feed"
import getCourses from "../assets/MockUpVariables/MockUpCourses"
import { useState, useEffect } from "react";
import { getAllClasses } from '../controllers/courseController';

//const total_courses = getCourses()



export default function Home({user}) {
  const [total_courses, setTotalCourses] = useState([]) 
  const [courses, setCourses] = useState([])  

  useEffect(()=>{
    async function componentDidMount() 
    {
      //traer imagenes de User
      let rdo = await getAllClasses();
      setTotalCourses(rdo.courses)
      setCourses(rdo.courses); 
    }
    componentDidMount();
  },[]);

  
  const [classTypeFilter, setClassTypeFilter] = useState([])
  const [classFrecuencyFilter, setClassFrecuencyFilter] = useState([])
  const [calificationFilter, setCalificationFilter] = useState([])
  const [subjectFilter, setSubjectFilter] = useState('')

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
    if(calificationFilter.length === 0){
      return course
    }
    for (let index = 0; index < calificationFilter.length; index++) {
      if(Math.round(course.calification) === parseInt(calificationFilter[index])){
        return course
      }
    }
  }

  function filterSubject(course){
    if(subjectFilter === ''){
      return course
    }
    for (let index = 0; index < course.subjects.length; index++) {
      if(course.subjects[index] === subjectFilter){
        return course
      }
    }
  }
  
  function filterCourse(course){
    if(filterClassFrecuency(course) && filterClassType(course) && filterClassCalification(course) && filterSubject(course)){
      return course
    }
  }

  function areFiltersEmpty(){
    if(classTypeFilter.length === 0 && filterClassType.length === 0 && filterClassCalification.length === 0 && filterSubject === ''){
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
          subjectFilter={subjectFilter} setSubjectFilter={setSubjectFilter}
        />
        <Feed courses={filterCourses()}/>
      </Stack>
    </Container>
  )
}

