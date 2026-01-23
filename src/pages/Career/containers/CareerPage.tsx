import Styles from "../styles/Styles";
import { ImageComponent, TextComponent } from "components";
import { Grid } from "@mui/material";
import { colors, Fonts, Texts } from "config";
import PalmSoftCompanyLogo from "../../../assets/Images/logo-palmsoft.png";
import DeepenCompanyLogo from "../../../assets/Images/logo-deepen.png";
import CheckCommerceLogo from "../../../assets/Images/logo-check-commerce.png";

function CareerPage() {
  const texts = Texts["ptBr"].career;
  return (
    <>
      <Styles.Container backgroundColor>
        <Styles.Content>
          <TextComponent
            fontSize="3rem"
            customTypeFont={Fonts.bold}
            textColor={colors.white}
          >
            {"Carreira"}
          </TextComponent>
          <Styles.CompanyLogosGroup className="company-logos">
            <ImageComponent image={PalmSoftCompanyLogo} alt="palmSoft company" link="https://www.palmsoft.com.br/" />
            <ImageComponent image={DeepenCompanyLogo} alt="deepen company" link="https://www.deepen.com.br/" />
            <ImageComponent image={CheckCommerceLogo} alt="check commerce company" link="https://www.checkcommerce.com.br/" />
          </Styles.CompanyLogosGroup>
        </Styles.Content>
      </Styles.Container>

      <Styles.CarrerDescriptionBox>
        <Grid item xs={12} sm={11} md={12} lg={4}>
          <Styles.ZoomText style={{ animationDelay: "0.5s" }}>
            <TextComponent
              fontSize="1rem"
              customTypeFont={Fonts.medium}
              textColor={colors.white}
            >
              {texts.ComapnyImageText}
            </TextComponent>
          </Styles.ZoomText>
        </Grid>

        <br />
        <br />

        <Grid item xs={12} sm={11} md={12} lg={4}>
          <Styles.ZoomText style={{ animationDelay: "0.5s" }}>
            <TextComponent
              fontSize="1rem"
              customTypeFont={Fonts.medium}
              textColor={colors.white}
            >
              {texts.checkComerceCarrerText}
            </TextComponent>
          </Styles.ZoomText>
        </Grid>

      </Styles.CarrerDescriptionBox>
    </>
  );
}

export default CareerPage;
