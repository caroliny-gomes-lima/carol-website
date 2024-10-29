import { FontFamily } from "config";
import React, { ReactNode } from "react";
import styled from "styled-components";


/*children: ReactNode; renderiza qualquer tipo de conteudo entre as tags de abertura e fechamento, como:
Elementos JSX (outros componentes React),
strings,
arrays, 
null, undefined ou boolean*/

type TextProps = {
    children: ReactNode;
    style?: React.CSSProperties;
    customTypeFont?: string;
    fontSize?: string;
    textColor?: string;
}

type TextStylesProps = {
    customTypeFont?: string;
    fontSize?: string;
    textColor?: string;
    styles?: object;
}

const Text = styled.p.withConfig({
    shouldForwardProp: (prop) => !["customTypeFont", "styles"].includes(prop),
})<TextStylesProps>(({ customTypeFont, fontSize, textColor, styles, theme }) => {
    const { palette: colors } = theme;
    return {
        padding: 0,
        margin: 0,
        display: "flex",
        justifyContent: "flex-start",
        alignContent: "center",
        fontFamily: customTypeFont ? customTypeFont : FontFamily.medium12.fontFamily,
        fontSize: fontSize ? fontSize : FontFamily.medium12.fontSize,
        color: textColor ? textColor : colors.text.textPrimaryColor,
        ...styles,
    };
});

function TextComponent({ children, style, customTypeFont, fontSize, textColor }: TextProps): JSX.Element {
    return (

        <Text styles={style} customTypeFont={customTypeFont} fontSize={fontSize} textColor={textColor}>
            {children}
        </Text>
    );
}

export default TextComponent;
