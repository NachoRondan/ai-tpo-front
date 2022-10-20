import { Typography, Stack, Chip, } from "@mui/material"
import { useState } from "react"
import ModifyDataButton from "./ModifyDataButton"




export default function UserData({data, value}) {
    function getData(data){
        if(Array.isArray(data.value)){
            return(
                <Stack direction={{xs:'column', sm:'row'}} spacing={1} marginTop={1}>
                {value.map((item) => (
                    <Chip label={item} color="secondary" variant="outlined" />
                ))}
                </Stack>
            )
        }
        else{
            return(
                <Typography variant="body1">{data.value}</Typography>
            )
        }
    }
      return (
        <Stack>
            <Stack direction='row' justifyContent="space-between">
                <Typography variant='h5' display={{xs:'none',sm:'block'}}>{data.title}</Typography>
                <Typography variant='h6' display={{xs:'block',sm:'none'}}>{data.title}</Typography>
                <ModifyDataButton data={data} />
            </Stack>
            {getData(data)}
        </Stack>
    )
}
