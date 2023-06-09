import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#eb00cb'
        },
        secondary: {
            main: '#7B2CBF'
        },
        error: {
            main: '#DDD92A'
        },
        warning: {
          main: '#DDD92A',
        },
        info: {
          main: '#ADB9E3',
        },
        success: {
          main: '#9AD5CA',
        },
    }
})

export default theme