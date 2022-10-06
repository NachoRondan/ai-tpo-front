import { Typography, Stack, Chip } from "@mui/material"


function getData(value){
    if(Array.isArray(value)){
        return(
            <Stack direction='row' spacing={1} marginTop={1}>
            {value.map((item, index) => (
                <Chip label= {value[index]}/>
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
            <Typography variant="h5">{props.title}</Typography>
            {getData(props.value)}
        </Stack>
    )
}
