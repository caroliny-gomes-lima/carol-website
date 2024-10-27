import styled from "styled-components";
import colors from "config/colors";
import { IconButton } from "@mui/material";
import { FontFamily, Theme } from "config";


const Container = styled.div(({ theme }) => {
  return {
    width: "100%",
    height: "calc(100vh)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: theme.spacing(4),
    position: "relative",
    backgroundColor: colors.purple,
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
    justifyContent: "space-between",
    gap: theme.spacing(2),
    marginBottom: theme.spacing(17),
    //border: "solid 2px red"
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
    //borderBottom: "solid 2px black",
  };
});


const CloseButtom = styled(IconButton)(({ theme }) => {
  return {
    "&&.MuiIconButton-root": {
      color: theme.palette.secondary.contrastText,
      "&:hover": {
        opacity: 0.6,
      },
    },
  };
});

const MenuFooter = styled.div(({ theme }) => {
  return {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2),
    alignItems: "center",
    borderRadius: theme.spacing(1),
    backgroundColor: theme.palette.secondary.contrastText,
  };
});

const NavPageContainer = styled.div(({ theme }) => {
  return {
    paddingRight: theme.spacing(0.5),
    borderLeft: `solid 8px ${theme.palette.secondary.contrastText}`,
    "&:hover": {
      transition: "0.5s",
      backgroundColor: theme.palette.secondary.contrastText,
      color: theme.palette.action.hover,
    },
  };
});

const NavPageAnchor = styled.a(({ theme }) => {
  return {
    width: "100%",
    display: "flex",
    cursor: "pointer",
    paddingInline: theme.spacing(3),
    paddingBlock: theme.spacing(1),
    ...FontFamily.extrabold16,
    color: theme.palette.secondary.contrastText,
    borderRight: `solid 4px ${theme.palette.secondary.contrastText + 90}`,
    "&:hover": {
      transition: "0.5s",
      color: theme.palette.action.hover,
      borderRight: `solid 4px ${colors.purple}`,
    },
  };
});

const SmallTextStyles = styled.span(() => {
  return {
    ...FontFamily.extrabold10,
    color: colors.white,
  };
});

const Styles = {
  MenuHeader,
  MenuFooter,
  Container,
  Content,
  CloseButtom,
  NavPageContainer,
  NavPageAnchor,
  SmallTextStyles,
};

export default Styles;
