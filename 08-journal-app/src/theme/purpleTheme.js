import { createTheme } from "@mui/material";
import { green, red } from "@mui/material/colors";

export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: '#262254'
        },
        secondary: {
            main: '#543884',
            form: '#ffffff',
        },
        error: {
            main: red.A400
        },
        logout: {
           main: red[700]
        }
    }
})