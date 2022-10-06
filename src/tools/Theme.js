import { createTheme } from "@mui/material";

const mainRedColor = '#F52F41'
const mainSecondaryColor = '#2b1a46'
const mainSuccessColor = '#eaefc9'

let Theme = createTheme({
    palette: {

        primary: {
            main: mainRedColor,
        },
        secondary:{
            main: mainSecondaryColor,
        },
        success:{
            main: mainSuccessColor,
        },
    },
    zIndex: {
        appBar: 1251,
        modal: -1,
    },
    breakpoints: {
        values: {
          xs: 0,
          sm: 630,
          md: 900,
          lg: 1200,
          xl: 1536,
        },
      },
})

export default Theme