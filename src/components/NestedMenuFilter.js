import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function NestedMenuFilter(props){
  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };

  const handleFilter = (event, value) => {
    props.filterFunction(value)
  }

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader" 
      style={{zIndex:1250}}
    >
      <ListItemButton onClick={handleClick} >        
        <ListItemText primary={props.filterName} />
        {props.filterIcon}
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit  >
        <Autocomplete
          disablePortal
          onInputChange={handleFilter}
          options={props.options}
          sx={{ width: 3/4, display:'flex', pl:4 }}
          renderInput={(params) => <TextField {...params} label={'Buscar...'} />}
        />
      </Collapse>
    </List>
  );
}
