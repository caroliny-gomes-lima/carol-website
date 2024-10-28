import { useEffect, useRef } from "react";
import styled from "styled-components";
import { Input } from "@mui/material";
import { FontFamily, Spacing } from "config";
import { Controller, RegisterOptions, useFormContext } from "react-hook-form";

const StyledIput = styled(Input)(({ theme }) => {
  return {
    "&&.MuiInput-root": {
      ...FontFamily.medium14,
      padding: theme.spacing(1.962, 2.5),
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.contrastText,
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
    },
  };
});

const Label = styled.p<{ withError?: boolean }>(({ withError, theme }) => {
  return {
    ...FontFamily.bold12,
    textTransform: "uppercase",
    padding: 0,
    margin: 0,
    color: withError ? theme.palette.error.main : theme.palette.primary.contrastText,
    transition: ".2s",
    pointerEvents: "none",
    alignItems: "center",
    display: "flex",
    overflow: "hidden",
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

function InputComponent({ label, name, type, rules, defaultValue, placeholder }: InputProps) {
  const { control } = useFormContext();
  const labelRef = useRef<HTMLDivElement | null>(null);

  /*Resumo: Este código utiliza useEffect para ajustar dinamicamente o 
padding-left de um fieldset dentro de um elemento referenciado sempre que 
a prop label mudar.*/
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
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignContent: "center",
                  }}
                >
                  <Label
                    className={"form-input-label-" + label?.replace(/\s/g, "")}
                  >
                    {label}
                  </Label>
                </div>
              )}
              <StyledIput
                id={name}
                type={type}
                placeholder={placeholder}
                {...field}
              />
              {error && <span className="error-message">Error: {error.message}</span>}
            </div>
          );
        }}
      />
    </>
  );
}

export default InputComponent;
