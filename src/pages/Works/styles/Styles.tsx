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
    gap: spacing(2),
  };
});

const MovieBox = styled.div<{ setColor?: string }>(
  ({ theme }) => {
    return {
      width: "100%",
      display: "flex",
      padding: theme.spacing(1),
    };
  }
);

const companyGroups = styled.div(
  ({ theme }) => {
    return {
      backgroundColor: theme.palette.secondary.contrastText,
      padding: theme.spacing(2),
      borderRadius: theme.spacing(1),
      overflow: "hidden",
      width: "100%",
    };
  }
);

const companyAnimation = styled.div(
  ({ theme }) => {
    return {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      height: "fit-content",
      gap: theme.spacing(1),
      animation: "go-back 5s ease-out forwards",  // Adiciona 'forwards' para manter a posição final
      "@keyframes go-back": {
        from: {
          transform: "translateX(500px)"
        },
        to: {
          transform: "translateX(0)"
        }
      }
    };
  }
);

const companyBox = styled.div(
  ({ theme }) => {
    return {
      width: "fit-content",
      height: "fit-content",
      backgroundColor: "white",
      padding: theme.spacing(2),
      borderRadius: theme.spacing(1),
    };
  }
);

const Styles = {
  Container,
  Content,
  companyGroups,
  companyAnimation,
  MovieBox,
  companyBox
};

export default Styles;
