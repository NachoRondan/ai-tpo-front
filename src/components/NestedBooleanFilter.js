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

  const handleClick = () => {
    setOpen(!open);
  };

  const handleFilter = (event) => {
    let aux_courses = []
    
    if (event.target.checked){
      for (let i = 0; i < props.courses.length; i++) {
        if(props.courses[i].classType === event.target.value){
          aux_courses.push(props.courses[i])
        }
      }
    }
    console.log(props.courses)
    props.setCourses(aux_courses)
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
