import React from "react";
import { MenuItem, Select } from "@mui/material";
import TextComponent from "components/others/TextComponent";
import { Controller, useFormContext } from "react-hook-form";
import styled from "styled-components";
import { FontFamily } from "config";

const StyledSelect = styled(Select)(({ theme }) => {
    const { palette: colors, spacing } = theme;
    return {
        "&&.MuiInputBase-root": {
            ...FontFamily.medium14,
            width: "auto",
            height: "40px",
            padding: spacing(3, 2, 3, 2),
            borderRadius: theme.spacing(1),
        },
        "& .MuiSelect-icon": {
            color: colors.secondary.contrastText,
        },
        "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "none",
        },

    };
});

const ContainerLabel = styled.div(() => {
    return {
        display: "flex",
        alignContent: "center",
        justifyContent: "flex-start",
    };
});

const Label = styled.p<{ withError?: boolean }>(({ withError, theme }) => {
    const { palette: colors } = theme;
    return {
        ...FontFamily.bold14,
        textTransform: "uppercase",
        padding: 0,
        margin: 0,
        color: withError ? colors.error.main : colors.primary.contrastText,
        transition: ".2s",
        pointerEvents: "none",
        alignItems: "center",
        display: "flex",
        overflow: "hidden",
    };
});

interface InputSelectProps {
    name: string;
    label?: string;
    options: { value: string; label: string }[];
}

function InputSelect({ name, label, options }: InputSelectProps) {
    const { control } = useFormContext();

    function SelectValueHandler(selectedValue: string) {
        return (
            options.find((option) => option.value === selectedValue)?.label ||
            "Selecione uma opção"
        );
    }

    return (
        <>
            <Controller
                name={name}
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <ContainerLabel>{label && <Label>{label}</Label>}</ContainerLabel>
                        <StyledSelect
                            {...field}
                            displayEmpty
                            value={field.value || " "}
                            onChange={(e) => field.onChange(e.target.value)}
                            onBlur={field.onBlur}
                            inputProps={{ "aria-label": label || "input select" }}
                            renderValue={(selected) => SelectValueHandler(selected as string)}
                        >
                            <MenuItem value="">Selecione uma opção</MenuItem>
                            {options.map((item) => (
                                <MenuItem key={item.value} value={item.value}>
                                    {item.label}
                                </MenuItem>
                            ))}
                        </StyledSelect>
                    </ div>
                )}
            />
        </>
    );
}

export default InputSelect;
