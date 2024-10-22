import styled from "styled-components";

const Container = styled.div<{ backgroundColor?: boolean }>(
  ({ theme, backgroundColor }) => {
    const { palette: colors, spacing } = theme;
    return {
      width: "100%",
      height: "fit-content",
      padding: spacing(2),
      marginBottom: spacing(5),
      borderRadius: spacing(1),
      backgroundColor: backgroundColor ? colors.secondary.main + "9F" : "transparent",
    };
  }
);

const Content = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing(1),
  };
});

const Box = styled.div<{ setColor: string }>(
  ({ theme, setColor }) => {
    return {
      width: "100%",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      padding: theme.spacing(1),
      paddingInline: theme.spacing(4),
      border: `solid 2px ${setColor}`,
      borderRadius: theme.spacing(1),
      gap: 12,
    };
  }
);

const Styles = {
  Container,
  Content,
  Box,
};

export default Styles;
