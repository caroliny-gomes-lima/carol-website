import { Button, CircularProgress } from "@mui/material";
import styled from "styled-components";
import { Theme, colors } from "config";
import { FontFamily } from "components";
import { useForm, useFormContext } from "react-hook-form";
import React from "react";

const StyledButton = styled(Button)(({ fullWidth }) => {
  return {
    "&&.MuiButton-root": {
      width: fullWidth ? "100%" : "fit-content",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: Theme.Dark.spacing(1, 2),
      flexShrink: 1,
      overflow: "hidden",
      //marginTop: Spacing(0.75),S
      ...FontFamily.bold14,
      textTransform: "capitalize",
      backgroundColor: colors.black,
      borderRadius: 7,
      "&:hover": {
        backgroundColor: Theme.Dark.palette.action.hover,
        color: Theme.Dark.palette.secondary.contrastText,
      },
      // '&:active': {
      //   backgroundColor: "red",
      //   color: "blue",
      // }
    },
    "&&.MuiButton-startIcon": {
      fill: Theme.Dark.palette.primary.contrastText,
      width: 17,
    },
    "&&.Mui-disabled": {
      backgroundColor: Theme.Dark.palette.action.disabledBackground,
      //opacity: 0.6,
    },
  };
});

const StyledCircularProgress = styled(CircularProgress)(() => {
  return {
    "&&.MuiCircularProgress-root": {
      color: Theme.Dark.palette.secondary.contrastText + 60,
    },
    transition: ".5s",
  };
});

const ChildrenContainer = styled.div<{ $show: boolean }>(({ $show }) => {
  return {
    transition: ".5s",
    opacity: $show ? 1 : 0.5,
  };
});

interface ButtonProps {
  fullWidth?: boolean;
  label?: string;
  children?: React.ReactNode;
  loading: boolean;
  name: string;
  //feedback: boolean;
  //action: "submit" | "clear" | "clearDefault";
  onClick?: (data: any) => void;
  type?: "button" | "reset" | "submit";
  [key: string]: any;
}

function ButtonContained({
  fullWidth = true,
  label,
  children,
  loading,
  name,
  //feedback,
  //action,
  type,
  onClick,
  ...props
}: ButtonProps): JSX.Element {
  const { formState } = useForm<ButtonProps>();
  const [clicked, setClicked] = React.useState<boolean>(false);

  //TENTAR FAZER O TESTE MAIS TARDE PARA USAR COMO FEEDBACK DE ERRO 
  //(COM INPUT PAR INTEGRAÇÃO)
  // const handleClick = async () => {
  //   if (onClick) {
  //     try {
  //       onClick(); 
  //     } catch (error) {
  //       console.error('Error occurred:', error);
  //     } 
  //   }
  // };

  return (
    <StyledButton
    name={name}
      variant="contained"
      type={type}
      fullWidth={fullWidth}
      onClick={onClick}
      disabled={loading || formState.isSubmitting}
      {...props}
    >
      {loading ? (
        <StyledCircularProgress size={24} />
      ) : (
        <ChildrenContainer $show={!loading}>
          {label ? label : children}
        </ChildrenContainer>
      )}
    </StyledButton>
  );
}

export default ButtonContained;
