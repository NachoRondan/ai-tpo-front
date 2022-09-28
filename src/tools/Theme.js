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