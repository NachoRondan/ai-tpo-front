import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";
import { IconButton } from '@mui/material';
import { deleteCourse } from '../controllers/courseController'

const updateCourse = async function(course){
  var courseToDelete = {
    courseId : course.courseId,
    is_deleted : true,
  }
  deleteCourse(courseToDelete);
}


export default function AlertDeleteCourse({course}) {
  const [open, setOpen] = useState(false);

  const handleDeleteClick = () => {
      setOpen(true);      
  }

  const confirmDeletion = () => {
    updateCourse(course)    
    setOpen(false);
  }
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton onClick={handleDeleteClick} size="large" edge="end" color='primary'>
            <DeleteIcon />
        </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        style={{zIndex:1253}}
      >
        <DialogTitle id="alert-dialog-title">
          {"Atencion, esta accion no se puede revertir!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {'Eliminara el curso de la pagina y todos los datos de este se perderan para siempre. Por favor confirmar si desea realizar esta accion'}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button variant='contained' color='success' onClick={handleClose} >Cerrar</Button>
          <Button variant='contained' onClick={confirmDeletion} autoFocus>Eliminar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
