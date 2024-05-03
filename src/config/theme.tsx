//Definindo tema do projeto
import { createTheme, responsiveFontSizes } from "@mui/material";
import colors from "./colors";

const breakpointValues = {
  xs: 320,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1600,
  xxl: 1920,
};

interface themeProps {
  backgroundColor: string;
  paperBackgroundColor: string;
  backgroundErrorColor: string;
  hoverColor: string;
  textPrimaryColor: string;
  textSecondaryColor: string;
  textDisabledColor: string;
  buttonTextColor: string;
  disabledColor: string;
}

function createDarkTheme({
  backgroundColor,
  paperBackgroundColor,
  backgroundErrorColor,
  hoverColor,
  textPrimaryColor,
  textSecondaryColor,
  textDisabledColor,
  buttonTextColor,
  disabledColor,
}: themeProps ) {
  return createTheme({
    breakpoints: {
      keys: ["xs", "sm", "md", "lg", "xl"],
      values: {
        xs: 320,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1600,
      },
      up: (key) => `@media (min-width:${breakpointValues[key]}px)`,
      down: (key) => `@media (max-width:${breakpointValues[key] - 1}px)`,
    },

    palette: {
      primary: {
        main: backgroundColor,
        contrastText: textPrimaryColor,
      },
      secondary: {
        main: paperBackgroundColor,
        contrastText: textSecondaryColor,
      },
      error: {
        main: backgroundErrorColor,
        contrastText: textPrimaryColor,
      },
      text: {
        primary: textPrimaryColor,
        secondary: textSecondaryColor,
        disabled: textDisabledColor,
      },
      background: {
        paper: paperBackgroundColor,
        default: backgroundColor,
      },
      action: {
        hover: hoverColor,
        //hoverOpacity: 0.04,
        selected: hoverColor,
        //selectedOpacity: 0.08,
        disabled: textDisabledColor,
        disabledBackground: disabledColor,
        disabledOpacity: 0.38,
        //focus: "#6CFF00",
        focusOpacity: 0.12,
        activatedOpacity: 0.12,
      },
    },
  });
}

const Dark = createDarkTheme({
  backgroundColor: colors.blackCarbon,
  paperBackgroundColor: colors.darkGray,
  backgroundErrorColor: colors.red,
  hoverColor: colors.white,
  textPrimaryColor: colors.white,
  textSecondaryColor: colors.black,
  textDisabledColor: colors.darkGray,
  buttonTextColor: colors.black,
  disabledColor: colors.Gray,
});

const Themes = {
    Dark: responsiveFontSizes(Dark),
}

export default Themes;
