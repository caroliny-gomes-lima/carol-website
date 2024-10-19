import { Button, CircularProgress } from "@mui/material";
import styled from "styled-components";
import { FontFamily, Theme } from "config";

import { useForm } from "react-hook-form";
import React from "react";

const StyledButton = styled(Button)<{
  $customButtonColor?: string;
  $customButtonLabelColor?: string;
  $customButtonHoverColor?: string;
  $customButtonHoverLabelColor?: string;
}>(
  ({
    theme,
    fullWidth,
    $customButtonColor,
    $customButtonLabelColor,
    $customButtonHoverColor,
    $customButtonHoverLabelColor,
  }) => {
    const { palette: colors, spacing } = theme;
    return {
      "&&.MuiButton-root": {
        width: fullWidth ? "100%" : "fit-content",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: spacing(1, 2),
        flexShrink: 1,
        overflow: "hidden",
        //marginTop: Spacing(0.75),S
        ...FontFamily.bold14,
        textTransform: "capitalize",
        backgroundColor: $customButtonColor || colors.primary.main,
        color:
          $customButtonLabelColor || colors.primary.contrastText,
        borderRadius: spacing(1),
        "&:hover": {
          backgroundColor:
            $customButtonHoverColor ||
            `${colors.primary.main}70`,
          color:
            $customButtonHoverLabelColor ||
            colors.primary.contrastText,
        },
        // '&:active': {
        //   backgroundColor: "red",
        //   color: "blue",
        // }
      },
      "&&.MuiButton-startIcon": {
        fill: colors.primary.contrastText,
        width: 17,
      },
      "&&.Mui-disabled": {
        backgroundColor: colors.action.disabledBackground,
        //opacity: 0.6,
      },
    };
  }
);

const StyledCircularProgress = styled(CircularProgress)(({ theme }) => {
  const { palette: colors } = theme;
  return {
    "&&.MuiCircularProgress-root": {
      color: colors.secondary.contrastText + 60,
    },
    transition: ".5s",
  };
});

// const ChildrenContainer = styled.div<{ $show: boolean }>(({ $show }) => {
//   return {
//     transition: ".1s",
//     opacity: $show ? 1 : 0.5,
//   };
// });

interface ButtonProps {
  fullWidth?: boolean;
  customButtonColor?: string;
  customButtonLabelColor?: string;
  customButtonHoverColor?: string;
  customButtonHoverLabelColor?: string;
  label?: string;
  children?: React.ReactNode;
  loading: boolean;
  name?: string;
  //feedback: boolean;
  //action: "submit" | "clear" | "clearDefault";
  onClick?: (data: any) => void;
  type?: "button" | "reset" | "submit";
  [key: string]: any;
}

function ButtonComponent({
  fullWidth = true,
  customButtonColor,
  customButtonLabelColor,
  customButtonHoverColor,
  customButtonHoverLabelColor,
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
  //const [clicked, setClicked] = React.useState<boolean>(false);

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
      $customButtonColor={customButtonColor}
      $customButtonLabelColor={customButtonLabelColor}
      $customButtonHoverColor={customButtonHoverColor}
      $customButtonHoverLabelColor={customButtonHoverLabelColor}
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
