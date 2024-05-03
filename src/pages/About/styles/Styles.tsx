import { FontFamily } from "components";
import { Theme } from "config";
import styled from "styled-components";

const Container = styled.div(()=> {
  return {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    //position: "relative",
    //padding: Theme.Dark.spacing(10, 2, 0, 2),
    margin: Theme.Dark.spacing(2),
    border: "solid 1px red",
  }
})

const Content = styled.div(()=> {
  return {
    width: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    //padding: Theme.Dark.spacing(0, 2, 0, 2),
    //margin: Theme.Dark.spacing(2),
    border: "solid 1px yellow",
  }
})

const TitleStyles = styled.h1(()=> {
  return{
  ...FontFamily.extrabold42,
  display: "flex",
  }
})

const TextStyles = styled.text(()=> {
  return{
  ...FontFamily.bold16,
  textAlign: "center",
  }
})

const BoxStyles = styled.div((defaultColor)=> {
  return {
    ...FontFamily.medium16,
    alignItems: "center",
    width: "fit-content",
    display: "flex",
    flexWrap: "wrap",
    //position: "relative",
    //backgroundColor: Theme.Dark.palette.primary.main,
    padding: Theme.Dark.spacing(1, 2),
    //margin: Theme.Dark.spacing(2),
    border: "solid 2px red",
    borderRadius: "5px",
    gap: 12,
  }
})

const Styles = {
  Container,
  TitleStyles,
  TextStyles,
  Content,
  BoxStyles,
}

export default Styles;