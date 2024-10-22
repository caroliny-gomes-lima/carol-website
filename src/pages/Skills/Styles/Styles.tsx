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

const Styles = {
  Container,
  Content,
  ChartBox,
};

export default Styles;
