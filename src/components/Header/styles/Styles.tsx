import { Theme } from "config";
import styled from "styled-components";
import { FontFamily } from "components";
import colors from "config/colors";

const Container = styled.div(()=> {
  return {
    display: "flex",
    position: "relative",
    backgroundColor: "black",
    padding: Theme.Dark.spacing(0, 2, 0, 2),
    //border: "solid 1px purple",
  }
})

const Content = styled.div(() => {
  return {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "fit-content",
  };
});

const LogoGroup = styled.div(() => {
  return {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 15,
    alignItems: "center",
  };
});

const NavGroup = styled.div(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    //alignItems: "center",
  };
});

const TextName = styled.text(() => {
  return {
    ...FontFamily.bold18,
    marginLeft: Theme.Dark.spacing(0.5),
    color: colors.purple,
  };
});

const Styles = {
  Container,
  Content,
  LogoGroup,
  TextName,
  NavGroup
}

export default Styles;