import { Box, } from "@mui/material"
import StarRateIcon from '@mui/icons-material/StarRate';

export default function Calification(props) {
    const roundedCalification = Math.round(props.calification)
    return (
        <Box width={1}  sx={{ flexDirection: 'row' }}>
                {Array.from(Array(roundedCalification)).map(( _, index) => (
                    <StarRateIcon style={{ color: '#fabb05' }}/>
                ))}
        </Box>
    )
}