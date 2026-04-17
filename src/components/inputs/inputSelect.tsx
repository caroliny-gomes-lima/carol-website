import React from "react";
import { FormHelperText, MenuItem, Select } from "@mui/material";
import TextComponent from "components/others/TextComponent";
import { Controller, useFormContext } from "react-hook-form";
import styled from "styled-components";
import { colors, FontFamily, Texts } from "config";
import { ErrorMessage } from "@hookform/error-message";

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
interface InputSelectProps {
    name: string;
    label?: string;
    options: { value: string; label: string }[];
    required?: boolean;
}

function InputSelect({ name, label, options, required }: InputSelectProps) {
    const {
        control,
        formState: { errors },
    } = useFormContext();

    function SelectValueHandler(selectedValue: string) {
        const option = options.find((option) => option.value === selectedValue);
        return option?.label || "Selecione uma opção";
    }

    return (
        <>
            <Controller
                name={name}
                control={control}
                rules={{ required: required && Texts.ptBr.requiredField }}
                defaultValue=""
                render={({ field }) => (
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        {label && (
                            <TextComponent
                                fontSize="0.90rem"
                                textColor={errors[name] ? "red" : colors.white}
                            >
                                {label + (required ? " *" : "")}
                            </TextComponent>
                        )}
                        <StyledSelect
                            {...field}
                            displayEmpty
                            value={field.value ?? ""}
                            onChange={(e) => field.onChange(e.target.value)}
                            onBlur={field.onBlur}
                            inputProps={{ "aria-label": label || "input select" }}
                            MenuProps={{
                                PaperProps: {
                                    style: {
                                        maxHeight: 300,
                                        overflowY: "auto",
                                    },
                                },
                            }}
                            renderValue={(selected) => {
                                if (!selected) return "Selecione uma opção";
                                return SelectValueHandler(selected as string);
                            }}
                        >
                            <MenuItem value="">Selecione uma opção</MenuItem>

                            {options.map((item) => (
                                <MenuItem key={item.value} value={item.value}>
                                    {item.label}
                                </MenuItem>
                            ))}
                        </StyledSelect>
                        {errors && (
                            <ErrorMessage
                                errors={errors}
                                name={name}
                                render={({ message }) => (
                                    <FormHelperText error>
                                        <TextComponent fontSize="0.75rem" textColor={colors.red}>
                                            {message}
                                        </TextComponent>
                                    </FormHelperText>
                                )}
                            />
                        )}
                    </div>
                )}
            />
        </>
    );
}

export default InputSelect;
