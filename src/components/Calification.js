import { Box, Typography, } from "@mui/material"
import StarRateIcon from '@mui/icons-material/StarRate';
import { useState } from "react";

export default function Calification(props) {
    if (props.calification == 0){
        return(
            <Box width={1}  sx={{ flexDirection: 'row' }} marginRight={2}>
                <Typography variant="body1" >Aun no hay calificaciones</Typography>
            </Box>
        )
    }
    else{
        return (
            <Box width={1} id={ Math.round(props.calification)} sx={{ flexDirection: 'row' }} marginRight={2}>
                    {Array.from(Array(Math.round(props.calification))).map(( _, index) => (
                        <StarRateIcon id={ Math.round(props.calification)} key={'star-icon-' + index} style={{ color: '#fabb05' }}/>
                    ))}
            </Box>
        )
    }
}