import { createTheme } from "@mui/material";

const mainRedColor = '#F52F41'


let Theme = createTheme({
    palette: {

        primary: {
            main: mainRedColor,
        },
    },
    zIndex: {
        appBar: 1251,
        modal: -1,
    }
})

export default Theme