import { Box, Container, Grid } from "@mui/material"
import ClassFeedCard from "./ClassFeedCard"

export default function Feed(props) {
    return (
      <Box flex={12} >
        <Container>
          <Grid container py={2} spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
            {props.courses.map(( course, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <ClassFeedCard course={course}/>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box> 
    )
}