import { colors, Theme } from "config";
import styled from "styled-components";
import { FontFamily, svgImageComponent } from "components";

const Container = styled.div(()=> {
  return {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    margin: Theme.Dark.spacing(2),
    padding: Theme.Dark.spacing(1),
  }
})

const Content = styled.div(()=> {
  return {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: Theme.Dark.spacing(10),
    gap: Theme.Dark.spacing(25),
  }
})

const AvatarBox = styled.div(()=> {
  return {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "90%",
    height: "auto",
    borderRadius: "200px",
    backgroundColor: colors.purple
  }
})

const TextStyles = styled.span<{ $DefaultColor?: string }>(
  ({ $DefaultColor }) => {
    return {
      ...FontFamily.extrabold18,
      color: $DefaultColor,
    };
  }
);

const ImageCompanyBox = styled.div(()=> {
  return {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: "auto",
    borderRadius: Theme.Dark.spacing(1),
    backgroundColor: colors.purple,
    margin: Theme.Dark.spacing(2),
    padding: Theme.Dark.spacing(4, 1),
  }
})

const ImageMemberComapnyBox = styled.div(()=> {
  return {
    width: "100%",
    height: "auto",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: Theme.Dark.spacing(1),
    margin: Theme.Dark.spacing(2),
  }
})

const Styles = {
  Container, 
  Content,
  AvatarBox,
  TextStyles,
  ImageCompanyBox,
  ImageMemberComapnyBox,
}

export default Styles;