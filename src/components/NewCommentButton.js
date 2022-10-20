import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function NewCommentButton() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Comentar Clase
      </Button>
      <Dialog open={open} onClose={handleClose} style={{zIndex:1253}}>
        <DialogTitle>Nuevo Comentario</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Su comentario sera enviado al profesor de esta clase, solo sera visible una vez aprobado.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Comentario"
            fullWidth
            multiline
            rows={4}
            variant="filled"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleClose}>Enviar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
