import * as React from 'react';
import {Box, Menu, MenuItem, IconButton} from "@mui/material"
import Calification from './Calification';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { postScore } from '../controllers/scoreController';

export default function CalificationButton({course, calification, user}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCalification = (e) => {
    var score = e.target.id ? e.target.id : e.target.parentElement.id
    
    var scoreData = {
      courseId: course.courseId,
      score: score
    }
    asyncPost(scoreData)
    handleClose()
  }  
  const asyncPost = async function(data){
    var response = await postScore(data)
    if(response.rdo === 1){
      alert(response.mensaje)
    }
    else{
      alert(response.mensaje)
    }
  }

  return (
    <Box sx={{display:'flex', alignItems:'center'}}>
      <Calification calification={calification}/>
      <IconButton  id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
        <EditOutlinedIcon/>
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        style={{zIndex:1253}}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem id={1} onClick={handleCalification}><Calification calification={1}/></MenuItem>
        <MenuItem id={2} onClick={handleCalification}><Calification calification={2}/></MenuItem>
        <MenuItem id={3} onClick={handleCalification}><Calification calification={3}/></MenuItem>
        <MenuItem id={4} onClick={handleCalification}><Calification calification={4}/></MenuItem>
        <MenuItem id={5} onClick={handleCalification}><Calification calification={5}/></MenuItem>
      </Menu>
    </Box>
  );
}
