import { useEffect, useRef } from "react";
import styled from "styled-components";
import { Input } from "@mui/material";
import { colors, FontFamily, Spacing } from "config";
import { Controller, RegisterOptions, useFormContext } from "react-hook-form";
import TextComponent from "components/others/TextComponent";

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
  rules?: RegisterOptions;
  placeholder?: string;
  defaultValue?: string;
}

function InputComponent({
  label,
  name,
  type,
  rules,
  defaultValue,
  placeholder,
}: InputProps) {
  const { control } = useFormContext();
  const labelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
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
        rules={rules}
        defaultValue={defaultValue || ""}
        render={({ field, fieldState: { error } }) => {
          const className = getErrorClassName("input-field", true, false);
          return (
            <div className={className}>
              {label && (
                <TextComponent
                  fontSize="0.90rem"
                  textColor={error ? "red" : colors.white}
                  style={{ marginBottom: "4px" }}
                >
                  {label}
                </TextComponent>
              )}
              <StyledIput
                id={name}
                type={type}
                placeholder={placeholder}
                {...field}
              />
              {error && (
                <span className="error-message">Error: {error.message}</span>
              )}
            </div>
          );
        }}
      />
    </>
  );
}

export default InputComponent;
