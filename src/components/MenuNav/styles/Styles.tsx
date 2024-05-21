import styled from "styled-components";
import colors from "config/colors";
import { IconButton } from "@mui/material";
import { Theme } from "config";
import { FontFamily } from "components";

const Container = styled.div(() => {
  return {
    width: "100%",
    height: "calc(100vh)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: Theme.Dark.spacing(4),
    position: "relative",
    backgroundColor: colors.purple,
    zIndex: 90,
    padding: Theme.Dark.spacing(1),
  };
});

const Content = styled.div(() => {
  return {
    width: "100%",
    height: "fit-content",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: Theme.Dark.spacing(2),
    marginBottom: Theme.Dark.spacing(17),
    //border: "solid 2px red"
  };
});

const MenuHeader = styled.div(() => {
  return {
    width: "100%",
    padding: Theme.Dark.spacing(1, 0, 0, 7),
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: Theme.Dark.spacing(1),
    alignItems: "flex-start",
    //borderBottom: "solid 2px black",
  };
});


const CloseButtom = styled(IconButton)(() => {
  return {
    "&&.MuiIconButton-root": {
      color: Theme.Dark.palette.secondary.contrastText,
      "&:hover": {
        opacity: 0.6,
      },
    },
  };
});

const MenuFooter = styled.div(() => {
  return {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    padding: Theme.Dark.spacing(2),
    alignItems: "center",
    borderRadius: Theme.Dark.spacing(1),
    backgroundColor: Theme.Dark.palette.secondary.contrastText,
  };
});

const NavPageContainer = styled.div(() => {
  return {
    paddingRight: Theme.Dark.spacing(0.5),
    borderLeft: `solid 8px ${Theme.Dark.palette.secondary.contrastText}`,
    "&:hover": {
      transition: "0.5s",
      backgroundColor: Theme.Dark.palette.secondary.contrastText,
      color: Theme.Dark.palette.action.hover,
    },
  };
});

const NavPageAnchor = styled.a(() => {
  return {
    width: "100%",
    display: "flex",
    cursor: "pointer",
    paddingInline: Theme.Dark.spacing(3),
    paddingBlock: Theme.Dark.spacing(1),
    ...FontFamily.extrabold16,
    color: Theme.Dark.palette.secondary.contrastText,
    borderRight: `solid 4px ${Theme.Dark.palette.secondary.contrastText + 90}`,
    "&:hover": {
      transition: "0.5s",
      color: Theme.Dark.palette.action.hover,
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
