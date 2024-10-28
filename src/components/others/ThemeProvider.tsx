
import { ThemeProvider } from "@mui/material";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

function ThemeProviderComponent({ theme, children }: any): JSX.Element {
    return (
        <ThemeProvider theme={theme}>
            <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
        </ThemeProvider>
    );
}

export default ThemeProviderComponent;
