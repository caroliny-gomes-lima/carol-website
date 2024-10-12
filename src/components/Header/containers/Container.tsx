import React from "react";
import Styles from "../styles/Styles";
import { useNavigate } from "react-router-dom";
import { paths } from "routes/navigation";
import { DefaultButton, DefaultLogo, IconButtonComponent } from "components";
import { colors, Theme } from "config";
import { Texts } from "config";
import { useMediaQuery } from "@mui/material";
import { Menu } from "@mui/icons-material";

type HeaderProps = {
  openMenu: () => void;
};

function Header({ openMenu }: HeaderProps) {
  const texts = Texts["ptBr"].Pages;
  const navigate = useNavigate();
  const [clicked, setClicked] = React.useState<number>(0);
  const isMobile = useMediaQuery(Theme.Dark.breakpoints.down("sm"))

  const handleClick = (index: number) => {
    setClicked(index);
    if (index === 0) {
      navigate(paths.about);
    }

    if (index === 1) {
      navigate(paths.career);
    }

    if (index === 2) {
      navigate(paths.Experiences);
    }

    if (index === 3) {
      //navigate(paths.home);
    }
  };

  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.LogoGroup>
          {isMobile && (
            <IconButtonComponent customHover={colors.purple} customColor={colors.purple} onClick={openMenu}>
              <Menu />
            </IconButtonComponent>
          )}
          <DefaultLogo PurpleLogo />
          <Styles.TextName>Caroliny Gomes</Styles.TextName>
        </Styles.LogoGroup>
        {!isMobile && (
          <Styles.NavGroup>
            <DefaultButton
              label={texts.home}
              type="button"
              onClick={() => handleClick(0)}
              fullWidth={false}
              loading={false}
              style={{
                backgroundColor:
                  clicked === 0 ? Theme.Dark.palette.action.hover : "",
                color:
                  clicked === 0 ? Theme.Dark.palette.secondary.contrastText : "",
              }}
            />
            <DefaultButton
              label={texts.career}
              type="button"
              onClick={() => handleClick(1)}
              fullWidth={false}
              loading={false}
              style={{
                backgroundColor:
                  clicked === 1 ? Theme.Dark.palette.action.hover : "",
                color:
                  clicked === 1 ? Theme.Dark.palette.secondary.contrastText : "",
              }}
            />

            <DefaultButton
              label={texts.experiences}
              type="button"
              onClick={() => handleClick(2)}
              fullWidth={false}
              loading={false}
              style={{
                backgroundColor:
                  clicked === 2 ? Theme.Dark.palette.action.hover : "",
                color:
                  clicked === 2 ? Theme.Dark.palette.secondary.contrastText : "",
              }}
            />

            <DefaultButton
              label={texts.work}
              type="button"
              onClick={() => handleClick(3)}
              fullWidth={false}
              loading={false}
              style={{
                backgroundColor:
                  clicked === 3 ? Theme.Dark.palette.action.hover : "",
                color:
                  clicked === 3 ? Theme.Dark.palette.secondary.contrastText : "",
              }}
            />
          </Styles.NavGroup>
        )}
      </Styles.Content>
    </Styles.Container>
  );
}

export default Header;
