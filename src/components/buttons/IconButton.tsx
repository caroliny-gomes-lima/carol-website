import { IconButton, CircularProgress } from "@mui/material";
import styled from "styled-components";
import { Theme, colors } from "config";
import React from "react";

const StyledButton = styled(IconButton)<{ $customColor: string }>(
  ({ $customColor }) => {
    return {
      "&&.MuiIconButton-root": {
        width: "fit-content",
        flexShrink: 1,
        overflow: "hidden",
        border: "solid 3px",
        borderRadius: Theme.Dark.spacing(5),
        color: $customColor,
        "&:hover": {
          backgroundColor: Theme.Dark.palette.action.hover,
          color: colors.purple,
        },
      },
    };
  }
);

const StyledCircularProgress = styled(CircularProgress)(() => {
  return {
    "&&.MuiCircularProgress-root": {
      color: Theme.Dark.palette.action.hover,
    },
    transition: ".5s",
  };
});

interface ButtonProps {
  children?: React.ReactNode;
  loading?: boolean;
  name?: string;
  customColor: string;
  onClick?: (data: any) => void;
  [key: string]: any;
}

function IconButtonComponent({
  loading,
  name,
  children,
  customColor,
  onClick,
  ...props
}: ButtonProps): JSX.Element {

  return (
    <StyledButton
      $customColor={customColor}
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
