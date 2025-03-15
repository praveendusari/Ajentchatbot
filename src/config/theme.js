import { CastForEducationOutlined } from "@mui/icons-material";
import { createTheme } from "@mui/material";
import {green,grey, indigo} from "@mui/material/colors";
import { displayPartsToString } from "typescript";

let theme = createTheme({  
    palette: {
        primary: {
        main: indigo[500],
        normal: indigo['A700'],
        light: indigo[100],
        },
        secondary: {
        main: indigo[50],
        },
        neutral: {
        main: grey[900],
        light: grey[100],
        },
        green: {
        main: green[500],
        }
    },
    });

    theme = createTheme(theme, {
        typography: {
            link: {
                fontSize: "0.8rem",
           [theme.breakpoints.up('md')]:{
            fontSize: "0.9rem",
           },
           fotnWeight: "bold",
           color: theme.palette.primary.normal,
           display:"block",
           cursor: "pointer",
            },
        },
    components: {
        MuiButton: {
        styleOverrides: {
            root: {
            textTransform: "none",
            },
        },
        },
    },
    cardTitle: {
        fontSize: "1.2rem",
        fontWeight: "bold",
        color: theme.palette.primary.main,
        },
        cardSubtitle: {
            fontSize: "1rem",
            color: theme.palette.primary.main,
        },
        h6: {
            fontSize: "1.2rem",
            fontWeight: "bold",
            color: theme.palette.primary.main,
        },
        h5: {
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: theme.palette.primary.main,
        },
        h4: {
            fontSize: "2rem",
            fontWeight: "bold",
            color: theme.palette.primary.main,
        },
        h3: {
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: theme.palette.primary.main,
        },
        h2: {
            fontSize: "3rem",
            fontWeight: "bold",
            color: theme.palette.primary.main,
        }, 
        h1: {
            fontSize: "4rem",
            fontWeight: "bold",
            color: theme.palette.primary.main,
        },
    });
export default theme;