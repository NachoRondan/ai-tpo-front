import { Typography, Box } from "@mui/material";
import MobileUserProfileSideBar from '../components/MobileUserProfileSideBar'

export default function UserProfileSideBar() {
    return (
      <>
        <Box minWidth={199} sx={{borderRadius: '16px', display:{xs:'none', sm:'block'}, height: '100%', }} marginTop={2} flex={3} >
          <Typography>Mis clases</Typography>
          <Typography>Mis Datos</Typography>
        </Box>
        <Box sx={{display:{xs:'block', sm:'none'}}}>
          <MobileUserProfileSideBar/>
        </Box>
      </>
    )
}