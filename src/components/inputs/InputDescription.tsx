import React from "react";
import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import TextComponent from "components/others/TextComponent";
import { colors } from "config";

const StyledTextField = styled(TextField)(({ theme }) => {
    const { palette: colors, spacing } = theme;
    return {
        backgroundColor: colors.primary.contrastText,
        borderRadius: theme.spacing(1),
        "& .MuiInputBase-input": {
            padding: spacing(0),
            backgroundColor: "unset",
            border: "none",
        },
        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "none",
        },
        "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "none",
        },
    };
});

interface InputProps {
    id?: string;
    label?: string;

    //   rules?: RegisterOptions;
    defaultValue?: string;
}

function InputDescription({ id, label, }: InputProps) {
    const { register, watch } = useFormContext();

    const description = watch("description") || "";

    return (
        <>
            <TextComponent
                fontSize="0.90rem"
                textColor={colors.white}
                style={{ marginBottom: "4px" }}
            >{label}</TextComponent>
            <StyledTextField
                id={id}
                multiline
                rows={4}
                variant="outlined"
                fullWidth
                {...register("description")}
                inputProps={{
                    maxLength: 600,
                }}
                helperText={
                    <TextComponent>{`${description.length}/600 caracteres`}</TextComponent>
                }
            />
        </>
    );
}

export default InputDescription;
