import { Box } from "@mui/material"
import NestedBooleanFilter from "./NestedBooleanFilter"
import NestedMenuFilter from "./NestedMenuFilter"


export default function SidebarFilter() {
    return (
      <Box flex={3} sx={{display:{xs:'none', sm:'block'}, height: '100%' }} >
        <NestedMenuFilter filterName='Materias' options={['Matematica','Lengua']}/>
        <NestedBooleanFilter filterName='Tipo de Clase' options={['Individual','Grupal']}/>
        <NestedBooleanFilter filterName='Frecuencia' options={['Unica','Semanal','Mensual']}/>
        <NestedBooleanFilter filterName='Calificacion' options={['*','**','***','****','*****']}/>
      </Box> 
    )
}