import { blue, blueGrey, pink, teal } from "@mui/material/colors";
import { nGreen, nOrange, nPrimary, nRed } from "./_palettes";

export const sharedThemeOptions = {
  mixins: {

  },
  palette: {
    primary: nPrimary,
    secondary: { main: '#18232e', contrastText: '#55667c' },
    error: nRed,
    warning: nOrange,
    success: nGreen,
    green: nGreen,
    orange: nOrange,
    pink: pink,
    red: nRed,
    //rose: ,
    //turquoise: turq,
    //violet: violet,
    blueGrey: blueGrey,
    teal: teal,
    blue: blue,
    // neutrals: qnNeutrals,
    // texts: t
  },
  breakpoints: {
    values: {
      xs: 0, //0px - 768px
      sm: 769, //0px - 1024px
      md: 1025, //0px - 1280px
      lg: 1281, //0px - 1366px
      xl: 1367, //0px and up
    }
  }
}
