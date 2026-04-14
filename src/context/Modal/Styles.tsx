import { Close } from "@mui/icons-material";
import { Backdrop, Modal, Paper } from "@mui/material";
import styled from "styled-components";

const StyledBackdrop = styled(Backdrop)({
    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(5px)",
    backgroundColor: "#00000020",
    zIndex: 1300,
})

export const StyledModal = styled(Modal)({
    outlineWidth: 0,
    borderWidth: 0,
    overflow: "hidden",
    ":focus": {
        outline: "none",
    },
});

const ModalContainer = styled(Paper)(({ theme }) => {
    const { palette: colors, spacing } = theme;
    return {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: spacing(2, 4, 3),
        "&&.MuiPaper-root": {
            backgroundColor: colors.secondary.contrastText,
        },
    }

})

const ModalContent = styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
})

const Header = styled.div(({ theme }) => {
    const { spacing } = theme;
    return {

        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: spacing(3),
    }
})

const closeIconButton = styled(Close)(({ theme }) => {
    const { palette: colors, spacing } = theme;
    return {
        color: colors.primary.contrastText,
        width: spacing(3),
        height: spacing(3),
    }
})

const Footer = styled.div(({ theme }) => {
    const { spacing } = theme;
    return {
        display: "flex",
        justifyContent: "flex-end",
        gap: spacing(2),
    }
})

const Styles = {
    StyledBackdrop,
    StyledModal,
    ModalContainer,
    Header,
    Footer,
    ModalContent,
    closeIconButton
}

export default Styles;