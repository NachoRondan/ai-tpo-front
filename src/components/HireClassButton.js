import * as React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Button} from "@mui/material"
import { bookCourse } from "../controllers/bookingController"
import {useNavigate } from 'react-router-dom';



export default function HireClassButton({courseId, professorId}) {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleBooking = () => {
    var bookingData = {
      courseId: courseId,
      phoneNumber: phoneNumber,
      email: email,
      availability:firstHour + " - " + lastHour,
      message: message,
    }
    asynBookCourse(bookingData)
    setOpen(false)
  }

  const asynBookCourse = async function(data){
    var response = await bookCourse(data)
    if(response.rdo === 1){
      alert(response.mensaje)
      navigate("/login")
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
              onChange={(e)=>setMessage(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email"
              type="email"
              fullWidth
              variant="standard"
              onChange={(e)=>setEmail(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Telefono"
              type="phone"
              fullWidth
              variant="standard"
              onChange={(e)=>setPhoneNumber(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Primer Horario disponible"
              type="time"
              fullWidth
              variant="standard"
              onChange={(e)=>setFirstHour(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Ultimo Horario disponible"
              type="time"
              fullWidth
              variant="standard"
              onChange={(e)=>setLastHour(e.target.value)}
            />
          </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleBooking}>Enviar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
