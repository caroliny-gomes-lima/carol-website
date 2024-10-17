import React from "react";
import styled from "styled-components";
import { Button as BaseButton } from "@mui/base";
import { Menu, MenuItem } from "@mui/material";

import { FontFamily, Theme } from "config";

const BaseButtonStyles = styled(BaseButton)<{
  $customButtonColor?: string;
  $customButtonLabelColor?: string;
  $customButtonHoverColor?: string;
  $customButtonHoverLabelColor?: string;
}>(
  ({
    fullWidth,
    $customButtonColor,
    $customButtonLabelColor,
    $customButtonHoverColor,
    $customButtonHoverLabelColor,
  }) => {
    return {
      ...FontFamily.bold14,
      fontSize: "1rem",
      display: "flex",
      width: fullWidth ? "100%" : "fit-content",
      lineHeight: 1.5,
      padding: Theme.Dark.spacing(1, 2),
      border: "unset",
      boxShadow: "0 2px 1px 1px rgba(45, 45, 60, 0.2)",
      borderRadius: "5px",
      backgroundColor: $customButtonColor || Theme.Dark.palette.primary.main,
      color: $customButtonLabelColor || Theme.Dark.palette.primary.contrastText,
      "&:hover": {
        backgroundColor:
          $customButtonHoverColor ||
          `${Theme.Dark.palette.primary.main}70`,
        color:
          $customButtonHoverLabelColor ||
          Theme.Dark.palette.primary.contrastText,
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
    $customBgMenuColor,
    $customMenuLabelColor,
    $customMenuHoverColor,
    $customMenuHoverLabelColor,
  }) => {
    return {
      "& .MuiPaper-root": {
        backgroundColor:
          $customBgMenuColor || Theme.Dark.palette.primary.contrastText,
        marginTop: Theme.Dark.spacing(0.1),
        minWidth: 120,
        borderRadius: 2,
        boxShadow: "0 1px 4px #494949",
        "& .MuiMenuItem-root": {
          ...FontFamily.bold14,
          backgroundColor:
            $customBgMenuColor || Theme.Dark.palette.primary.contrastText,
          color: $customMenuLabelColor || Theme.Dark.palette.primary.main,
          "&:hover": {
            backgroundColor:
              $customMenuHoverColor || Theme.Dark.palette.primary.main,
            color: $customMenuHoverLabelColor || Theme.Dark.palette.primary.contrastText,
          },
        },
        "&::before": {
          content: '""',
          display: "block",
          position: "absolute",
          top: Theme.Dark.spacing(0),
          right: Theme.Dark.spacing(2),
          width: 10,
          height: 10,
          backgroundColor: "black",
          transform: "translateY(-50%) rotate(45deg)",
          zIndex: 0,
        },
      },
    };
  }
);

interface Props {
  label: string;
  customButtonColor?: string;
  customButtonLabelColor?: string;
  customButtonHoverColor?: string;
  customButtonHoverLabelColor?: string;
  customBgMenuColor?: string;
  customMenuLabelColor?: string;
  customMenuHoverColor?: string;
  customMenuHoverLabelColor?: string;
  options: Array<{
    action: () => void;
    name: string;
  }>;
  fullWidth?: boolean;
  name: string;
}

function SelectionDropDown({
  name,
  label,
  options,
  fullWidth = true,
  customButtonColor,
  customButtonLabelColor,
  customButtonHoverColor,
  customButtonHoverLabelColor,
  customBgMenuColor,
  customMenuLabelColor,
  customMenuHoverColor,
  customMenuHoverLabelColor,
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
        $customButtonColor={customButtonColor}
        $customButtonLabelColor={customButtonLabelColor}
        $customButtonHoverColor={customButtonHoverColor}
        $customButtonHoverLabelColor={customButtonHoverLabelColor}
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
        $customBgMenuColor={customBgMenuColor}
        $customMenuLabelColor={customMenuLabelColor}
        $customMenuHoverColor={customMenuHoverColor}
        $customMenuHoverLabelColor={customMenuHoverLabelColor}
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

export default SelectionDropDown;
