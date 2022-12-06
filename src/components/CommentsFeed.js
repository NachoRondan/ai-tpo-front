import { Box, Typography, Divider, Avatar, Grid, Paper, } from "@mui/material"
import { useState, useEffect } from "react"
import NewCommentButton from "./NewCommentButton"
import { getApprovedCourseComments } from "../controllers/commentsController"

export default function CommentsFeed(props) {

    const [comments, setComments] = useState([])

    useEffect(()=>{
      async function componentDidMount() 
      {
        //traer imagenes de User
        let rdo = await getApprovedCourseComments(props.courseId);
        console.log('rdo',rdo)
        setComments(rdo.comments.filter(c => c.status === 'ACTIVO'))
      }
      componentDidMount();
    },[]);
    
    return (
    <>
    <Box marginBottom={1} sx={{ display:'flex', flexDirection:{ xs:'column',sm:'row'}, justifyContent:'space-between'}}>
        <Typography variant="h4">Comentarios</Typography>
        {props.enrolled ? <NewCommentButton user={props.user} courseId={props.courseId}/> : null}
    </Box>
   <Box marginBottom={2}><Divider/></Box>
      <Paper style={{ padding: "40px 20px" }}>
        { comments.map((comment, index) => (
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar alt="Remy Sharp" src={comment.studentAuthor.picture} />
            </Grid>
            <Grid justifyContent="left" item xs zeroMinWidth>
              <h4 style={{ margin: 0, textAlign: "left" }}>{comment.studentAuthor}</h4>
              <p style={{ textAlign: "left" }}>
                {comment.commentText}
              </p>
              <p style={{ textAlign: "left", color: "gray" }}>
                posted 1 minute ago
              </p>
            </Grid>
          </Grid>
          ))
        }
        <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
      </Paper>
    </>
    )
}