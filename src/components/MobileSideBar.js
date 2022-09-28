import * as React from 'react';
import { styled, } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import StarRateIcon from '@mui/icons-material/StarRate';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NestedBooleanFilter from './NestedBooleanFilter';
import NestedMenuFilter from './NestedMenuFilter';
import getSubjects from "../assets/MockUpVariables/MockUpSubjects"
import Calification from "./Calification"


const subjects = getSubjects()

const calificationOptions = [
    <Calification calification={1}/>,
    <Calification calification={2}/>,
    <Calification calification={3}/>,
    <Calification calification={4}/>,
    <Calification calification={5}/>,

]

const iconsList = [
    <SearchOutlinedIcon style={{ color: '#F52F41' }}/>,
    <GroupOutlinedIcon/>,
    <AccessAlarmIcon style={{ color: '#F52F41' }}/>,
    <StarRateIcon style={{ color: '#fabb05' }}/>
]

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MobileSideBar() {
  const [open, setOpen] = React.useState(false);
    
  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <Box sx={{ display: 'flex' }} marginLeft={-2}>
      <Drawer variant="permanent" open={open}>
      <Toolbar/>
        <DrawerHeader>
          <IconButton onClick={handleClick}>
            {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {!open ? iconsList.map((icon, index) => (
            <ListItem key={index} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
                onClick={handleClick}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {icon}
                </ListItemIcon>
                <ListItemText primary={"text"} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          )) : 
          <Box marginTop={2} flex={3} >
            <NestedMenuFilter filterName='Materias' filterIcon={<SearchOutlinedIcon style={{ color: '#F52F41' }}/>} options={subjects}/>
            <NestedBooleanFilter filterName='Tipo de Clase' filterIcon={<GroupOutlinedIcon/>} options={['Individual','Grupal']}/>
            <NestedBooleanFilter filterName='Frecuencia' filterIcon={<AccessAlarmIcon style={{ color: '#F52F41' }}/>} options={['Unica','Semanal','Mensual']}/>
            <NestedBooleanFilter filterName='Calificacion' filterIcon={<StarRateIcon style={{ color: '#fabb05' }}/>} options={calificationOptions}/>
          </Box>
          }
        </List>
      </Drawer>
    </Box>
  );
}
