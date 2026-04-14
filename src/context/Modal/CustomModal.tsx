import React from "react";
import Styles from "./Styles";
import { IconButton, Fade, Grid } from "@mui/material";
import { ButtonComponent, TextComponent } from "components";
import { colors, Fonts } from "config";

interface CustomModalProps {
    closeModal: () => void;
    modalProps: {
        title: string;
        content: React.ReactNode;
        buttonAccept?: {
            text: string;
            onClick: () => void;
        };
        buttonReject?: {
            text: string;
        };
    };
}

function CustomModal({
    closeModal,
    modalProps,
}: CustomModalProps) {
    return (
        <Styles.StyledModal open={true} onClose={closeModal}>
            <Fade in={true}>
                <Styles.ModalContainer>
                    <Styles.Header>
                        <TextComponent
                            fontSize="1.25rem"
                            customTypeFont={Fonts.bold}
                            textColor={colors.white}
                        >
                            {modalProps.title}
                        </TextComponent>
                        <IconButton aria-label="close" onClick={closeModal}>
                            <Styles.closeIconButton />
                        </IconButton>
                    </Styles.Header>
                    <Styles.ModalContent>
                        <TextComponent
                            fontSize="1rem"
                            customTypeFont={Fonts.bold}
                            textColor={colors.white}
                        >
                            {modalProps.content}
                        </TextComponent>
                        <Styles.Footer>
                            {modalProps.buttonAccept && (
                                <Grid item xs={12} sm="auto">
                                    <ButtonComponent disabledUntil={[]} onClick={modalProps.buttonAccept.onClick}>
                                        {modalProps.buttonAccept.text}
                                    </ButtonComponent>
                                </Grid>
                            )}
                            {modalProps.buttonReject && (
                                <Grid item>
                                    <ButtonComponent disabledUntil={[]} onClick={closeModal}>
                                        {modalProps.buttonReject.text}
                                    </ButtonComponent>
                                </Grid>
                            )}
                        </Styles.Footer>
                    </Styles.ModalContent>
                </Styles.ModalContainer>
            </Fade>
        </Styles.StyledModal>
    );
}

export default CustomModal;
