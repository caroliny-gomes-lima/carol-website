import { Box } from "@mui/material";
import { colors } from "config";
import styled from "styled-components";

const Container = styled.div<{ backgroundColor?: boolean }>(({ theme, backgroundColor }) => {
  const { palette: colors, spacing } = theme;
  return {
    width: "100%",
    height: "fit-content",
    padding: spacing(2),
    marginBottom: spacing(5),
    borderRadius: spacing(1),
    backgroundColor: backgroundColor ? colors.secondary.main + "9F" : "transparent",
  };
});

const Content = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing(3),
  };
});

const ChartBox = styled.div(() => {
  return {
    display: "flex",
    width: "100%",
    height: "75vh",
    borderRadius: "10px",
    border: "solid 2px",
    borderColor: colors.purple,
    backgroundColor: `${colors.blackCarbon}60`,
  };
});

const LevelBar = styled.div(({ theme }) => {
  const { palette: colors, spacing } = theme;
  return {
    display: 'flex',
    backgroundColor: colors.primary.main,
    borderRadius: spacing(10),
    overflow: 'hidden',
  }
});

const Level = styled.div<{ backgroundColor?: string, width?: string }>(({ theme, backgroundColor, width }) => {
  const { spacing } = theme;
  return {
    //flex: 1,
    padding: spacing(1, 2),
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    width: width,
    backgroundColor: backgroundColor,
  }
});

const Styles = {
  Container,
  Content,
  ChartBox,
  LevelBar,
  Level,
};

export default Styles;
