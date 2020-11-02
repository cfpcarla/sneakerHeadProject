import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
export const theme = createMuiTheme({
  typography: {
    fontFamily: "Playfair Display",
  },

  shape: {
    borderRadius: 5,
  },
  palette: {
    primary: {
      main: "#455954",
      light: "#e2e0d4 ",
      dark: "#070502 ",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#a24f5e",
      light: "#e2e0d4 ",
      dark: "#070502 ",
      contrastText: "#ffffff",
    },
    error: {
      main: "#A21C2B",
    },
  },
  spacing: 5,
});

theme.typography.h1 = {
  fontSize: "2rem",
  fontFamily: "Playfair Display",

  "@media (min-width:600px)": {
    fontSize: "3rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "4rem",
  },
};
theme.typography.h2 = {
  fontSize: "1.75rem",
  fontFamily: "Playfair Display",

  "@media (min-width:600px)": {
    fontSize: "2.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "3.5rem",
  },
};

theme.typography.h3 = {
  fontSize: "1.5rem",
  fontFamily: "Playfair Display",

  "@media (min-width:600px)": {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.5rem",
  },
};

theme.typography.h4 = {
  fontSize: "1.25rem",
  fontFamily: "Playfair Display",
  fontWeight: "normal",
  "@media (min-width:600px)": {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.5rem",
  },
};

theme.typography.h5 = {
  fontSize: "0.8rem",
  fontFamily: "Playfair Display",
  fontWeight: "normal",
  "@media (min-width:600px)": {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.4rem",
  },
};
