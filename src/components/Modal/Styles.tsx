import { Box, IconButton, Modal, Paper } from "@mui/material";
import { colors, FontFamily, Theme } from "config";
import styled from "styled-components";

const customModal = styled(Modal)(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: spacing(10),
  };
});

const Container = styled(Paper)<{
  customBgColor?: string;
  customShadowColor?: string;
}>(({ theme, customBgColor, customShadowColor }) => {
  const { spacing } = theme;
  return {
    "&&.MuiPaper-root": {
      backgroundColor: customBgColor || colors.purple,
      width: "fit-content",
      height: "fit-content",
      margin: spacing(2),
      padding: spacing(1),
      boxShadow: `0px 4px 20px ${customShadowColor || "rgba(110, 7, 243, 0.7)"
        }`,
    },
  };
});

const HeaderModal = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    flex: 1,
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: spacing(15),
    padding: spacing(1),
  };
});

const Content = styled(Box)(({ theme }) => {
  const { spacing } = theme;
  return {
    width: "fit-content",
    height: "fit-content",
    padding: spacing(2),
    outline: "none",
  };
});

const ModalTitle = styled.span(({ theme }) => {
  const { palette: colors } = theme;
  return {
    ...FontFamily.extrabold18,
    color: colors.primary.main,
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
