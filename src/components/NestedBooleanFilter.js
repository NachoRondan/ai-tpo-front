import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


export default function NestedBooleanFilter(props){
  const [open, setOpen] = React.useState(true);
  const [aux_courses, setAux_courses] = React.useState([]);
  let filtered = []
  const handleClick = () => {
    setOpen(!open);
  };

  const handleFilter = (event) => {

    if (event.target.checked){
      filtered = aux_courses.map((x) => x)
      filtered.push(event.target.value)
    }
    else{
      filtered = aux_courses.filter((item) => item !== event.target.value)
    }
    props.filterFunction(filtered)
    setAux_courses(filtered)
  }
  
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick}>  
        <ListItemText primary={props.filterName} />
        {props.filterIcon}
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
     <FormGroup sx={{ pl: 4 }}>
        {props.options.map((option)=>{
            return(
                <FormControlLabel control={<Checkbox value={option} onChange={handleFilter}/>} label= {option}/>
            )
        })}
        
    </FormGroup>
      </Collapse>
    </List>
  );
}
