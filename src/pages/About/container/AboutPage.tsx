import Styles from "../styles/Styles";
import { colors, Fonts, Spacing, Texts } from "config";
import { Grid } from "@mui/material";
import { Code, FitnessCenter, SportsEsports } from "@mui/icons-material";
import { TextComponent } from "components";

function AboutPage() {
  const texts = Texts["ptBr"].home;

  const renderTextBox = (
    IconComponent: React.ElementType,
    text: string,
    setColor: string
  ) => (
    <Styles.Box setColor={setColor}>
      <TextComponent customTypeFont={Fonts.bold} textColor={setColor}>
        {text}
      </TextComponent>
      <IconComponent style={{ color: setColor }} />
    </Styles.Box>
  );

  const TextSection = (text: string) => (
    <Grid item xs={12} sm={12} md={12} lg={12} textAlign={"center"}>
      <TextComponent customTypeFont={Fonts.medium} fontSize="1rem" textColor={colors.white}>{text}</TextComponent>
    </Grid>
  )

  return (
    <>
      <Styles.Container>
        <Styles.Content>
          <TextComponent
            fontSize="2rem"
            customTypeFont={Fonts.bold}
            textColor={colors.white}
          >
            {texts.title}
          </TextComponent>

          <Grid container spacing={2} direction="row" justifyContent="center">
            <Grid item xs={11} sm={5} md={3} lg={3}>
              {renderTextBox(SportsEsports, texts.gamesPopLifeText, colors.red)}
            </Grid>

            <Grid item xs={10} sm={5} md={3} lg={3}>
              {renderTextBox(FitnessCenter, texts.fitLifeText, colors.green)}
            </Grid>

            <Grid item xs={11} sm={7} md={4} lg={4}>
              {renderTextBox(Code, texts.codeLifeText, colors.lightBlue)}
            </Grid>
          </Grid>
        </Styles.Content>
      </Styles.Container>

      <Styles.Container backgroundColor>
        <Styles.Content>

          {texts.text.map((section) => (
            <>{TextSection(section)}</>
          ))}

        </Styles.Content>
      </Styles.Container>
    </>
  );
}

export default AboutPage;
