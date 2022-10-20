import NestedBooleanFilter from "./NestedBooleanFilter"
import { Box } from "@mui/material"
import NestedMenuFilter from "./NestedMenuFilter"
import getSubjects from "../assets/MockUpVariables/MockUpSubjects"
import Calification from "./Calification"
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import StarRateIcon from '@mui/icons-material/StarRate';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MobileSideBar from "./MobileSideBar"

const subjects = getSubjects()

const calificationOptions = [
    {label:<Calification calification={1}/>, value:1},
    {label:<Calification calification={2}/>, value:2},
    {label:<Calification calification={3}/>, value:3},
    {label:<Calification calification={4}/>, value:4},
    {label:<Calification calification={5}/>, value:5},

]

export default function SidebarFilter({setCourses, subjectFilter, setSubjectFilter, calificationFilter, setCalificationFilter, classFrecuencyFilter, setClassFrecuencyFilter, classTypeFilter, setClassTypeFilter}) {
    return (
      <>
        <Box minWidth={199} sx={{borderRadius: '16px', display:{xs:'none', sm:'block'}, height: '100%', }} marginTop={2} flex={3} >
          <NestedMenuFilter filterName='Materias' filterIcon={<SearchOutlinedIcon style={{ color: '#F52F41' }}/>} 
            setCourses={setCourses}
            filter={subjectFilter}
            filterFunction={setSubjectFilter}
            options={subjects}    
          />
          <NestedBooleanFilter filterName='Tipo de Clase' filterIcon={<GroupOutlinedIcon/>}
            filter={classTypeFilter}
            filterFunction={setClassTypeFilter}
            setCourses={setCourses}
            options={[{label:'Individual', value:'Individual'},{label:'Grupal', value:'Grupal'}]}
          />
          <NestedBooleanFilter filterName='Frecuencia' filterIcon={<AccessAlarmIcon style={{ color: '#F52F41' }}/>}
            filter={classFrecuencyFilter}  
            filterFunction={setClassFrecuencyFilter}
            setCourses={setCourses}
            options={[{label:'Unica', value:'Unica'},{label:'Semanal', value:'Semanal'},{label:'Mensual', value:'Mensual'}]}
          />
          <NestedBooleanFilter filterName='Calificacion' filterIcon={<StarRateIcon style={{ color: '#fabb05' }}/>}
            filter={calificationFilter}  
            filterFunction={setCalificationFilter}
            setCourses={setCourses}  
            options={calificationOptions}
          />
        </Box>
        <Box sx={{display:{xs:'block', sm:'none'}}}>
          <MobileSideBar/>
        </Box>
      </>
    )
}