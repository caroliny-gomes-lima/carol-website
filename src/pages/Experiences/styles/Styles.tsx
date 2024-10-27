import { Box, ListItem, ListItemIcon } from "@mui/material";
import { colors } from "config";
import { LiveEditor, LivePreview } from "react-live";
import styled from "styled-components";

const Container = styled.div<{ backgroundColor?: boolean }>(
  ({ theme, backgroundColor }) => {

    return {
      width: "100%",
      height: "fit-content",
      padding: theme.spacing(2),
      marginBottom: theme.spacing(5),
      borderRadius: theme.spacing(1),
      backgroundColor: backgroundColor
        ? theme.palette.secondary.main + "9F"
        : "transparent",
    };
  }
);

const Content = styled.div(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(3),
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

const BoxActivitiesListDot = styled(ListItemIcon)(({ theme }) => {

  return {
    "&&.MuiListItemIcon-root": {
      minWidth: theme.spacing(2),
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

const EditorCodeBox = styled(LiveEditor)(() => {
  return {
    width: "100%",
    height: "fit-content",
  };
});

const PreviewCodeBox = styled(LivePreview)(({ theme }) => {
  return {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
    border: "solid 2px",
    borderColor: theme.palette.info.main,
    borderRadius: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  };
});

const PreviewContent = styled(LivePreview)(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: theme.spacing(5),
  };
});

const ImageBox = styled(Box)(({ theme }) => {
  return {
    display: "flex",
    width: "fit-content",
    padding: theme.spacing(1),
    backgroundColor: theme.palette.secondary.contrastText,
    borderRadius: theme.spacing(1),
    margin: theme.spacing(1),
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
  EditorCodeBox,
  PreviewCodeBox,
  PreviewContent,
  ImageBox
};

export default Styles;
