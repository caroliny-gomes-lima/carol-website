import Styles from "../styles/Styles";
import { useLocation, useNavigate } from "react-router-dom";
import { DefaultLogo, TextComponent } from "components";
import { Drawer } from "@mui/material";
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
  const navigate = useNavigate();
  const location = useLocation();
  // Caminho atual da URL
  const selectedPath = location.pathname;

  const NavPages = () => {
    return (
      <>
        <Styles.Content>
          {data.map((item, index) => {
            const isSelected = item.path === selectedPath;
            return (
              <Styles.NavPageContainer key={index}>
                <Styles.NavigationButton onClick={() => navigate(item.path)} changeColor={isSelected}>
                  {item.title}
                </Styles.NavigationButton>
              </Styles.NavPageContainer>
            );
          })}
        </Styles.Content>
      </>
    );
  };

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
              {"v1.2.16"}
            </TextComponent>
          </div>
        </Styles.MenuFooter>
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
