import styled from "styled-components";

const Container = styled.div<{ backgroundColor?: boolean }>(
  ({ theme, backgroundColor }) => {
    return {
      width: "100%",
      height: "fit-content",
      padding: theme.spacing(2),
      marginBottom: theme.spacing(5),
      borderRadius: theme.spacing(1),
      backgroundColor: backgroundColor ? theme.palette.secondary.main + "9F" : "transparent",
    };
  }
);

const Content = styled.div(({ theme }) => {
  return {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(5),
    padding: theme.spacing(5),
    "& .company-logos": {
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

const CarrerDescriptionBox = styled.div(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "fit-content",
    gap: theme.spacing(5),
    backgroundColor: theme.palette.secondary.contrastText,
    padding: theme.spacing(5),
    marginBottom: theme.spacing(5),
    borderRadius: theme.spacing(1),
  }
})

const ZoomText = styled.div(() => {
  return {
    animation: "zoom-in 0.8s ease-out both",

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


const CompanyLogosGroup = styled.div(({ theme }) => {
  return {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    gap: theme.spacing(5),
    width: "fit-content",
    height: "fit-content",
  }
})

const Styles = {
  Container,
  Content,
  CarrerDescriptionBox,
  CompanyLogosGroup,
  ZoomText,
}

export default Styles;