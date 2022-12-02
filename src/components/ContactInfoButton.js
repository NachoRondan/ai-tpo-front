import { Button, Dialog, DialogTitle, DialogActions, Stack, DialogContent, TextField } from "@mui/material";
import React from "react";

export default function ContactInfoButton({booking}){
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return(
        <>
            <Button onClick={handleClickOpen} variant="contained" color="warning">Datos de Contacto</Button>            
            <Dialog open={open} onClose={handleClose} style={{zIndex:1253}}>
            <DialogTitle>Informacion de Contacto del Solicitante</DialogTitle>
            <DialogContent dividers={true}>
            <Stack>
                <TextField
                    margin="dense"
                    id="name"
                    label="Email"
                    type="email"
                    value={booking.studentEmail}
                    disabled={true}
                    variant="outlined"
                />
                <TextField
                    sx={{color: 'primary.main'}}
                    margin="dense"
                    id="name"
                    label="Telefono"
                    type="phone"
                    value={booking.studentNumber}
                    disabled={true}
                    variant="outlined"
                />
                <TextField
                    margin="dense"
                    id="name"
                    label="Disponibilidad Horaria"
                    value={booking.availability}
                    disabled={true}
                    variant="outlined"
                />
            </Stack>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" color='secondary' onClick={handleClose}>Cerrar</Button>
            </DialogActions>
        </Dialog>
        </>
    )
}