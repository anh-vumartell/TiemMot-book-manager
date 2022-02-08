import { createTheme } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}
const theme = createTheme({
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h2",
          h2: "h2",
          h3: "h2",
          h4: "h2",
          h5: "h2",
          h6: "h2",
          subtitle1: "h2",
          subtitle2: "h2",
          body1: "span",
          body2: "span",
        },
      },
    },
  },
  palette: {
    primary: {
      light: "#5c8aa9",
      main: "#2c5d7a",
      dark: "#00344e",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#704334",
      main: "#421b0e",
      dark: "#230000",
      contrastText: "#ffffff",
    },
  },
  status: { danger: orange[500] },

  typography: {
    body1: {
      color: "#000000",
      fontFamily: "sans-serif",
      lineHeight: 1.3,
      fontSize: 18,
      fontWeight: 400,
      marginTop: 0,
      marginBottom: 50,
    },
    body2: {
      fontSize: 13,
    },
  },
});
export default theme;
