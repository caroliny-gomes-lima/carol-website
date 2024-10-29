import { IconButton, CircularProgress } from "@mui/material";
import styled from "styled-components";
import React from "react";

const StyledButton = styled(IconButton)(
  ({ theme }) => {
    return {
      "&&.MuiIconButton-root": {
        width: "fit-content",
        height: "fit-content",
        flexShrink: 1,
        overflow: "hidden",
        border: "solid 3px",
        transition: ".1s",
        borderRadius: theme.spacing(5),
        color: theme.palette.primary.contrastText,
        "&:hover": {
          backgroundColor: theme.palette.action.hover,
          color: theme.palette.secondary.contrastText,
        },
      },
    };
  }
);

const StyledCircularProgress = styled(CircularProgress)(({ theme }) => {
  const { palette: colors } = theme;
  return {
    "&&.MuiCircularProgress-root": {
      color: colors.action.hover,
    },
    transition: ".5s",
  };
});

interface ButtonProps {
  children?: React.ReactNode;
  loading?: boolean;
  name?: string;
  onClick?: (data: any) => void;
  [key: string]: any;
}

function IconButtonComponent({
  loading,
  name,
  children,
  onClick,
  ...props
}: ButtonProps): JSX.Element {

  return (
    <StyledButton
      name={name}
      onClick={onClick}
      disabled={loading}
      {...props}
    >
      {loading ? <StyledCircularProgress size={24} /> : children}
    </StyledButton>
  );
}

export default IconButtonComponent;
