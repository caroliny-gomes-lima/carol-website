import { colors, Fonts, Texts } from "config";
import { TextComponent } from "components";
import Styles from "../styles/Styles";
import ExperienceComponents from "../components/ExperienceComponents";
import { yellow } from "@mui/material/colors";

function ExperiencesPage() {
  const texts = Texts["ptBr"].experiences;
  const Submit = (data: Record<string, unknown>) => {
    console.log(data);
    // data.file = selectedFile.url;
    // setLoading(true);
    alert(JSON.stringify(data));
  };
  return (
    <>
      <Styles.Container>
        <Styles.Content>
          <TextComponent
            fontSize="2rem"
            customTypeFont={Fonts.bold}
            textColor={colors.white}
          >
            {texts.experiencesTitle}
          </TextComponent>
        </Styles.Content>
      </Styles.Container>

      <Styles.Container backgroundColor>
        <Styles.Content>
          <TextComponent
            fontSize="1rem"
            customTypeFont={Fonts.bold}
            textColor={colors.white}
          >
            {texts.ExperiencesSubtitle[0]}
          </TextComponent>
          <TextComponent
            fontSize="1rem"
            customTypeFont={Fonts.bold}
            textColor={colors.white}
          >
            <span
              style={{
                color: yellow[400],
                fontWeight: "bold",
                marginRight: "10px",
              }}
            >
              Dica:
            </span>
            {texts.ExperiencesSubtitle[1]}
          </TextComponent>

          <ExperienceComponents onSubmit={(data) => Submit(data)} />
        </Styles.Content>
      </Styles.Container>
    </>
  );
}

export default ExperiencesPage;
