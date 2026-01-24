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
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: spacing(2),
    gap: spacing(1),
  };
});

const Box = styled.div<{ setColor: string }>(
  ({ theme, setColor }) => {
    return {
      width: "auto",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      padding: theme.spacing(1),
      paddingInline: theme.spacing(4),
      border: `solid 2px ${setColor}`,
      borderRadius: theme.spacing(1),
      gap: theme.spacing(2),
    };
  }
);

const TagsAnimation = styled.div(() => {
  return {
    "& .box-tags": {
      animation: "go-right 4s",
    },
    "@keyframes go-right": {
      from: {
        transform: "translateX(-900px)"
      },
      to: {
        transform: "translateX(0)"
      }
    }
  };

});

const TagsGroup = styled.div(({ theme }) => {
  return {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(2),
    padding: theme.spacing(2),
  };

});

const ZoomText = styled.div(() => {
  return {
    animation: "zoom-in 2s ease-out both",

    "@keyframes zoom-in": {
      from: {
        transform: "scale(0.7)",
        opacity: 0,
      },
      to: {
        transform: "scale(1)",
        opacity: 1,
      },
    },
  };
});

const Styles = {
  Container,
  Content,
  Box,
  TagsAnimation,
  TagsGroup,
  ZoomText,
};

export default Styles;
