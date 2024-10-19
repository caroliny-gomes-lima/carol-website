//Definindo tema do projeto
import { createTheme, responsiveFontSizes } from "@mui/material";
import colors from "./colors";

export const breakpointValues = {
  xs: 320,
  sm: 768,
  md: 1024,
  lg: 1440,
  xl: 1920,
} as const

// Definir os tipos permitidos para os breakpoints
export type Breakpoint = keyof typeof breakpointValues;

interface ThemeProps {
  backgroundColor?: string;
  paperBackgroundColor?: string;
  backgroundErrorColor?: string;
  hoverColor?: string;
  textPrimaryColor?: string;
  textSecondaryColor?: string;
  textDisabledColor?: string;
  buttonTextColor?: string;
  disabledColor?: string;
  successMainColor?: string;
  successLightColor?: string
}

function createDarkTheme({
  backgroundColor = colors.black,
  paperBackgroundColor = colors.darkGray,
  backgroundErrorColor = colors.red,
  hoverColor = colors.white,
  textPrimaryColor = colors.white,
  textSecondaryColor = colors.purple,
  textDisabledColor = colors.darkGray,
  disabledColor = colors.gray,
  successMainColor = colors.green,
  successLightColor = colors.lightBlue
}: Partial<ThemeProps>) {

  const up = (key: number | Breakpoint) => `@media (min-width:${typeof key === 'number' ? key : breakpointValues[key]}px)`;
  const down = (key: number | Breakpoint) =>
    `@media (max-width:${typeof key === 'number' ? key - 1 : breakpointValues[key] - 1}px)`;

  return createTheme({
    breakpoints: {
      keys: ["xs", "sm", "md", "lg", "xl"],
      values: breakpointValues,
      up,
      down,
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
        disabled: textDisabledColor,
        disabledBackground: disabledColor,
        disabledOpacity: 0.38,
        focusOpacity: 0.12,
        activatedOpacity: 0.12,
      },
      success: {
        main: successMainColor,
        light: successLightColor,
      },
    },
  });
}

const Dark = createDarkTheme({});
const Themes = {
  Dark: responsiveFontSizes(Dark),
};

export default Themes;
