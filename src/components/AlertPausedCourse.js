import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PauseCircleOutlineOutlinedIcon from '@mui/icons-material/PauseCircleOutlineOutlined';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { useState } from "react";
import { IconButton } from '@mui/material';
import { pauseCourse } from '../controllers/courseController'

export default function AlertPausedCourse({course}) {
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(course.paused)
  const [alertText, setAlertText] = useState(course.paused ? 'Su curso ahora se encuentra visible para la busqueda de los alumnos' : 'Su curso ya no se encuentra visible para la busqueda de los alumnos')


  const updateCourse = async function(){
    var courseToUpdate = {
      courseId : course.courseId,
      published : !edit,
    }
    pauseCourse(courseToUpdate);
  }


  const handlePauseClick = () => {
      //TO DO
      //Llamada a api para modificar estado
      setEdit(!edit)
      setOpen(true);
      setAlertText(edit ? 'Su curso ahora se encuentra visible para la busqueda de los alumnos' : 'Su curso ya no se encuentra visible para la busqueda de los alumnos')
      
  }

  function getEditIcon(paused){
      return paused ? <PlayCircleOutlineIcon /> : <PauseCircleOutlineOutlinedIcon />
  }


  const handleClose = () => {
    updateCourse()
    setOpen(false);
  };

  return (
    <div>
      <IconButton onClick={handlePauseClick} size="large" edge="end" color='warning'>
        {getEditIcon(edit)}
    </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        style={{zIndex:1253}}
      >
        <DialogTitle id="alert-dialog-title">
          {"Modifico la visibilidad del curso"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {alertText}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
