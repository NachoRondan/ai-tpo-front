import * as React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Button} from "@mui/material"

export default function HireClassButton() {
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
        Contratar Clase
      </Button>
      <Dialog open={open} onClose={handleClose} style={{zIndex:1253}}>
        <DialogTitle>Contratar Clase</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Por favor deje un mensaje explicando porque encuentra interes en esta clase y sus datos de contacto para coordinar el incio del curso!
          </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              multiline
              rows={4}
              variant="filled"
              id="name"
              label="Mensaje..."
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email"
              type="email"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Telefono"
              type="phone"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Primer Horario disponible"
              type="time"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Ultimo Horario disponible"
              type="time"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Otros comentarios..."
              fullWidth
              variant="standard"
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
