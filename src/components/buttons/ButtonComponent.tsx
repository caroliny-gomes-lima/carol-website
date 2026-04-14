import { Button, CircularProgress } from "@mui/material";
import styled from "styled-components";
import { FontFamily } from "config";
import { useFormContext } from "react-hook-form";
import React from "react";
import { useFormButton, useHandleClick } from "./useFormButton";

const StyledButton = styled(Button).withConfig({
  shouldForwardProp: (prop) => !["backgroundColor", "textColor"].includes(prop),
})<{
  $backgroundColor?: string;
  $textColor?: string;
  $loadingButton?: boolean;
  $disabledButton: boolean;
}>(
  ({
    theme,
    fullWidth,
    $backgroundColor,
    $textColor,
    $loadingButton,
    $disabledButton,
  }) => ({
    "&&.MuiButton-root": {
      width: fullWidth ? "100%" : "fit-content",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: theme.spacing(1, 2),
      flexShrink: 1,
      overflow: "hidden",
      marginTop: theme.spacing(0.75),
      ...FontFamily.bold14,
      textTransform: "capitalize",
      backgroundColor: $backgroundColor
        ? $backgroundColor
        : $disabledButton
          ? $disabledButton
          : theme.palette.primary.main,
      color: $textColor,
      borderRadius: theme.spacing(1),
      "&:hover": {
        backgroundColor: $backgroundColor
          ? $backgroundColor + "9F"
          : theme.palette.action.hover,
        color: $textColor
          ? $textColor + "9F"
          : theme.palette.secondary.contrastText,
      },
    },
    "&&.MuiButton-startIcon": {
      display: $loadingButton ? "none" : "flex",
      color: theme.palette.text.secondary,
      width: 20,
    },
    "&&.MuiButton-endIcon": {
      width: "100%",
    },
    "&&.Mui-disabled": {
      backgroundColor: $backgroundColor
        ? $backgroundColor + "9F"
        : theme.palette.action.disabled,
    },
  }),
);

const StyledCircularProgress = styled(CircularProgress)(({ theme }) => {
  const { palette: colors } = theme;
  return {
    "&&.MuiCircularProgress-root": {
      color: colors.primary.main + 60,
    },
    transition: ".5s",
  };
});

interface ButtonProps {
  fullWidth?: boolean;
  backgroundColor?: string;
  textColor?: string;
  label?: string;
  children?: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  onClick?: (data: any) => void;
  type?: "submit" | "button" | "reset";
  [key: string]: any;
  disabledUntil?: Array<string>;
}

function ButtonComponent({
  fullWidth = true,
  backgroundColor,
  textColor,
  label,
  children,
  loading,
  disabled,
  type,
  onClick,
  disabledUntil,
  ...props
}: ButtonProps): JSX.Element {
  const formContext = useFormContext();
  const watchRequiredFields =
    formContext && disabledUntil?.length
      ? disabledUntil.some((name) => !formContext.watch(name))
      : false;
  const { formState } = formContext || {};
  const { loading: loadingButton, disabled: disabledButton } = useFormButton(
    Boolean(loading),
    Boolean(disabled),
    watchRequiredFields,
  );

  const handleClick = useHandleClick(
    type || "button",
    onClick,
    formContext?.reset,
  );

  return (
    <StyledButton
      variant="contained"
      type={type}
      fullWidth={fullWidth}
      $backgroundColor={backgroundColor}
      $textColor={textColor}
      onClick={handleClick}
      $loadingButton={loadingButton}
      $disabledButton={disabledButton || loadingButton || watchRequiredFields}
      disabled={disabledButton || loadingButton || watchRequiredFields}
      {...props}
    >
      {loadingButton ? (
        <StyledCircularProgress size={24} />
      ) : (
        <>{label ? label : children}</>
      )}
    </StyledButton>
  );
}

export default ButtonComponent;
