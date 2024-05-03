import React from "react";
import Styles from "../styles/Styles";
import { colors, Texts } from "config";
import { Grid } from "@mui/material";
import { FitnessCenter, Terminal, VideogameAsset } from "@mui/icons-material";

function AboutPage() {
  const texts = Texts["ptBr"].home;
  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.TitleStyles>{texts.title}</Styles.TitleStyles>
        <Grid container gap={2} justifyContent={"center"}>
          <Styles.BoxStyles
            style={{ color: colors.red, borderColor: colors.red }}
          >
            {"Fã de gamse e cultura pop"}
            <VideogameAsset fontSize="large" />
          </Styles.BoxStyles>
          <Styles.BoxStyles
            style={{ color: colors.green, borderColor: colors.green }}
          >
            {"Curtindo a vida Fit"}
            <FitnessCenter />
          </Styles.BoxStyles>
          <Styles.BoxStyles
            style={{ color: colors.lightBlue, borderColor: colors.lightBlue }}
          >
            {"Apaixonada pelos desafios de programar"}
            <Terminal />
          </Styles.BoxStyles>
        </Grid>
          <Grid container justifyContent={"center"} marginTop={10}>
        <Styles.TextStyles>{texts.text[0]}</Styles.TextStyles>
        <Styles.TextStyles>{texts.text[1]}</Styles.TextStyles>
        <Styles.TextStyles>{texts.text[2]}</Styles.TextStyles>
        </Grid>
      </Styles.Content>
    </Styles.Container>
  );
}

export default AboutPage;
