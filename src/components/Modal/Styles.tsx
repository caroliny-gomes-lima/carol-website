import { Box, IconButton, Modal, Paper } from "@mui/material";
import { colors, FontFamily, Theme } from "config";
import styled from "styled-components";

const customModal = styled(Modal)(() => {
  return {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: Theme.Dark.spacing(10),
  };
});

const Container = styled(Paper)<{
  customBgColor?: string;
  customShadowColor?: string;
}>(({ customBgColor, customShadowColor }) => {
  return {
    "&&.MuiPaper-root": {
      backgroundColor: customBgColor || colors.purple,
      width: "fit-content",
      height: "fit-content",
      margin: Theme.Dark.spacing(2),
      padding: Theme.Dark.spacing(1),
      boxShadow: `0px 4px 20px ${customShadowColor || "rgba(110, 7, 243, 0.7)"
        }`,
    },
  };
});

const HeaderModal = styled.div(() => {
  return {
    flex: 1,
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: Theme.Dark.spacing(15),
    padding: Theme.Dark.spacing(1),
  };
});

const Content = styled(Box)(() => {
  return {
    width: "fit-content",
    height: "fit-content",
    padding: Theme.Dark.spacing(2),
    outline: "none",
  };
});

const ModalTitle = styled.span(() => {
  return {
    ...FontFamily.extrabold18,
    color: Theme.Dark.palette.primary.main,
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
