import { Stack, Box, Chip, Typography, Divider, Button, TextField } from "@mui/material";
import { getProfessorBokings } from "../controllers/bookingController";
import { useEffect, useState } from "react";
import ContactInfoButton from "../components/ContactInfoButton"
import CancelBookingButton from '../components/CancelBookingButton'
import AcceptEndBookingButton from '../components/AcceptEndBookingButton'
import DoneIcon from '@mui/icons-material/Done';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import Inventory2Icon from '@mui/icons-material/Inventory2';

function returnChipStatus(status){
    if(status === 'SOLICITADA'){
        return(
            <Chip variant="outlined" color='warning' label={status} icon={<QuestionAnswerIcon />} />
        )
    }
    if(status === 'ACEPTADA'){
        return(
            <Chip color='success' label={status} icon={<DoneIcon />} />
        )
    }
    if(status === 'FINALIZADA'){
        return(
            <Chip variant="outlined" color='secondary' label={status} icon={<Inventory2Icon />} />
        )
    }
    else{
        return(
            <Chip variant="outlined" color='primary' label={status} icon={<DoNotDisturbIcon />} />
        )
    }
}



export default function ContratacionesFeed({user}){
    //const contrataciones = getContrataciones()
    const [contrataciones, setContrataciones] = useState([])  
    
    useEffect(()=>{
        async function componentDidMount() 
        {
          //traer imagenes de User
          let rdo = await getProfessorBokings();
          setContrataciones(rdo.bookings); 
        }
        componentDidMount();
      },[]);



    return(
        <Stack divider={<Divider  />} spacing={2} >
            {contrataciones.map((contratacion, index) => (
                <Box> 
                    <Stack alignContent='center' justifyContent='flex-start'> 
                        <Box sx={{display:'flex', justifyContent:'space-between'}}>
                            <Typography marginBottom={2} variant="h5">{contratacion.userName}</Typography>
                            {
                                returnChipStatus(contratacion.status)
                            }
                        </Box>
                        <TextField 
                            value={contratacion.comment}
                            multiline
                            disabled
                            variant="outlined"
                            label='Mensaje del solicitante'
                        />
                    <Box marginTop={2} felx={12} sx={{display:'flex', justifyContent:'space-around'}}>
                            {contratacion.status !== 'FINALIZADA' ? <CancelBookingButton booking={contratacion}/> : null}
                            <ContactInfoButton booking={contratacion}/>
                            {contratacion.status !== 'FINALIZADA' ? <AcceptEndBookingButton booking={contratacion}/> : null}
                    </Box>
                    </Stack>
                </Box>
            ))}
        </Stack>
    )
}