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
    <Calification calification={1}/>,
    <Calification calification={2}/>,
    <Calification calification={3}/>,
    <Calification calification={4}/>,
    <Calification calification={5}/>,

]

export default function SidebarFilter() {
    return (
      <>
        <Box minWidth={199} sx={{borderRadius: '16px', display:{xs:'none', sm:'block'}, height: '100%', }} marginTop={2} flex={3} >
          <NestedMenuFilter filterName='Materias' filterIcon={<SearchOutlinedIcon style={{ color: '#F52F41' }}/>} options={subjects}/>
          <NestedBooleanFilter filterName='Tipo de Clase' filterIcon={<GroupOutlinedIcon/>} options={['Individual','Grupal']}/>
          <NestedBooleanFilter filterName='Frecuencia' filterIcon={<AccessAlarmIcon style={{ color: '#F52F41' }}/>} options={['Unica','Semanal','Mensual']}/>
          <NestedBooleanFilter filterName='Calificacion' filterIcon={<StarRateIcon style={{ color: '#fabb05' }}/>} options={calificationOptions}/>
        </Box>
        <Box sx={{display:{xs:'block', sm:'none'}}}>
          <MobileSideBar/>
        </Box>
      </>
    )
}