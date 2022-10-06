import { Typography, Stack, Chip, Button } from "@mui/material"


function getData(value){
    if(Array.isArray(value)){
        return(
            <Stack direction={{xs:'column', sm:'row'}} spacing={1} marginTop={1}>
            {value.map((item, index) => (
                <Chip label={value[index]} color="secondary" variant="outlined" />
            ))}
            </Stack>
        )
    }
    else{
        return(
            <Typography variant="body1">{value}</Typography>
        )
    }
}


export default function UserData(props) {
    return (
        <Stack>
            <Stack direction='row' justifyContent="space-between">
                <Typography variant='h5' display={{xs:'none',sm:'block'}}>{props.title}</Typography>
                <Typography variant='h6' display={{xs:'block',sm:'none'}}>{props.title}</Typography>
                <Button variant="contained" color="secondary" sx={{display:{xs:'none',sm:'block'}}}>Modificar</Button>
                <Button variant="contained" color="secondary" sx={{display:{xs:'flex',sm:'none'}, maxHeight:'35px', maxWidth:'87px'}}>Modificar</Button>
            </Stack>
            {getData(props.value)}
        </Stack>
    )
}
