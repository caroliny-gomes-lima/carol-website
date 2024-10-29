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

const LogoGroup = styled.div(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: theme.spacing(1),
    alignItems: "center",
  };
});

const NavGroup = styled.div(() => {
  return {
    display: "flex",
    flexDirection: "row",
    gap: 20,
  };
});

const TextName = styled.span(({ theme }) => {
  return {
    ...FontFamily.bold18,
    marginLeft: theme.spacing(0.5),
    color: colors.purple,
  };
});

export const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0); // leve opacidade para a sobreposição
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; // coloca o overlay acima de outros elementos
`;

const Styles = {
  Container,
  Content,
  LogoGroup,
  TextName,
  NavGroup,
  LoadingOverlay
}

export default Styles;