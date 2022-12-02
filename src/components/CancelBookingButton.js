import { Button, Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText } from "@mui/material";
import React from "react";
import { updateBookingStatus } from "../controllers/bookingController";

const updateBooking = async function(booking){
    var updatedBooking = {
      bookingId : booking.bookingId,
      status : 'CANCELADA',
    }
    var response = await updateBookingStatus(updatedBooking);
    if(response.rdo === 0){
        alert(response.mensaje)
    }
    else{
        alert(response.mensaje)
    }
}

export default function CancelBookingButton({booking}){
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const confirmCancel = () => {
        updateBooking(booking)    
        setOpen(false);
    }

    const handleClose = () => {
        setOpen(false);
    };
    return(
        <>
            <Button onClick={handleClickOpen} variant="contained" color="primary">Cancelar</Button>            
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
                    {'Desea cancelar esta contratacion?'}
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button variant='contained' color='success' onClick={handleClose}> No Cancelar</Button>
                <Button variant='contained' onClick={confirmCancel} autoFocus>Confirmar Cancelacion</Button>
                </DialogActions>
      </Dialog>
        </>
    )
}