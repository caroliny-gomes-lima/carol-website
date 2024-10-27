import { colors, Fonts, Texts } from "config";
import { TextComponent, } from "components";
import Styles from "../styles/Styles";
import ExperienceComponents from "../components/ExperienceComponents";

function ExperiencesPage() {
  const texts = Texts["ptBr"].experiences;

  return (
    <>
      <Styles.Container backgroundColor>
        <Styles.Content>
          <TextComponent fontSize="1rem"
            typeFont={Fonts.bold}
            textColor={colors.white}>
            {texts.practicalExperiencesText}
          </TextComponent>

          <ExperienceComponents />
        </Styles.Content>
      </Styles.Container>
    </>
  );
}

export default ExperiencesPage;
