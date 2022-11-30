import { Box, Typography, } from "@mui/material"
import StarRateIcon from '@mui/icons-material/StarRate';

export default function Calification(props) {
    const roundedCalification = Math.round(props.calification)
    
    if (roundedCalification == 0){
        return(
            <Typography>Aun no hay calificaciones</Typography>
        )
    }
    else{
        return (
            <Box width={1}  sx={{ flexDirection: 'row' }}>
                    {Array.from(Array(roundedCalification)).map(( _, index) => (
                        <StarRateIcon key={'star-icon-' + index} style={{ color: '#fabb05' }}/>
                    ))}
            </Box>
        )
    }
}