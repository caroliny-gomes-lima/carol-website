import styled from "styled-components";
import { Button, IconButton } from "@mui/material";
import { FontFamily, Theme } from "config";

const Container = styled.div(({ theme }) => {
  return {
    width: theme.spacing(25),
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: theme.palette.secondary.contrastText,
    position: "relative",
    boxShadow: "0px 0px 4px #00000014",
    zIndex: 90,
    padding: theme.spacing(1),
  };
});

const Content = styled.div(({ theme }) => {
  return {
    width: "100%",
    height: "fit-content",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: theme.spacing(1),
    marginBottom: theme.spacing(17),
  };
});

const MenuHeader = styled.div(({ theme }) => {
  return {
    width: "100%",
    padding: theme.spacing(1, 0, 0, 7),
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: theme.spacing(1),
    alignItems: "flex-start",
  };
});


const CloseButtom = styled(IconButton)(({ theme }) => {
  return {
    "&&.MuiIconButton-root": {
      color: theme.palette.primary.contrastText,
      "&:hover": {
        opacity: 0.6,
      },
    },
  };
});

const MenuFooter = styled.div(({ theme }) => {
  return {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(1, 2),
    alignItems: "center",
    borderRadius: theme.spacing(1),
    backgroundColor: "black",
  };
});

const NavPageContainer = styled.div(({ theme }) => {
  return {
    paddingRight: theme.spacing(0.5),
    "&:hover": {
      transition: "0.5s",
      backgroundColor: theme.palette.secondary.contrastText,
      color: theme.palette.action.hover,
    },
  };
});

const NavigationButton = styled(Button)<{ changeColor?: boolean }>(({ theme, changeColor }) => {
  return {
    "&&.MuiButton-root": {
      width: "100%",
      display: "flex ",
      justifyContent: "flex-start ",
      alignItems: "center ",
      padding: "10px ",
      backgroundColor: changeColor ? theme.palette.primary.contrastText : theme.palette.primary.main,
      color: changeColor ? theme.palette.secondary.contrastText : theme.palette.primary.contrastText,
      borderRadius: "5px",
      textTransform: "none",
      "&&": {
        ...FontFamily.bold14,
      },
      "&:hover": {
        backgroundColor: theme.palette.primary.contrastText,
        color: theme.palette.secondary.contrastText,
        "& svg": {
          width: "20px",
          height: "20px",
          marginRight: "8px",
          fill: "currentColor",
        },
      },
    }
  }
});

export const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0); // leve opacidade para a sobreposição
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; // coloca o overlay acima de outros elementos
`;


const Styles = {
  MenuHeader,
  MenuFooter,
  Container,
  Content,
  CloseButtom,
  NavPageContainer,
  NavigationButton,
  LoadingOverlay
};

export default Styles;
