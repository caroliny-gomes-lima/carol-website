import { colors, Fonts, Texts } from "config";
import { TextComponent, } from "components";
import Styles from "../styles/Styles";
import ExperienceComponents from "../components/ExperienceComponents";

function ExperiencesPage() {
  const texts = Texts["ptBr"].experiences;

  return (
    <>
      <Styles.Container>
        <Styles.Content>
          <TextComponent fontSize="2rem"
            customTypeFont={Fonts.bold}
            textColor={colors.white}>
            {texts.practicalExperiencesText}
          </TextComponent>
        </Styles.Content>
      </Styles.Container>

      <Styles.Container backgroundColor>
        <Styles.Content>
          <ExperienceComponents />
        </Styles.Content>
      </Styles.Container>
    </>
  );
}

export default ExperiencesPage;
