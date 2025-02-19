import React from "react";
import Styles from "../styles/Styles";
import { colors, Fonts, Texts } from "config";
import IconButtonComponent from "components/buttons/IconButton";
import { Copyright, Email, GitHub, LinkedIn } from "@mui/icons-material";
import { Grid } from "@mui/material";
import TextComponent from "components/others/TextComponent";

function Footer() {
  const texts = Texts["ptBr"].footer;

  const socialLinks = [
    {
      icon: <LinkedIn fontSize="medium" />,
      link: "https://www.linkedin.com/in/caroliny-lima-desenvolvedora-sistemas",
    },
    {
      icon: <GitHub fontSize="medium" />,
      link: "https://github.com/caroliny-gomes-lima",
    },
    {
      icon: <Email fontSize="medium" />,
      link: "mailto:caroliny.gomeslima@gmail.com",
    },
  ];

  const renderIconButton = (icon: JSX.Element, link: string) => {
    return (
      <IconButtonComponent onClick={() => window.open(link, "_blank")}>
        {icon}
      </IconButtonComponent>
    );
  };

  return (
    <Styles.Container>
      <Styles.Content>
        <Grid item display="flex" gap={2} margin={2}>
          {socialLinks.map(({ icon, link }, index) => (
            <React.Fragment key={index}>
              {renderIconButton(icon, link)}
            </React.Fragment>
          ))}
        </Grid>
        <TextComponent fontSize="0.7rem" customTypeFont={Fonts.extraBold}>
          {texts.modeText}
        </TextComponent>
        <Styles.CopyrightGrup>
          <Copyright style={{ color: colors.white, width: "15px" }} />
          <TextComponent
            fontSize="0.5rem"
            customTypeFont={Fonts.light}
            textColor={colors.white}
          >
            {texts.madeByText[0]}
          </TextComponent>
          <TextComponent
            fontSize="0.5rem"
            customTypeFont={Fonts.light}
            textColor={colors.white}
          >
            {texts.madeByText[1]}
          </TextComponent>
          <TextComponent
            fontSize="0.5rem"
            customTypeFont={Fonts.light}
            textColor={colors.white}
          >
            {"v" + process.env.REACT_APP_VERSION}
          </TextComponent>
        </Styles.CopyrightGrup>
      </Styles.Content>
    </Styles.Container>
  );
}

export default Footer;
