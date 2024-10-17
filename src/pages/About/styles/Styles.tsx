//import { ListItem, ListItemIcon } from "@mui/material";
import { FontFamily } from "config";
import styled from "styled-components";

const Container = styled.div(({ theme }) => {
  const { palette: colors, spacing } = theme;
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: theme.spacing(1),
    marginBottom: spacing(20),
    //backgroundColor: "red",
    zIndex: 3,
  };
});

const Content = styled.div(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(5),
  };
});

const TitleStyles = styled.h1(() => {
  return {
    ...FontFamily.extrabold42,
    color: "white",
    fontSize: "2.1rem",
  };
});

const TextStyles = styled.span<{ $DefaultColor?: string }>(
  ({ $DefaultColor }) => {
    return {
      ...FontFamily.extrabold18,
      textAlign: $DefaultColor ? "left" : "center",
      color: "white",
    };
  }
);

const Box = styled.div(({ theme }) => {
  return {
    ...FontFamily.medium16,
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(1),
    border: "solid 2px red",
    borderRadius: theme.spacing(1),
    gap: 12,
  };
});

const Styles = {
  Container,
  TitleStyles,
  TextStyles,
  Content,
  Box,
};

export default Styles;
