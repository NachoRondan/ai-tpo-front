import { Box, Container, Stack } from "@mui/material"
import SidebarFilter from "../components/SidebarFilter"
import Feed from "../components/Feed"

export default function Home({user}) {
  if(!user){
    return (
      <Container>
        <Stack direction='row' justifyContent='space-between' spacing={1}>
          <SidebarFilter/>
          <Feed/>
        </Stack>
      </Container>
    )
  }
  return <>Home with user</>
}