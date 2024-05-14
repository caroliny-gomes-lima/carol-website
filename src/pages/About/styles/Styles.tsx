import { ListItem, ListItemIcon } from "@mui/material";
import { FontFamily } from "components";
import { Theme } from "config";
import styled from "styled-components";

const Container = styled.div(() => {
  return {
    width: "100%",
    height: "fit-content",
    margin: Theme.Dark.spacing(2),
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

const TextStyles = styled.text<{ defaultColor?: string }>(
  ({ defaultColor }) => {
    return {
      ...FontFamily.bold16,
      textAlign: defaultColor ? "left" : "center",
      color: defaultColor,
    };
  }
);

const Box = styled.div(() => {
  return {
    ...FontFamily.medium16,
    alignItems: "center",
    width: "fit-content",
    display: "flex",
    flexWrap: "wrap",
    padding: Theme.Dark.spacing(1, 2),
    border: "solid 2px red",
    borderRadius: "5px",
    gap: 12,
  };
});

const BoxActivities = styled.div<{ defaultColor: string }>(
  ({ defaultColor }) => {
    return {
      alignItems: "center",
      width: "auto",
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      padding: Theme.Dark.spacing(0, 2),
      border: "solid 2px",
      borderColor: defaultColor,
      borderRadius: "5px",
      gap: 12,
    };
  }
);

const BoxActivitiesHeader = styled.div<{ defaultColor: string }>(
  ({ defaultColor }) => {
    return {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      padding: Theme.Dark.spacing(2, 1),
      borderBottom: "solid 2px",
      borderColor: defaultColor,
      color: defaultColor,
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
