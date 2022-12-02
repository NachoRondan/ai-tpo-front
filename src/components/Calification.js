import { Box, Typography, } from "@mui/material"
import StarRateIcon from '@mui/icons-material/StarRate';
import { useState } from "react";

export default function Calification(props) {
    const [calification, setCalification] = useState(props.calification ? Math.round(props.calification): 0)

    if (calification == 0){
        return(
            <Box width={1}  sx={{ flexDirection: 'row' }} marginRight={2}>
                <Typography variant="body1" >Aun no hay calificaciones</Typography>
            </Box>
        )
    }
    else{
        return (
            <Box width={1}  sx={{ flexDirection: 'row' }} marginRight={2}>
                    {Array.from(Array(calification)).map(( _, index) => (
                        <StarRateIcon key={'star-icon-' + index} style={{ color: '#fabb05' }}/>
                    ))}
            </Box>
        )
    }
}