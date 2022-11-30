import { Box, Typography, } from "@mui/material"
import StarRateIcon from '@mui/icons-material/StarRate';
import { useState } from "react";

export default function Calification(props) {
    const [calification, setCalification] = useState(props.calification ? Math.round(props.calification): 0)

    if (calification == 0){
        return(
            <Typography>Aun no hay calificaciones</Typography>
        )
    }
    else{
        return (
            <Box width={1}  sx={{ flexDirection: 'row' }}>
                    {Array.from(Array(calification)).map(( _, index) => (
                        <StarRateIcon key={'star-icon-' + index} style={{ color: '#fabb05' }}/>
                    ))}
            </Box>
        )
    }
}