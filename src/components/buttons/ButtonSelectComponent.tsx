import React from "react";
import styled from "styled-components";
import { Button as BaseButton } from "@mui/base";
import { Menu, MenuItem } from "@mui/material";

import { FontFamily, Theme } from "config";

const BaseButtonStyles = styled(BaseButton)<{
  backgroundColor?: string,
  textColor?: string,
}>(
  ({
    theme,
    fullWidth,
    backgroundColor,
    textColor,
  }) => {
    return {
      ...FontFamily.bold14,
      fontSize: "1rem",
      display: "flex",
      width: fullWidth ? "100%" : "fit-content",
      lineHeight: 1.5,
      padding: theme.spacing(1, 2),
      border: "unset",
      boxShadow: "0 2px 1px 1px rgba(45, 45, 60, 0.2)",
      borderRadius: "5px",
      backgroundColor: backgroundColor,
      color: textColor,
      "&:hover": {
        backgroundColor: backgroundColor + "9F",
        color:
          textColor + "9F",
      },
    };
  }
);

const MenuStyles = styled(Menu)<{
  $customBgMenuColor?: string;
  $customMenuLabelColor?: string;
  $customMenuHoverColor?: string;
  $customMenuHoverLabelColor?: string;
}>(
  ({
    theme,
  }) => {
    return {
      "& .MuiPaper-root": {
        backgroundColor: theme.palette.primary.contrastText,
        marginTop: theme.spacing(0.1),
        minWidth: 120,
        borderRadius: 2,
        boxShadow: "0 1px 4px #494949",
        "& .MuiMenuItem-root": {
          ...FontFamily.bold14,
          backgroundColor: theme.palette.primary.contrastText,
          color: theme.palette.primary.main,
          "&:hover": {
            backgroundColor:
              theme.palette.secondary.contrastText,
            color: theme.palette.primary.contrastText,
          },
        },
        "&::before": {
          content: '""',
          display: "block",
          position: "absolute",
          top: theme.spacing(0),
          right: theme.spacing(2),
          width: 10,
          height: 10,
          backgroundColor: theme.palette.secondary.contrastText,
          transform: "translateY(-50%) rotate(45deg)",
          zIndex: 0,
        },
      },
    };
  }
);

interface Props {
  label: string;
  backgroundColor?: string;
  textColor?: string;
  options: Array<{
    action: () => void;
    name: string;
  }>;
  fullWidth?: boolean;
  name: string;
}

function ButtonSelectComponent({
  name,
  label,
  options,
  fullWidth = true,
  backgroundColor,
  textColor,
  ...props
}: Props): JSX.Element {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ margin: "10px" }}>
      <BaseButtonStyles
        id="buttonMenu-select"
        aria-controls={open ? "menu-select" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        fullWidth={fullWidth}
        onClick={handleOpen}
        backgroundColor={backgroundColor}
        textColor={textColor}
        {...props}
      >
        {label}
      </BaseButtonStyles>
      <MenuStyles
        id="menu-select"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ onClick: handleClose }}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
      >
        {options?.map(({ action, name }, index) => (
          <MenuItem
            key={index}
            onClick={() => {
              action();
              setAnchorEl(null);
            }}
          >
            {name}
          </MenuItem>
        ))}
      </MenuStyles>
    </div>
  );
}

export default ButtonSelectComponent;
