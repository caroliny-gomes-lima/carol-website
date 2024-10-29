import Styles from "../styles/Styles";
import { ImageComponent, svgImageComponent, TextComponent } from "components";
import { Grid, useMediaQuery } from "@mui/material";
import { colors, Fonts, Texts, Theme } from "config";
import PalmSoftCompanyLogo from "../../../assets/Images/logo-palmsoft.png";
import DeepenCompanyLogo from "../../../assets/Images/logo-deepen.png";

function CareerPage() {
  const texts = Texts["ptBr"].career;
  const isMobile = useMediaQuery(Theme.dark.breakpoints.down("sm"));
  const avatarSize = isMobile
    ? { width: "70vw", height: "60vw" }
    : { width: "30vw", height: "20vw" };

  return (
    <>
      <Styles.Container backgroundColor>
        <Styles.Content>
          <Grid
            container
            spacing={2}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Grid
              item
              xs={9}
              sm={3}
              md={3}
              lg={3}
              display={"flex"}
              justifyContent={"center"}
            >
              <Styles.AvatarBox>
                <svgImageComponent.AvatarThinkingCodeStyled
                  style={avatarSize}
                />
              </Styles.AvatarBox>
            </Grid>
            <Grid item xs={11} sm={8} md={8} lg={6}>
              <TextComponent
                fontSize="1.6rem"
                customTypeFont={Fonts.bold}
                textColor={colors.white}
              >
                {texts.avatarText}
              </TextComponent>
            </Grid>
          </Grid>
        </Styles.Content>
      </Styles.Container>

      <Styles.CompanyBox>
        <Styles.CompanyLogosGroup className="company-logos">
          <ImageComponent image={PalmSoftCompanyLogo} alt="palmSoft company" />
          <ImageComponent image={DeepenCompanyLogo} alt="deepen company" />
        </Styles.CompanyLogosGroup>
        <Grid item xs={12} sm={11} md={7} lg={7}>
          <TextComponent
            fontSize="1rem"
            customTypeFont={Fonts.medium}
            textColor={colors.white}
          >
            {texts.ComapnyImageText}
          </TextComponent>
        </Grid>
      </Styles.CompanyBox>
    </>
  );
}

export default CareerPage;
