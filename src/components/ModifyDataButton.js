import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';

function getModifier(data, handleTextChange, options){
  const handleCheckbox = (event) =>{
    console.log(event.target.checked)
  }

  if(['Estudios Finalizados', 'Estudios En Curso'].includes(data.title)){
      return(
        <DialogContent>
        <DialogContentText>
          Seleccione los nuevos valores para su {data.title.toLowerCase()}:
        </DialogContentText>
        <FormGroup>
        {options.map((option) => (data.value.includes(option)) ? 
          (<FormControlLabel control={<Checkbox onChange={handleCheckbox} color='secondary' defaultChecked />} label={option} />) :
          (<FormControlLabel control={<Checkbox onChange={handleCheckbox} color='secondary'/>} label={option}/>)
        )}          
        </FormGroup>
      </DialogContent>
      )
  }
  else{
      return(
        <DialogContent>
        <DialogContentText>
          Ingrese el nuevo valor para su {data.title.toLowerCase()}:
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          fullWidth
          onChange={handleTextChange}
        />
      </DialogContent>
      )
  }
}


export default function ModifyDataButton({data, setValue}) {
  const [open, setOpen] = React.useState(false);
  const [newValue, setNewValue] = React.useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    if(Array.isArray(data.value)){
      data.function([...data.value,newValue])
    }
    else{
      data.function(newValue)
    }
    handleClose()
  }

  const handleTextChange = (event) => {
    setNewValue(event.target.value)
  }


  return (
    <>
      <Button onClick={handleClickOpen} variant="contained" color="secondary" sx={{display:{xs:'none',sm:'block'}}}>Modificar</Button>
      <Button onClick={handleClickOpen} variant="contained" color="secondary" sx={{display:{xs:'flex',sm:'none'}, maxHeight:'35px', maxWidth:'87px'}}>Modificar</Button>
      <Dialog open={open} onClose={handleClose} style={{zIndex:1253}}>
        <DialogTitle>Modifique sus datos</DialogTitle>
        {getModifier(data, handleTextChange, data.options)}
        <DialogActions>
          <Button color='primary' variant='contained' onClick={handleClose}>Cancelar</Button>
          <Button color='secondary' variant='contained' onClick={handleSubmit}>Modificar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
