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
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(1),
  };
});

const AvatarBox = styled.div(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "90%",
    height: "auto",
    borderRadius: theme.spacing(20),
    backgroundColor: theme.palette.secondary.contrastText
  }
})

const CompanyBox = styled.div(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "fit-content",
    backgroundColor: theme.palette.secondary.contrastText,
    padding: theme.spacing(2),
    marginBottom: theme.spacing(5),
    borderRadius: theme.spacing(1),
    "& .companyImage": {
      animation: "go-back 2s",
    },
    "@keyframes go-back": {
      from: {
        transform: "translateX(-500px)"
      },
      to: {
        transform: "translateX(0)"
      }
    }
  }
})

const CompanyLogosGroup = styled.div(({ theme }) => {
  return {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    gap: theme.spacing(2),
    width: "fit-content",
    height: "fit-content",
  }
})

const Styles = {
  Container,
  Content,
  AvatarBox,
  CompanyBox,
  CompanyLogosGroup,
}

export default Styles;