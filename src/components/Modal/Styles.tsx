import { Box, IconButton, Modal, Paper } from "@mui/material";
import { FontFamily } from "config";
import styled from "styled-components";

const customModal = styled(Modal)(({ theme }) => {
  return {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: theme.spacing(10),
  };
});

const Container = styled(Paper)<{
  backgroundColor?: string;
}>(({ theme, backgroundColor }) => {
  return {
    "&&.MuiPaper-root": {
      backgroundColor: backgroundColor || theme.palette.secondary.contrastText,
      width: "fit-content",
      height: "fit-content",
      margin: theme.spacing(2),
      padding: theme.spacing(1),
    },
  };
});

const HeaderModal = styled.div(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: theme.spacing(1),
    padding: theme.spacing(1),
  };
});

const Content = styled(Box)(({ theme }) => {
  return {
    width: "fit-content",
    height: "fit-content",
    padding: theme.spacing(2),
    outline: "none",
  };
});

const ModalTitle = styled.span(({ theme }) => {
  return {
    ...FontFamily.extrabold18,
    color: theme.palette.primary.main,
    alignSelf: "center",
  };
});

const TextStyles = styled.span<{ $DefaultColor?: string }>(
  ({ $DefaultColor }) => {
    return {
      ...FontFamily.bold16,
      textAlign: $DefaultColor ? "left" : "center",
      color: $DefaultColor,
    };
  }
);

const closeButton = styled(IconButton)(() => {
  return {
    "&&.MuiIconButton-root": {
      width: "fit-content",
      flexShrink: 1,
      overflow: "hidden",
      color: "black",
      padding: 0,
    },
  };
});

const Styles = {
  customModal,
  Container,
  HeaderModal,
  ModalTitle,
  Content,
  TextStyles,
  closeButton,
};

export default Styles;
