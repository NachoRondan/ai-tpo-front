import * as React from 'react';
import {Box, Menu, MenuItem, IconButton} from "@mui/material"
import { bookCourse } from "../controllers/bookingController"
import Calification from './Calification';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

export default function CalificationButton({courseId, calification, user}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCalification = () => {
    var bookingData = {
      courseId: courseId,
      phoneNumber: phoneNumber,
      email: email,
      availability:firstHour + " - " + lastHour,
      message: message,
      studentName: user.name + " " + user.lastname
    }
    asynBookCourse(bookingData)
    //setOpen(false)
  }  
  const asynBookCourse = async function(data){
    var response = await bookCourse(data)
    if(response.rdo === 1){
      alert(response.mensaje)
    }
    else{
      alert(response.mensaje)
    }
  }

  const [message, setMessage] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [firstHour, setFirstHour] = React.useState("");
  const [lastHour, setLastHour] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");


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
        <MenuItem onClick={handleClose}><Calification calification={1}/></MenuItem>
        <MenuItem onClick={handleClose}><Calification calification={2}/></MenuItem>
        <MenuItem onClick={handleClose}><Calification calification={3}/></MenuItem>
        <MenuItem onClick={handleClose}><Calification calification={4}/></MenuItem>
        <MenuItem onClick={handleClose}><Calification calification={5}/></MenuItem>
      </Menu>
    </Box>
  );
}
