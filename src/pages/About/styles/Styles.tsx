import { ListItem, ListItemIcon } from "@mui/material";
import { FontFamily } from "components";
import { Theme } from "config";
import styled from "styled-components";

const Container = styled.div(() => {
  return {
    width: "100%",
    height: "fit-content",
    margin: Theme.Dark.spacing(2),
    padding: Theme.Dark.spacing(1),
  };
});

const Content = styled.div(() => {
  return {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: Theme.Dark.spacing(5),
  };
});

const TitleStyles = styled.h1(() => {
  return {
    ...FontFamily.extrabold16,
    fontSize: "2rem",
  };
});

const TextStyles = styled.span<{ $DefaultColor?: string }>(
  ({ $DefaultColor }) => {
    return {
      ...FontFamily.bold16,
      textAlign: $DefaultColor ? "left" : "center",
      color: $DefaultColor,
    };
  }
);

const Box = styled.div(() => {
  return {
    ...FontFamily.medium16,
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    padding: Theme.Dark.spacing(1),
    border: "solid 2px red",
    borderRadius: Theme.Dark.spacing(1),
    gap: 12,
  };
});

const BoxActivities = styled.div<{ $DefaultColor: string }>(
  ({ $DefaultColor }) => {
    return {
      alignItems: "center",
      width: "auto",
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      padding: Theme.Dark.spacing(0, 2),
      border: "solid 2px",
      borderColor: $DefaultColor,
      borderRadius: Theme.Dark.spacing(1),
      gap: 12,
    };
  }
);

const BoxActivitiesHeader = styled.div<{ $DefaultColor: string }>(
  ({ $DefaultColor }) => {
    return {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      padding: Theme.Dark.spacing(2, 1),
      borderBottom: "solid 2px",
      borderColor: $DefaultColor,
      color: $DefaultColor,
    };
  }
);

const BoxActivitiesContent = styled.div(() => {
  return {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: 10,
    padding: Theme.Dark.spacing(2, 0),
  };
});

const BoxActivitiesListDot = styled(ListItemIcon)(() => {
  return {
    "&&.MuiListItemIcon-root": {
      minWidth: Theme.Dark.spacing(2),
      alignSelf: "baseline",
      marginTop: "10px",
    },
  };
});

const BoxActivitiesList = styled(ListItem)(() => {
  return {
    "&&.MuiListItem-root": {
      paddingTop: 0,
      margin: 0,
    },
  };
});

const Styles = {
  Container,
  TitleStyles,
  TextStyles,
  Content,
  Box,
  BoxActivities,
  BoxActivitiesHeader,
  BoxActivitiesContent,
  BoxActivitiesListDot,
  BoxActivitiesList,
};

export default Styles;
