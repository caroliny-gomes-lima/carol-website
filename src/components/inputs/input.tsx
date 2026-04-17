import React from "react";
import styled from "styled-components";
import { FormHelperText, Input } from "@mui/material";
import { colors, FontFamily, Spacing, Texts } from "config";
import { Controller, useFormContext } from "react-hook-form";
import TextComponent from "components/others/TextComponent";
import { ErrorMessage } from "@hookform/error-message";

const StyledIput = styled(Input)(({ theme }) => {
  const { palette: colors, spacing } = theme;
  return {
    "&&.MuiInput-root": {
      ...FontFamily.medium14,
      width: "100%",
      height: "40px",
      padding: spacing(3, 2, 3, 2),
      color: colors.primary.main,
      backgroundColor: colors.primary.contrastText,
      borderRadius: theme.spacing(1),
      "&:before, &:after": {
        borderBottom: "none !important",
      },
      "&:hover:not(.Mui-disabled):before": {
        borderBottom: "none",
      },
      "& .MuiInputBase-input": {
        padding: 0,
      },
      "& .MuiInputBase-input::placeholder": {
        color: colors.text.disabled,
        opacity: 0.5,
      },
    },
  };
});

function getErrorClassName(base: string, error: boolean, valid: boolean) {
  const className = base;
  if (error) return `${className} invalid`;
  if (valid) return `${className} valid`;
  return className;
}

interface InputProps {
  id?: string;
  label?: string;
  name: string;
  type?: string;
  placeholder?: string;
  defaultValue?: string;
  required?: boolean;
  validation?: string;
}

function InputComponent({
  label,
  name,
  type,
  required,
  defaultValue,
  placeholder,
}: InputProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const labelRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (label && labelRef.current) {
      const fieldset = labelRef.current.querySelector("fieldset");
      if (fieldset) {
        fieldset.style.paddingLeft = Spacing(3) + "px";
      }
    }
  }, [label]);

  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={{ required: required && Texts.ptBr.requiredField }}
        defaultValue={defaultValue || ""}
        render={({ field }) => {
          const className = getErrorClassName("input-field", true, false);
          return (
            <div className={className}>
              {label && (
                <TextComponent
                  fontSize="0.90rem"
                  textColor={errors[name] ? "red" : colors.white}
                >
                  {label + (required ? " *" : "")}
                </TextComponent>
              )}
              <StyledIput
                id={name}
                type={type}
                placeholder={placeholder}
                {...field}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^[A-Za-zÀ-ÿ\s]*$/.test(value)) {
                    field.onChange(e);
                  }
                }}
              />
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
          );
        }}
      />
    </>
  );
}

export default InputComponent;


//REFATORAR