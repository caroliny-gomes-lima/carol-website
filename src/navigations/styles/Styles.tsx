import { Theme } from "config";
import styled from "styled-components";
//import LargeLogo from "../../assets/images/MediCareIconLarge.png"

const Container = styled.div(() => {
  return {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "100%",
  }
})

const RoutesContainer = styled.div(() => {
  return {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    flex: "1",
    padding: "0",
    maxWidth: "100vw",
    height: "100%",
    border: "solid 1px blue",
    //color: "blue",
  };
});

const PageContainer = styled.div(() => {
  return {
    display: "flex",
    flexDirection: "row",
    //width: "100%",
    height: "calc(90vh - 10px)",
    overflowY: "auto",
    border: "solid 1px yellow",
  };
});

// const LogoAsBackground = styled.div(({theme}) => {
// return {
//   backgroundImage: `url(${LargeLogo})`,
//   backgroundRepeat: "no-repeat",
//   opacity: "0.1",
//   position: "absolute",
//   top: 100,
//   left: 400,
//   width: "70%",
//   height: "85%",
//   zIndex: -1,
// }
// })

const PageContent = styled.div(() => {
  return {
    width: "100%",
    height: "100%",
    backgroundColor: "red",
  };
});

const Styles = {
  Container,
  RoutesContainer,
  PageContainer,
  PageContent,
  //LogoAsBackground,
}

export default Styles;
