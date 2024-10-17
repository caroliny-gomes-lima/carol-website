import { Theme } from "config";
import styled, { css } from "styled-components";
import { stripesBackground } from "config/Image";

const Background = styled.div(() => {
  return {
    width: "fit-content",
    height: "fit-content",
    backgroundColor: "black",
    zIndex: -1,
  };
});

const Stripes = styled.div(({ }) => {
  return {
    content: '',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `url(${stripesBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  }
})

const PageContainer = styled.div(({ theme }) => {
  const { palette: colors, spacing } = theme;
  return {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    overflowY: "auto",
    overflowX: "hidden",
    backgroundColor: colors.primary.main
  };
});

const PageContent = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    padding: spacing(1)
  };
});

const Styles = {
  Background,
  Stripes,
  PageContainer,
  PageContent,
}

export default Styles;
