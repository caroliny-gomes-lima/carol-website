import Styles from "../styles/Styles";
import { colors, Fonts, Texts } from "config";
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
      <TextComponent customTypeFont={Fonts.medium} fontSize="1rem" textColor={colors.white}>
        {text}
      </TextComponent>
    </Grid>
  )

  return (
    <>
      <Styles.Container>
        <Styles.Content>

          <Styles.ZoomText style={{ animationDelay: "0.5s" }}>
            <TextComponent
              fontSize="3rem"
              customTypeFont={Fonts.bold}
              textColor={colors.white}
              style={{ marginBottom: "50px" }}
            >
              {texts.title}
            </TextComponent>
          </Styles.ZoomText>


          <Styles.TagsAnimation>
            <Styles.TagsGroup className="box-tags">
              {renderTextBox(SportsEsports, texts.gamesPopLifeText, colors.red)}
              {renderTextBox(FitnessCenter, texts.fitLifeText, colors.green)}
              {renderTextBox(Code, texts.codeLifeText, colors.lightBlue)}
            </Styles.TagsGroup>
          </Styles.TagsAnimation>

        </Styles.Content>
      </Styles.Container>

      <Styles.ZoomText style={{ animationDelay: "0.5s" }}>
        <Styles.Container backgroundColor>
          <Styles.Content>

            {texts.text.map((section) => (
              <>{TextSection(section)}</>
            ))}

          </Styles.Content>
        </Styles.Container>
      </Styles.ZoomText>
    </>
  );
}

export default AboutPage;
