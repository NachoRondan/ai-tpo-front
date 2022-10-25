import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';

function getModifier(data, handleTextChange, setNewValue, options){
  
  const handleCheckbox = (event) =>{
    if(event.target.checked){
      setNewValue(event.target.value)
    }
    else{
      data.function(data.value.filter((item) => item !== event.target.value))
      setNewValue('')
    }
  }

  if(['Estudios Finalizados', 'Estudios En Curso'].includes(data.title)){
      return(
        <DialogContent>
        <DialogContentText>
          Seleccione los nuevos valores para su {data.title.toLowerCase()}:
        </DialogContentText>
        <FormGroup>
        {options.map((option) => (data.value.includes(option)) ? 
          (<FormControlLabel key={option + '-true'} control={<Checkbox value={option} onChange={handleCheckbox} color='secondary' defaultChecked />} label={option} />) :
          (<FormControlLabel key={option + '-false'} control={<Checkbox value={option} onChange={handleCheckbox} color='secondary'/>} label={option}/>)
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
      if (!data.value.includes(newValue) && newValue !== ''){
        data.function([...data.value,newValue])
      }
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
        {getModifier(data, handleTextChange, setNewValue, data.options)}
        <DialogActions>
          <Button color='primary' variant='contained' onClick={handleClose}>Cancelar</Button>
          <Button color='secondary' variant='contained' onClick={handleSubmit}>Modificar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
