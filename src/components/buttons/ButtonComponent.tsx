import { Button, CircularProgress } from "@mui/material";
import styled from "styled-components";
import { FontFamily } from "config";
import { useForm } from "react-hook-form";
import React from "react";

const StyledButton = styled(Button)<{ backgroundColor?: string, textColor?: string; }>(
  ({
    theme,
    fullWidth,
    backgroundColor,
    textColor,
  }) => {
    return {
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
        backgroundColor: backgroundColor,
        color: textColor,
        borderRadius: theme.spacing(1),
        "&:hover": {
          backgroundColor:
            backgroundColor + "9F",
          color: textColor + "9F",
        },
      },
      "&&.MuiButton-startIcon": {
        width: 17,
      },
      "&&.Mui-disabled": {
        backgroundColor: backgroundColor + "9F",
      },
    };
  }
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
  name?: string;
  onClick?: (data: any) => void;
  type?: "button" | "reset" | "submit";
  [key: string]: any;
}

function ButtonComponent({
  fullWidth = true,
  backgroundColor,
  textColor,
  label,
  children,
  loading,
  name,
  type,
  onClick,
  ...props
}: ButtonProps): JSX.Element {
  const { formState } = useForm<ButtonProps>();

  return (
    <StyledButton
      name={name}
      variant="contained"
      type={type}
      fullWidth={fullWidth}
      backgroundColor={backgroundColor}
      textColor={textColor}
      onClick={onClick}
      disabled={loading || formState.isSubmitting}
      {...props}
    >
      {loading ? (
        <StyledCircularProgress size={24} />
      ) : (
        <>{label ? label : children}</>
      )}
    </StyledButton>
  );
}

export default ButtonComponent;
