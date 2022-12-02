import { Button, Dialog, DialogTitle, DialogActions, DialogContentText, DialogContent, } from "@mui/material";
import React from "react";
import { updateBookingStatus } from "../controllers/bookingController";
import { enrollStudent } from '../controllers/courseController'

const updateBooking = async function(booking){
    var updatedBooking = {
      bookingId : booking.bookingId,
      status : booking.status === 'SOLICITADA' ? 'ACEPTADA': 'FINALIZADA',
    }
    var response = await updateBookingStatus(updatedBooking);
    if(response.rdo === 0){
        if (booking.status === 'SOLICITADA'){
            var enrollData = {
                courseId: response.data.data.courseId,
                studentId: response.data.data.userId
            }
            var responseCourse = await enrollStudent(enrollData)
        }
        alert(response.mensaje)
    }
    else{
        alert(response.mensaje)
    }
}

export default function AcceptEndBookingButton({booking}){
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const confirmAction = () => {
        updateBooking(booking)    
        setOpen(false);
    }

    const handleClose = () => {
        setOpen(false);
    };
    return(
        <>
            <Button onClick={handleClickOpen} variant="contained" color="success">{booking.status === 'SOLICITADA' ? "Aceptar" : "Finalizar"}</Button>            
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                style={{zIndex:1253}}
            >
                <DialogTitle id="alert-dialog-title">
                {booking.status === 'SOLICITADA' ? "Aceptar estudiante:" : 'Finalizar contratacion:'}
                </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {booking.status === 'SOLICITADA' ? 'Desea aceptar esta solicitud para el curso?' : 'Desea finalizar esta contratacion?'}
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button variant='outlined' onClick={handleClose}>Cerrar</Button>
                <Button variant='contained' color='success' onClick={confirmAction} autoFocus>{booking.status === 'SOLICITADA' ? "Aceptar solicitud" : 'Finalizar'}</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}