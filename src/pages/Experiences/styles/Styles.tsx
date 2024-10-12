import { ListItem, ListItemIcon } from "@mui/material";
import { FontFamily } from "components";
import { colors, Theme } from "config";
import { LiveEditor, LivePreview } from "react-live";
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
    justifyContent: "space-between",
    gap: Theme.Dark.spacing(5),
    alignItems: "center",
    marginTop: Theme.Dark.spacing(1),
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

const TextStyles = styled.span<{ $DefaultColor?: string }>(
  ({ $DefaultColor }) => {
    return {
      ...FontFamily.extrabold18,
      textAlign: $DefaultColor ? "left" : "center",
      color: $DefaultColor,
    };
  }
);

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
  TextStyles,
  ChartBox,
  LiveEditorCodeBox,
  LivePreviewCodeBox,
};

export default Styles;
