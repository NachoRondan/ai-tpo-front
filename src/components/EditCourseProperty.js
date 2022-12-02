import * as React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {Button, FormGroup, FormControlLabel, Checkbox, DialogContentText} from "@mui/material"

export default function EditCourseTitleButton({setValue, value, options}) {
  const [open, setOpen] = React.useState(false);
  const [aux, setAux] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSetTitle = () => {
    setValue(aux)
    setOpen(false)
  }


  const handleCheckbox = (e) => {
    setAux(e.target.value)
  }

  return (
    <>
      <Button color='secondary' variant="outlined" onClick={handleClickOpen}>
        Editar
      </Button>
      <Dialog open={open} onClose={handleClose} style={{zIndex:1253}}>
        <DialogTitle>Seleccione el valor</DialogTitle>
        <DialogContent>
            <FormGroup>
            {options.map((option) => (value === option) ? 
            (<FormControlLabel key={option + '-true'} control={<Checkbox value={option} onChange={handleCheckbox} color='secondary' defaultChecked />} label={option} />) :
            (<FormControlLabel key={option + '-false'} control={<Checkbox value={option} onChange={handleCheckbox} color='secondary'/>} label={option}/>)
            )}          
            </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' onClick={handleClose}>Cancelar</Button>
          <Button variant='contained' color='secondary' onClick={handleSetTitle}>Confirmar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}