import * as React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {Button} from "@mui/material"

export default function EditCourseTitleButton({setTitle}) {
  const [open, setOpen] = React.useState(false);
  const [aux, setAux] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSetTitle = () => {
    setTitle(aux)
    setOpen(false)
  }

  return (
    <>
      <Button color='secondary' variant="contained" onClick={handleClickOpen}>
        Editar Titulo
      </Button>
      <Dialog open={open} onClose={handleClose} style={{zIndex:1253}}>
        <DialogTitle>Nuevo Titulo Para el Curso</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nuevo Titulo"
            fullWidth
            rows={4}
            variant="filled"
            onChange={(e)=>{setAux(e.target.value)}}
          />
        </DialogContent>
        <DialogActions>
          <Button variant='contained' onClick={handleClose}>Cancelar</Button>
          <Button variant='contained' color='secondary' onClick={handleSetTitle}>Confirmar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
