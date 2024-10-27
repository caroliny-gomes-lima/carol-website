import React from "react";
import styled from "styled-components";
import TextComponent from "components/others/TextComponent";
import { colors, FontFamily } from "config";
import { Upload } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const ContainerLabel = styled.div(() => {
    return {
        display: "flex",
        alignContent: "center",
        justifyContent: "flex-start",
    };
});

const Label = styled.p(({ theme }) => {
    return {
        ...FontFamily.medium14,
        padding: 0,
        margin: 0,
        color: theme.palette.primary.contrastText,
        transition: ".2s",
        pointerEvents: "none",
        alignItems: "center",
        display: "flex",
        overflow: "hidden",
    };
});

const ContainerInput = styled.div(({
    theme,
}) => {
    return {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        textOverflow: "ellipsis",
        padding: theme.spacing(1.962, 2.5),
        borderRadius: theme.spacing(1),
        backgroundColor: theme.palette.primary.contrastText,
    };
})

const StyledIconButton = styled(IconButton)(({
    theme,
}) => {
    const { palette: colors } = theme;
    return {
        padding: '0 !important',
        color: `${colors.primary.main} !important`
    };
})

export interface Props {
    id?: string;
    label?: string;
    disableError?: boolean;
    hideVisualError?: boolean;
    placeholder?: string;
    state?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function ImageUpload({
    label,
    placeholder,
    onChange,
}: Props) {
    const fileInputRef = React.useRef<HTMLInputElement | null>(null);
    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <>
            <ContainerLabel>
                <Label
                >
                    {label}
                </Label>
            </ContainerLabel>
            <ContainerInput>
                <TextComponent>
                    {placeholder}
                </TextComponent>
                <input
                    accept="image/*"
                    style={{ display: "none" }}
                    id="image-upload"
                    type="file"
                    ref={fileInputRef}
                    onChange={onChange}
                />
                <StyledIconButton onClick={handleButtonClick}>
                    <Upload style={{ color: colors.purple }} />
                </StyledIconButton>
            </ContainerInput>
        </>
    );
}

export default ImageUpload;