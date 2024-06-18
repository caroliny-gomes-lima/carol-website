import { ListItem, ListItemIcon } from "@mui/material";
import { FontFamily } from "components";
import { Theme } from "config";
import styled from "styled-components";

const Container = styled.div(() => {
  return {
    width: "100%",
    height: "fit-content",
    margin: Theme.Dark.spacing(2),
    padding: Theme.Dark.spacing(1),
  };
});

const Content = styled.div(() => {
  return {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: Theme.Dark.spacing(5),
  };
});

const TitleStyles = styled.h1(() => {
  return {
    ...FontFamily.extrabold42,
    fontSize: "2.1rem",
  };
});

const TextStyles = styled.span<{ $DefaultColor?: string }>(
  ({ $DefaultColor }) => {
    return {
      ...FontFamily.extrabold18,
      textAlign: $DefaultColor ? "left" : "center",
      color: $DefaultColor,
    };
  }
);

const Box = styled.div(() => {
  return {
    ...FontFamily.medium16,
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    padding: Theme.Dark.spacing(1),
    border: "solid 2px red",
    borderRadius: Theme.Dark.spacing(1),
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
