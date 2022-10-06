import { Container, Stack } from "@mui/material"
import UserProfile from '../components/UserProfile'
import UserProfileSideBar from "../components/SidebarProfileTitles"

export default function Profile({user}) {

  return (
    <Container>
      <Stack direction='row' justifyContent='space-between' spacing={1}>
        <UserProfileSideBar/>
        <UserProfile user={user}/>
      </Stack>
    </Container>
  )
}