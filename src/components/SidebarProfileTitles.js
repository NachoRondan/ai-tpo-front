import { List, ListItemButton, Box, ListItemText } from "@mui/material";
import MobileUserProfileSideBar from '../components/MobileUserProfileSideBar'
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { Link, } from "react-router-dom";

export default function UserProfileSideBar() {

  var list = [
    {tabName:'Mis Datos', icon: <BadgeOutlinedIcon />, link:'/profile'},
    {tabName:'Docente - Cursos', icon: <AccountBalanceIcon />, link:'/my-courses'},
    {tabName:'Contrataciones', icon: <ContactPhoneOutlinedIcon />, link:'/contrataciones'},
    {tabName:'Alumno - Cursos', icon: <SchoolOutlinedIcon />, link:'/my-courses-student'},
  ]
    return (
      <>
        <Box minWidth={199} sx={{borderRadius: '16px', display:{xs:'none', sm:'block'}, height: '100%', }} marginTop={2} flex={3} >
          <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            {list.map((tab)=>{
              return (

                <ListItemButton alignItems="center" component={Link} to={tab.link}>
                  <Box marginRight={2}>
                    {tab.icon}
                  </Box>  
                  <ListItemText primary={tab.tabName} />
                </ListItemButton>
              )
            })}
          </List>
          <Box bgcolor="white" height={650}/>
        </Box>
        <Box sx={{display:{xs:'block', sm:'none'}}}>
          <MobileUserProfileSideBar/>
        </Box>
      </>
    )
}