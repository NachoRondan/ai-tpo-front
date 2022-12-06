import { Box, Typography, Divider, Avatar, Grid, Paper, Button, Chip } from "@mui/material"
import { useState, useEffect } from "react"
import { getCourseComments, updateCommentStatus } from "../controllers/commentsController"
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

export default function CommentsFeedEdit(props) {

    const [comments, setComments] = useState([])

    useEffect(()=>{
      async function componentDidMount() 
      {
        //traer imagenes de User
        let rdo = await getCourseComments(props.courseId);
        setComments(rdo.comments.filter(c => c.status === 'PENDIENTE'))
      }
      componentDidMount();
    },[]);

    const handleUpdateComment = (e)=>{
        var dataList = e.target.getAttribute('index').split('.')
        var commentData = {
            commentId : dataList[0],
            status: dataList[1],
        }
        updateComment(commentData)
    }
    
    const updateComment = async function(commentData){
        
        var response = await updateCommentStatus(commentData)

        if(response.rdo === 0){
            alert(response.mensaje)
            //navigate('/my-courses')
        }
        else{
            alert(response.mensaje)
            //navigate('/my-courses')
        }
    }
    
    return (
    <>
    <Box marginBottom={1} sx={{ display:'flex', flexDirection:{ xs:'column',sm:'row'}, justifyContent:'space-between'}}>
        <Typography variant="h4">Comentarios</Typography>
    </Box>
   <Box marginBottom={2}><Divider/></Box>
      <Paper style={{ padding: "40px 20px" }}>
        { comments.map((comment, index) => (
          <>
            <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                    <Avatar alt="Remy Sharp" src={comment.studentAuthor.picture} />
                </Grid>
                <Grid justifyContent="left" item xs zeroMinWidth>
                    <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between'}} >
                        <h4 style={{ margin: 0, textAlign: "left" }}>{comment.studentAuthor}</h4>
                        <Chip variant="outlined" color='warning' label={comment.status} icon={<QuestionAnswerIcon />} />
                    </Box>
                    <p style={{ textAlign: "left" }}>
                        {comment.commentText}
                    </p>
                    <p style={{ textAlign: "left", color: "gray" }}>
                        posted 1 minute ago
                    </p>
                </Grid>
            </Grid>
            <Box marginTop={2} sx={{display:'flex', justifyContent:'space-around'}}>
                <Button index={comment._id + ".BLOQUEADO"} onClick={handleUpdateComment} variant="contained" >Bloquear</Button>
                <Button index={comment._id + ".ACTIVO"} onClick={handleUpdateComment} variant="contained" color='success' >Aceptar</Button>
            </Box>
            <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
          </>
        ))}
        </Paper>  
    </>
    )
}