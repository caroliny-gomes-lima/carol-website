import { ListItem, ListItemIcon } from "@mui/material";

import { colors, FontFamily, Theme } from "config";
import { LiveEditor, LivePreview } from "react-live";
import styled from "styled-components";

const Container = styled.div<{ backgroundColor?: boolean }>(({ theme, backgroundColor }) => {
  const { palette: colors, spacing } = theme;
  return {
    width: "100%",
    height: "fit-content",
    padding: spacing(2),
    marginBottom: spacing(5),
    borderRadius: spacing(1),
    backgroundColor: backgroundColor ? colors.secondary.main + "9F" : "transparent",
  };
});

const Content = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing(3),
  };
});

const BoxActivities = styled.div(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(1),
  border: `2px solid ${theme.palette.info.main}`,
  borderRadius: theme.spacing(1),
}));

const BoxActivitiesHeader = styled.div(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  paddingBottom: theme.spacing(1),
  borderBottom: `2px solid ${theme.palette.info.main}`,
  color: theme.palette.info.main,
}));

const BoxActivitiesContent = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  paddingTop: theme.spacing(2),
}));

const BoxActivitiesListDot = styled(ListItemIcon)(() => {
  return {
    "&&.MuiListItemIcon-root": {
      minWidth: Theme.Dark.spacing(2),
      alignSelf: "baseline",
      marginTop: "10px",
    },
  };
});

const BoxActivitiesList = styled(ListItem)(() => ({
  paddingTop: 0,
  margin: 0,
}));

const ChartBox = styled.div(() => {
  return {
    display: "flex",
    width: "100%",
    height: "75vh",
    borderRadius: "10px",
    border: "solid 2px",
    borderColor: colors.purple,
    backgroundColor: `${colors.blackCarbon}60`,
  };
});

// const PreviewCodeBox = styled.div(() => {
//   return {
//     width: "100%",
//     height: "fit-content",
//     margin: Theme.Dark.spacing(2),
//     padding: Theme.Dark.spacing(1),
//     border: "solid 2px",
//     borderColor: colors.yellow,
//     borderRadius: Theme.Dark.spacing(1),
//   };
// });

const LiveEditorCodeBox = styled(LiveEditor)(() => {
  return {
    width: "100%",
    height: "fit-content",
  };
});

const LivePreviewCodeBox = styled(LivePreview)(() => {
  return {
    width: "100%",
    height: "fit-content",
    display: "flex",
    justifyContent: "center",
    padding: Theme.Dark.spacing(1),
    border: "solid 2px",
    borderColor: colors.yellow,
    borderRadius: Theme.Dark.spacing(1),
    backgroundColor: "#ECECEC",
  };
});

const Styles = {
  Container,
  Content,
  BoxActivities,
  BoxActivitiesHeader,
  BoxActivitiesContent,
  BoxActivitiesListDot,
  BoxActivitiesList,
  ChartBox,
  LiveEditorCodeBox,
  LivePreviewCodeBox,
};

export default Styles;
