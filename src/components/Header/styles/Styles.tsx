import { FontFamily, Theme } from "config";
import styled from "styled-components";

import colors from "config/colors";

const Container = styled.div(({ theme }) => {
  const { palette: colors, spacing } = theme;
  return {
    display: "flex",
    position: "relative",
    backgroundColor: colors.secondary.main,
    padding: spacing(0, 2, 0, 2),
    zIndex: 3,
  }
})

const Content = styled.div(() => {
  return {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "fit-content",
  };
});

const LogoGroup = styled.div(() => {
  return {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: Theme.Dark.spacing(1),
    alignItems: "center",
  };
});

const NavGroup = styled.div(() => {
  return {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    //alignItems: "center",
  };
});

const TextName = styled.span(() => {
  return {
    ...FontFamily.bold18,
    marginLeft: Theme.Dark.spacing(0.5),
    color: colors.purple,
  };
});

const Styles = {
  Container,
  Content,
  LogoGroup,
  TextName,
  NavGroup
}

export default Styles;