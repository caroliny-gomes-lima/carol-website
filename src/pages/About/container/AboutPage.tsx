import React from "react";
import Styles from "../styles/Styles";
import { colors, Texts } from "config";
import { Grid } from "@mui/material";
import {
  Code,
  FitnessCenter,
  SportsEsports,
} from "@mui/icons-material";
import BoxActivities from "../components/BoxActivities";

function AboutPage() {
  const texts = Texts["ptBr"].home;

  return (
    <Styles.Container>
      <Styles.Content>
        <Grid
          container
          justifyContent={"center"}
          xs={10}
          sm={10}
          md={12}
          lg={12}
        >
          <Styles.TitleStyles>{texts.title}</Styles.TitleStyles>
          <Grid container gap={2} justifyContent={"center"}>
            <Styles.Box style={{ color: colors.red, borderColor: colors.red }}>
              {texts.gamesPopLifeText}
              <SportsEsports fontSize="large" />
            </Styles.Box>

            <Styles.Box
              style={{ color: colors.green, borderColor: colors.green }}
            >
              {texts.fitLifeText}
              <FitnessCenter />
            </Styles.Box>

            <Styles.Box
              style={{ color: colors.lightBlue, borderColor: colors.lightBlue }}
            >
              {texts.codeLifeText}
              <Code />
            </Styles.Box>
          </Grid>
        </Grid>
        <Grid
          container
          xs={10}
          sm={10}
          md={10}
          lg={8}
          justifyContent={"center"}
          marginTop={10}
        >
          <Styles.TextStyles>{texts.text[0]}</Styles.TextStyles>
          <Styles.TextStyles>{texts.text[1]}</Styles.TextStyles>
        </Grid>

        <Grid
          container
          direction={"row"}
          justifyContent={"center"}
          display="flex"
          marginTop={10}
          gap={10}
        >
          <Grid item xs={10} sm={10} md={10} lg={4}>
            <BoxActivities textsData={texts.textActivitiesLeft} />
          </Grid>
          <Grid item xs={10} sm={10} md={10} lg={4}>
            <BoxActivities textsData={texts.textActivitiesRight} />
          </Grid>
        </Grid>
      </Styles.Content>
    </Styles.Container>
  );
}

export default AboutPage;
