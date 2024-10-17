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
    style?: React.CSSProperties; //propriedades de estilo
    fonFamily?: string;
    fontSize?: string;
    textColor?: string;
}


type TextStylesProps = {
    fontFamily?: string;
    fontSize?: string;
    textColor?: string;
    styles?: object;
}

const Text = styled.p<TextStylesProps>(({ fontFamily, fontSize, textColor, styles, theme }) => {
    const { palette: colors, spacing } = theme;
    return {
        padding: 0,
        margin: 0,
        display: "flex",
        justifyContent: "flex-start",
        alignContent: "center",
        FontFamily: fontFamily ? fontFamily : FontFamily.medium12.fontFamily,
        fontSize: fontSize ? fontSize : FontFamily.medium12.fontSize,
        color: textColor ? textColor : colors.text.textPrimaryColor,
        ...styles,
    };
});

function TextComponent({ children, style, fonFamily, fontSize, textColor }: TextProps): JSX.Element {
    return (
        <Text styles={style} fontFamily={fonFamily} fontSize={fontSize} textColor={textColor}>
            {children}
        </Text>
    )
}

export default TextComponent;