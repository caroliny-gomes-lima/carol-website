import styled from "styled-components";
import { stripesBackground } from "config/Image";

const PageContainer = styled.div<{ MenuHeight: number | null }>(({ theme, MenuHeight }) => {
  const { palette: colors } = theme;
  return {
    width: "100%",
    height: `calc(100vh - ${MenuHeight ? MenuHeight + "px" : 0}px)`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    overflowY: "auto",
    overflowX: "hidden",
    backgroundColor: colors.primary.main,
    zIndex: 1,
  };
});

const Stripes = styled.div(() => {
  return {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `url(${stripesBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    zIndex: 2,
  }
})

const PageContent = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: spacing(3),
    zIndex: 3,
    flex: 1,
  };
});

const Styles = {
  Stripes,
  PageContainer,
  PageContent,
}

export default Styles;
