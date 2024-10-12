import Styles from "../styles/Styles";
import { Texts, Theme } from "config";
import DefaultLogo from "components/others/DefaultLogo";
import IconButtonComponent from "components/buttons/IconButton";
import { Copyright, Email, GitHub, LinkedIn } from "@mui/icons-material";
import { Grid } from "@mui/material";

function Footer() {
  const texts = Texts["ptBr"].footer;

  const handleEmailClick = () => {
    const email = "caroliny.gomeslima@gmail.com";
    window.open(`mailto:${email}`, "_blank");
  };

  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.LogoGroup>
          <DefaultLogo />
          <Styles.TextStyles>{texts.modeText}</Styles.TextStyles>
        </Styles.LogoGroup>
        <Grid item display="flex" gap={2} margin={2}>
          <IconButtonComponent
            customColor={Theme.Dark.palette.primary.contrastText}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/caroliny-gomes-a142291b9",
                "_blank"
              )
            }
          >
            <LinkedIn fontSize="large" />
          </IconButtonComponent>
          <IconButtonComponent
            customColor={Theme.Dark.palette.primary.contrastText}
            onClick={() =>
              window.open("https://github.com/caroliny-gomes-lima", "_blank")
            }
          >
            <GitHub fontSize="large" />
          </IconButtonComponent>
          <IconButtonComponent
            customColor={Theme.Dark.palette.primary.contrastText}
            onClick={handleEmailClick}
          >
            <Email fontSize="large" />
          </IconButtonComponent>
        </Grid>
        <Grid container direction="row" width={145} wrap="nowrap" gap={1}>
          <Copyright />
          <Grid container direction={"column"}>
            <Styles.SmallTextStyles>
              {texts.madeByText[0]}
            </Styles.SmallTextStyles>
            <Styles.SmallTextStyles>
              {texts.madeByText[1]}
            </Styles.SmallTextStyles>
          </Grid>
        </Grid>
      </Styles.Content>
    </Styles.Container>
  );
}

export default Footer;
