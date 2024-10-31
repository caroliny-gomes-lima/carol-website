import Styles from "../styles/Styles";
import { useLocation, useNavigate } from "react-router-dom";
import { DefaultLogo, TextComponent } from "components";
import { CircularProgress, Drawer } from "@mui/material";
import { Close, Copyright } from "@mui/icons-material";
import { colors, Fonts, Texts } from "config";
import React from "react";

type MenuItem = {
  title: string;
  path: string;
};

type MenuProps = {
  data: MenuItem[];
  isOpen: boolean;
  openMenu: (props: any) => void;
};

function Container({ data, isOpen, openMenu }: MenuProps) {
  const texts = Texts["ptBr"].footer;
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const selectedPath = location.pathname;

  const handleNavigate = (path: string) => {
    setIsLoading(true);
    navigate(path);

    setTimeout(() => {
      setIsLoading(false);
      openMenu(false);
    }, 500);
  };

  const NavPages = () => (
    <Styles.Content>
      {data.map((item, index) => (
        <Styles.NavPageContainer key={index}>
          <Styles.NavigationButton
            onClick={() => handleNavigate(item.path)}
            changeColor={item.path === location.pathname}
          >
            {item.title}
          </Styles.NavigationButton>
        </Styles.NavPageContainer>
      ))}
    </Styles.Content>
  );

  const DrawMenu = () => {
    return (
      <Styles.Container>
        <Styles.MenuHeader>
          <DefaultLogo BlackLogo />
          <Styles.CloseButtom size="small" onClick={() => openMenu(false)}>
            <Close />
          </Styles.CloseButtom>
        </Styles.MenuHeader>
        {NavPages()}
        <Styles.MenuFooter>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
            }}
          >
            <Copyright style={{ color: colors.white, width: "15px" }} />
            <TextComponent
              fontSize="0.5rem"
              customTypeFont={Fonts.light}
              textColor={colors.white}
            >
              {texts.madeByText[0]}
            </TextComponent>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
            }}
          >
            <TextComponent
              fontSize="0.5rem"
              customTypeFont={Fonts.light}
              textColor={colors.white}
            >
              {texts.madeByText[1]}
            </TextComponent>
            <TextComponent
              fontSize="0.5rem"
              customTypeFont={Fonts.light}
              textColor={colors.white}
            >
              {"v" + process.env.REACT_APP_VERSION}
            </TextComponent>
          </div>
        </Styles.MenuFooter>
        {isLoading && (
          <Styles.LoadingOverlay>
            <CircularProgress size={100} style={{ color: colors.purple }} />
          </Styles.LoadingOverlay>
        )}
      </Styles.Container>
    );
  };

  return (
    <Drawer
      variant="temporary"
      anchor="left"
      open={isOpen}
      onClose={() => openMenu(!isOpen)}
    >
      {DrawMenu()}
    </Drawer>
  );
}

export default Container;
