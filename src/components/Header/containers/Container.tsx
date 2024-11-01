import React, { useEffect, useMemo } from "react";
import Styles from "../styles/Styles";
import { useNavigate, useLocation } from "react-router-dom";
import { paths } from "routes/navigation";
import { ButtonComponent, DefaultLogo, IconButtonComponent } from "components";
import { Theme, Texts, colors } from "config";
import { useMediaQuery, CircularProgress } from "@mui/material";
import { Menu } from "@mui/icons-material";

type HeaderProps = {
  openMenu: () => void;
};

function Header({ openMenu }: HeaderProps) {
  const texts = Texts["ptBr"].Pages;
  const navigate = useNavigate();
  const location = useLocation();
  const [clicked, setClicked] = React.useState<number>(0);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const isMobile = useMediaQuery(Theme.dark.breakpoints.down("sm"));

  const navItems = useMemo(() => [
    { label: texts.home, path: paths.about },
    { label: texts.career, path: paths.career },
    { label: texts.experiences, path: paths.Experiences },
    { label: texts.skills, path: paths.Skills },
    { label: texts.work, path: paths.works },
  ], [texts])

  useEffect(() => {
    const activeIndex = navItems.findIndex(item => item.path === location.pathname);
    setClicked(activeIndex !== -1 ? activeIndex : 0);
  }, [location.pathname, navItems]);

  const handleClick = (index: number, path: string) => {
    setClicked(index);
    setIsLoading(true);
    navigate(path);

    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.LogoGroup>
          {isMobile && (
            <IconButtonComponent onClick={openMenu}>
              <Menu />
            </IconButtonComponent>
          )}
          <DefaultLogo PurpleLogo />
          <Styles.TextName>Caroliny Gomes</Styles.TextName>
        </Styles.LogoGroup>
        {!isMobile && (
          <Styles.NavGroup>
            {navItems.map((item, index) => (
              <ButtonComponent
                key={index}
                label={item.label}
                type="button"
                onClick={() => handleClick(index, item.path)}
                fullWidth={false}
                loading={false}
                style={{
                  backgroundColor: clicked === index ? Theme.dark.palette.action.hover : "",
                  color: clicked === index ? Theme.dark.palette.secondary.contrastText : "",
                }}
              />
            ))}
          </Styles.NavGroup>
        )}
      </Styles.Content>
      {isLoading && !isMobile && (
        <Styles.LoadingOverlay>
          <CircularProgress size={100} style={{ color: colors.purple }} />
        </Styles.LoadingOverlay>
      )}
    </Styles.Container>
  );
}

export default Header;
