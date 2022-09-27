import { Box } from "@mui/material"
import NestedBooleanFilter from "./NestedBooleanFilter"
import NestedMenuFilter from "./NestedMenuFilter"
import getSubjects from "../assets/MockUpVariables/MockUpSubjects"
import Calification from "./Calification"
const subjects = getSubjects()

const calificationOptions = [
    <Calification calification={1}/>,
    <Calification calification={2}/>,
    <Calification calification={3}/>,
    <Calification calification={4}/>,
    <Calification calification={5}/>,

]

export default function SidebarFilter() {
    return (
      <Box sx={{borderRadius: '16px', display:{xs:'none', sm:'block'}, height: '100%', }} marginTop={2} flex={3} >
        <NestedMenuFilter filterName='Materias' options={subjects}/>
        <NestedBooleanFilter filterName='Tipo de Clase' options={['Individual','Grupal']}/>
        <NestedBooleanFilter filterName='Frecuencia' options={['Unica','Semanal','Mensual']}/>
        <NestedBooleanFilter filterName='Calificacion' options={calificationOptions}/>
      </Box> 
    )
}