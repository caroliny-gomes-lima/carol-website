import React from "react";
import styled from "styled-components";
import TextComponent from "components/others/TextComponent";
import { colors, Texts } from "config";
import { Upload } from "@mui/icons-material";
import { IconButton, Input } from "@mui/material";
import { useFormContext } from "react-hook-form";

const ContainerLabel = styled.div(() => {
    return {
        display: "flex",
        alignContent: "center",
        justifyContent: "flex-start",
    };
});

const ContainerInput = styled.div(({ theme }) => {
    return {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        textOverflow: "ellipsis",
        padding: theme.spacing(0.5, 2.5),
        borderRadius: theme.spacing(1),
        backgroundColor: theme.palette.primary.contrastText,
    };
});
export interface Props {
    id?: string;
    label?: string;
    disableError?: boolean;
    hideVisualError?: boolean;
    placeholder?: string;
    state?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeShowImage?: (fileData: SelectedFileType) => void;
}

export interface SelectedFileType {
    url: string | ArrayBuffer | null;
    file: File | null;
    fileName: string;
}

export interface FileUrlType {
    file: File | string;
    fileError: string;
}

function ImageUpload({ label, onChangeShowImage }: Props) {
    const texts = Texts["ptBr"].file;
    const [fileUrl, setFileUrl] = React.useState<FileUrlType>({
        file: "",
        fileError: "",
    });
    const [selectedFile, setSelectedFile] = React.useState<SelectedFileType>({
        url: null,
        file: null,
        fileName: "Selecione uma imagem",
    });
    const { setValue } = useFormContext();

    const fileInputRef = React.useRef<HTMLInputElement | null>(null);
    const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
    const FILE_TYPES = ["image/jpeg", "image/png"];
    const EMPTY_FILE: SelectedFileType = {
        url: null,
        file: null,
        fileName: "Selecione uma imagem",
    };

    function handleError(file: File, message: string) {
        setFileUrl({ file, fileError: message });
        setSelectedFile(EMPTY_FILE);
        onChangeShowImage?.(EMPTY_FILE);
    }

    function validateFile(file: File) {
        if (!FILE_TYPES.includes(file.type)) {
            return texts.invalidType;
        }
        if (file.size > MAX_FILE_SIZE) {
            return texts.tooLarge;
        }
        return null;
    }

    function HandleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0];
        if (!file) return;

        const errorMessage = validateFile(file);
        if (errorMessage) {
            handleError(file, errorMessage);
            return;
        }

        const previewUrl = URL.createObjectURL(file);
        const newSelectedFile = {
            url: previewUrl,
            file,
            fileName: file.name,
        };
        setSelectedFile(newSelectedFile);
        onChangeShowImage?.(newSelectedFile);
        setFileUrl({ file, fileError: "" });

        const reader = new FileReader();
        reader.onloadend = () => {
            if (typeof reader.result === "string") {
                setValue("fileBase64", reader.result.split(",")[1]);
            }
        };
        reader.readAsDataURL(file);
    }

    React.useEffect(() => {
        return () => {
            if (selectedFile.url && typeof selectedFile.url === "string") {
                URL.revokeObjectURL(selectedFile.url);
            }
        };
    }, [selectedFile.url]);

    return (
        <>
            <ContainerLabel>
                <TextComponent
                    fontSize="0.90rem"
                    textColor={colors.white}
                    style={{ marginBottom: "4px" }}
                >
                    {label}
                </TextComponent>
            </ContainerLabel>
            <ContainerInput>
                <TextComponent fontSize="0.90rem" textColor={colors.gray}>
                    {selectedFile.fileName}
                </TextComponent>

                <Input
                    id="image-upload"
                    name="file"
                    type="file"
                    inputRef={fileInputRef}
                    onChange={HandleFileChange}
                    style={{ display: "none" }}
                />
                <IconButton onClick={() => fileInputRef.current?.click()}>
                    <Upload style={{ color: colors.purple }} />
                </IconButton>
            </ContainerInput>
            <TextComponent fontSize="0.75rem" textColor={colors.red}>
                {fileUrl.fileError}
            </TextComponent>
        </>
    );
}

export default ImageUpload;
