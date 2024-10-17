import { FontFamily, Theme } from "config";
import styled from "styled-components";

import colors from "config/colors";

const Container = styled.div(() => {
  return {
    width: "100%",
    padding: Theme.Dark.spacing(3),
    backgroundColor: colors.purple,
  }
})

const Content = styled.div(() => {
  return {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
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
    gap: 15,
    alignItems: "center",
  };
});

const TextStyles = styled.span(() => {
  return {
    ...FontFamily.extrabold14,
    color: colors.black,
  };
});

const SmallTextStyles = styled.span(() => {
  return {
    ...FontFamily.extrabold10,
    color: colors.white,
  };
});

const Styles = {
  Container,
  Content,
  LogoGroup,
  TextStyles,
  SmallTextStyles
}

export default Styles;