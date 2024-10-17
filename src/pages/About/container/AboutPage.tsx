import Styles from "../styles/Styles";
import { colors, Texts } from "config";
import { Grid } from "@mui/material";
import { Code, FitnessCenter, SportsEsports } from "@mui/icons-material";
import { TextComponent } from "components";

function AboutPage() {
  const texts = Texts["ptBr"].home;

  return (
    <Styles.Container>
      <Styles.Content>
        <Grid container spacing={2} justifyContent={"center"}>
          <Grid item xs={11} sm={12} md={12} lg={12} textAlign={"center"}>
            <TextComponent textColor="white">{texts.title}</TextComponent>
          </Grid>

          <Grid item xs={11} sm={5} md={4} lg={3}>
            <Styles.Box style={{ color: colors.red, borderColor: colors.red }}>
              {texts.gamesPopLifeText}
              <SportsEsports />
            </Styles.Box>
          </Grid>

          <Grid item xs={10} sm={5} md={4} lg={3}>
            <Styles.Box
              style={{ color: colors.green, borderColor: colors.green }}
            >
              {texts.fitLifeText}
              <FitnessCenter />
            </Styles.Box>
          </Grid>

          <Grid item xs={11} sm={7} md={6} lg={4}>
            <Styles.Box
              style={{
                color: colors.lightBlue,
                borderColor: colors.lightBlue,
              }}
            >
              {texts.codeLifeText}
              <Code />
            </Styles.Box>
          </Grid>
        </Grid>

        <Grid container spacing={1} justifyContent={"center"} marginTop={10}>
          <Grid item xs={12} sm={12} md={12} lg={7} textAlign={"center"}>
            <Styles.TextStyles>{texts.text[0]}</Styles.TextStyles>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={10} textAlign={"center"}>
            <Styles.TextStyles>{texts.text[1]}</Styles.TextStyles>
          </Grid>

          <Grid item xs={11} sm={11} md={11} lg={10} textAlign={"center"}>
            <Styles.TextStyles>{texts.text[2]}</Styles.TextStyles>
          </Grid>

          <Grid item xs={11} sm={11} md={11} lg={10} textAlign={"center"}>
            <Styles.TextStyles>{texts.text[3]}</Styles.TextStyles>
          </Grid>
        </Grid>
      </Styles.Content>
    </Styles.Container>
  );
}

export default AboutPage;
