import { Box } from "@mui/material";
import styled from "styled-components";
import CardFrame from "../../../assets/Images/cardFrame-1.png";
import { colors as customColor } from "config";

const Container = styled.div<{ backgroundColor?: boolean }>(
  ({ theme, backgroundColor }) => {
    return {
      width: "100%",
      height: "fit-content",
      padding: theme.spacing(3),
      marginBottom: theme.spacing(5),
      borderRadius: theme.spacing(1),
      backgroundColor: backgroundColor
        ? theme.palette.secondary.main + "9F"
        : "transparent",
    };
  }
);

const Content = styled.div(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(3),
  };
});

const FormularyBox = styled(Box)(({ theme }) => {
  const { palette: colors, spacing } = theme
  return {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: spacing(3),
    backgroundColor: colors.primary.main,
    borderRadius: theme.spacing(1),
  }
});

const ChartBox = styled.div(({ theme }) => {
  const { palette: colors } = theme
  return {
    display: "flex",
    width: "100%",
    height: "75vh",
    borderRadius: "10px",
    border: "solid 2px",
    borderColor: colors.purple,
    backgroundColor: `${colors.blackCarbon}60`,
  };
});

const ImageBox = styled.div(({ theme }) => {
  const { palette: colors } = theme
  return {
    display: "flex",
    width: "fit-content",
    height: "fit-content",
    borderRadius: "10px",
    border: `2px solid ${colors.info.main}`,
    backgroundColor: `${colors.blackCarbon}60`,
    marginTop: theme.spacing(4),
  };
});

const ImageStyle = styled.img(({ theme }) => {
  const { spacing } = theme
  return {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: spacing(1),
  };
});

//ESTILO DO CONTEUDO DO MODAL COSTUMIZADO
const ModalCardFrame = styled.div(() => {
  return {
    width: "800px",
    height: "900px",
    backgroundImage: `url(${CardFrame})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    position: "relative",

  }
});

const ModalContainer = styled.div(({ theme }) => {
  const { spacing } = theme
  return {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: spacing(4),
  };
});


const ModalCardContent = styled.div(({ theme }) => {
  const { spacing } = theme
  return {
    position: "absolute",
    top: "16%",
    left: "50%",
    transform: "translateX(-50%)",
    width: "70%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: spacing(2),
  };
});

const ModalCharacterImage = styled.img(({ theme }) => {
  const { spacing } = theme
  return {
    width: "300px",
    height: "260px",
    objectFit: "cover",
    borderRadius: spacing(1),
    border: `3px solid ${customColor.gold}`,
  };
});


const CharacterDescription = styled.div(({ theme }) => {

  return {
    width: "inherit",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(2),
    gap: theme.spacing(1),
  };
});
const CharacterDescriptionBox = styled.div(({ theme }) => {
  const { spacing, palette: colors } = theme
  return {
    width: "100%",
    height: "230px",
    display: "flex",
    padding: spacing(2),
    backgroundColor: colors.primary.contrastText,
    gap: spacing(2),
    overflowY: "auto",
    borderRadius: spacing(1),
    border: `3px solid ${customColor.gold}`,
  };
});

const Styles = {
  Container,
  Content,
  FormularyBox,
  ChartBox,
  ImageBox,
  ImageStyle,
  ModalContainer,
  ModalCardFrame,
  ModalCardContent,
  ModalCharacterImage,
  CharacterDescription,
  CharacterDescriptionBox
};

export default Styles;
